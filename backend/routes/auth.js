const express = require('express');

const User = require('../models/User');
const router = express.Router();




//
router.get('/',(req,res)=>{

    try{
        console.log(req.body);
        const user = User(req.body);
        user.save();
        //res.send(req.body);
        res.status(201).send({ message: "User saved successfully", user })
    }
   
    catch (error) {
        console.error("Error saving user:", error);

        // Send an error response
        res.status(500).send({ error: "Internal Server Error", details: error.message });
    }
})

module.exports = router; 