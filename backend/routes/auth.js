const express = require('express');

const router = express.Router();
const User = require('../models/User');


//for password hashing 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {body,validationResult} = require('express-validator')

const fetchuser = require('../middleware/fetchuser');


const JWT_SECRET = 'Cloud10Quil@JWT_SeCreT';

// ROUTE 1: Create a User using : POST "http://localhost:5000/api/auth/createuser". No Login required
router.post('/createuser',[
   
    body('username','Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.') .isLength({ min: 5 })
    .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter.') // At least one uppercase letter
    .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter.') // At least one lowercase letter
    .matches(/\d/).withMessage('Password must contain at least one number.') // At least one number
    .matches(/[@$!%*?&#]/).withMessage('Password must contain at least one special character.') // At least one special character
  ], async (req,res)=>{
    //if there are errors -> return bad requesta and the error description
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //check whether the user with the same email exists already
    try{
        let user = await User.findOne({email: req.body.email});
    //console.log(user);
    if(user){
        return res.status(400).json({error:"Sorry a user with this email already exists"});
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt);
    user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: secPass
      })
      const data = {
        user:{
            id: user.id
        } 
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      
        //res.json(user);

        res.json({authtoken});
    }catch(error){
            console.error(error.message);
            res.status(500).send("Internal Server Error");
    }
    
  
    
    
});


//ROUTE 2: Authenticate a User using : POST "http://localhost:5000/api/auth/login". No Login required
router.post('/login',[
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
  ], async (req,res)=>{
    //if there are errors -> return bad requesta and the error description
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"Log in with correct credentials"});
        }
        const passwordCompare =await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            return res.status(400).json({error:"Log in with correct credentials"});
        }

        const data = {
            user:{
                id: user.id
            } 
          }
          const authtoken = jwt.sign(data, JWT_SECRET);
      
        

        res.json({authtoken});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
  }); 


//ROUTE 3: Get loggedin User Details using : POST "http://localhost:5000/api/auth/getuser". Login required
router.post('/getuser', fetchuser,  async (req,res)=>{
    //if there are errors -> return bad requesta and the error description
    

    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}); 

module.exports = router;  