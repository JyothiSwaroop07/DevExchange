import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import users from '../models/auth.js'


export const signup = async(req, res) => {
    const {name, email, password} = req.body;

    try{
        const existingUser = await users.findOne({email});
        if(existingUser){
            return res.status(404).json({message: "User Already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await users.create({name, email, password: hashedPassword})
        const token = jwt.sign({email: newUser.email, id:newUser._id }, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({result: newUser, token})
    } catch(error){
        res.status(500).json("Something went wrong...")
    }

} 

export const login = async(req, res) => {
    const {email, password} = req.body;
    try{
        const existingUser = await users.findOne({email});
        if(!existingUser){
            return res.status(404).json({message: "user don't exist."})
        }

        const isPasswordCrt = await bcrypt.compare(password, existingUser.password)
        if(!isPasswordCrt){
            return res.status(400).json({message: "Incorrect Credentials"});
        }

        const token = jwt.sign({email: existingUser.email, id:existingUser._id }, process.env.JWT_SECRET, {expiresIn: '1h'});
        console.log("login controller", token)
        res.status(200).json({result: existingUser, token})

    }catch(error){
        res.status(500).json("Something went wrong...")
    }
} 