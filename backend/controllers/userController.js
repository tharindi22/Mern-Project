import validator from ' validator '
import bcrypt from ' bcrypt '
import userModel from '../models/userModel.js'
import jwt from ' jsonwebtoken '


// API to register user
const register = async (req,res) => {
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

export { registerUser,loginUser }