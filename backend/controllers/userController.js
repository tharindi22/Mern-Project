import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import {v2 as cloudinary} from 'cloudinary'


// API to register user
const registerUser = async (req,res) => {
    try {
        const {name,email,password} = req.body

        if (!name || !password || !email) {
           return res.json({success:false,message:"Missing Details"}) 
        } else {
            
        }

        //validating email foemat
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"enter a valid email"}) 
        } else {
            
        }

        //validasting strong password
        if (password.length < 8) {
            return res.json({success:false,message:"enter a strong password"}) 
        } else {
            
        }

        // hashing user password
        const salt = await bcrypt.gensalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const userData = {
            name,
            email,
            passwors : hashedPassword
        }

        // for save the data in database
        const newUser = new userModel(userData)
        const user = await newUser.save()
        // _id 
        const token =jwt.sing({id:user._id}, process.env.JWT_SECRET)

        res.json({success:true,token})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//API for user login
const loginUser = async (req,res) => {
    try {
        const {email,password} = req.body
        const user = await userModel.findOne({email})

        if (!user) {
            return res.json({success:false,message:'User does not exist'}) 
        } else {
            
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if (isMatch) {
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
            res.json({success:true,token})
        } else {
           res.json({success:false,message:"Invalid credentials"}) 
        }

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//API to get user profile data
const getProfile = async (req,res) => {
    try {
        const{userId} = req.body
        const userData = await userModel.findById(userId).select('-password')

        res.json({sucess:true,userData})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// API to update user profile 
const updateProfile = async (req,res) => {
    try {
        const {userId,name,phone,address,dob,gender} = req.body
        const imageFile = req.file

        if (!userId || !name || !phone || !dob || !gender) {
            return res.json({success:false,message:"Data Missing"})
        }

        await userModel.findByIdAndUpdate(userId,{name,phone,address:JSON.parse(address),dob,gender})

        if (imageFile) {
            //upload image to cloudinary
            const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'})
            const imageURL = imageUpload.secure_url

            await userModel.findByIdAndUpdate(userId,{image:imageURL})
        }

        Response.json({sucess:true,message:error.message})

    } catch (error) {
        onsole.log(error)
        res.json({success:false,message:error.message}) 
    }
}

export {registerUser,loginUser,getProfile,updateProfile}