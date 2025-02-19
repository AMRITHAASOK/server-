const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser){
            return res.status(400).json({ message: "User already exists" });
        } 
        else{
              // Create new user
              const salt = await bcrypt.genSalt(10);
              const hashedPassword = await bcrypt.hash(password, salt);
              const newUser = new User({ name, email, password: hashedPassword });
              await newUser.save();
              

        res.status(201).json({ message: "User registered successfully" });
        }

      
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.login=async(req,res)=>{
    console.log("Inside login Function");

    const {email,password} = req.body

    const existingUser = await User.findOne({email})
    console.log(existingUser);
    
    if (existingUser) {
        const actualPswd = await bcrypt.compare(password, existingUser.password);
        if (actualPswd) {
            // token generation
            const token = jwt.sign({ userId: existingUser._id }, process.env.jwtKey);
            console.log(token);
            
            res.status(200).json({ existingUser, token });
        } else {
            res.status(401).json("Incorrect password");
        }
    }
    else{
        res.status(402).json("Invalid User")
    }
    
}

exports.getUserList=async(req,res)=>{
    console.log("Inside UserList controller");
    
    try{
        const response = await users.find()
        res.status(200).json(response)
    }
    catch(err){
        res.status(406).json(err)  
    }
}


