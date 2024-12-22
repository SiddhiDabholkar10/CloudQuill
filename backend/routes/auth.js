const express = require('express');

const User = require('../models/User');
const {body,validationResult} = require('express-validator')
const router = express.Router();




//Create a User using : POST "http://localhost:3000/api/auth/createuser". No Login required
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
    console.log(user);
    if(user){
        return res.status(400).json({error:"Sorry a user with this email already exists"});
    }
    user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      
    //    .then(user => res.json(user))
    //   .catch(err=>{console.log(err)
    //     res.json({error:'Please enter a unique value for email',message:err.message});
      //})
      res.json(user);
    }catch(error){
            console.error(error.message);
            res.status(500).send("Some Error Occured");
    }
    
  
    
    
});

module.exports = router;  