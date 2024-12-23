const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');


const{body, validationResult} = require('express-validator');


// ROUTE 1: Get all the notes : GET  "http://localhost:5000/api/notes/fnotes".  Login required

router.get('/fnotes',fetchuser,async (req,res)=>{
    try {
        const notes = await Note.find({user:req.user.id});
        res.json(notes);
    } catch (error) {
        console.error(error.message);
            res.status(500).send("Internal Server Error");
    }
    
})


// ROUTE 2: Post a new note : POSt  "http://localhost:5000/api/notes/anote". Login required
router.post('/anote',fetchuser,[
   
    body('title','Enter a valid title').isLength({ min: 5 }),
    body('description', 'Description must have 10 characters ').isLength({ min: 10 }),
    ],async (req,res)=>{
         
        //if there are errors -> return bad requesta and the error description
       try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const {title,description,tag} = req.body;
        const note = new Note({
            title, description,tag, user: req.user.id
        })
        const savedNote = await note.save()
        return res.json(savedNote);
       } catch (error) {
        console.error(error.message);
           return res.status(500).send("Internal Server Error");
        }
      
    })


    // ROUTE 3: Update an existing note: PUT  "http://localhost:5000/api/notes/unote". Login required
    router.put('/unote/:id',fetchuser,async (req,res)=>{
        try {
            const {title,description,tag} = req.body;
        //Create a New Note object
        const newNote = {};
        if(title){newNote.title = title;}
        if(description){newNote.description = description;}
        if(tag){newNote.tag = tag;}



        //Find the note to be updated and update it
        let existingnote = await Note.findById(req.params.id);
        if(!existingnote){
            return res.status(404).send("Not Found");
        }

        //cross check the existing note's user-id against the user id of the logged in user - that we have gotten from fetchuser.js
        if(existingnote.user.toString()!== req.user.id){
           return  res.status(404).send("Invalid Request");
        }
        updatednote = await Note.findByIdAndUpdate (req.params.id,{$set:newNote},{new:true});
        return res.json(updatednote);
            
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
        
    })

    // ROUTE 4: Delete an existing note: DELETE  "http://localhost:5000/api/notes/dnote". Login required
    router.delete('/dnote/:id',fetchuser,async (req,res)=>{

        try {
            //Find the note to be delete and delete it
        const existingnote = await Note.findById(req.params.id);
        if(!existingnote){
            return res.status(404).send("Not Found");
        }

        //cross check the existing note's user-id against the user id of the logged in user - that we have gotten from fetchuser.js

        //Allow deletion only if user owns this note
        if(existingnote.user.toString()!= req.user.id){
            return res.status(404).send("Invalid Request");
        }
        const deletednote = await Note.findByIdAndDelete(req.params.id);
        return res.json({"Success":"Note has been deleted","Deleted Note ID" : deletednote.id});
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
        
        
        
    })


module.exports = router;