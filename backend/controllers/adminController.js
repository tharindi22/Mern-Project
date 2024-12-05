import { request } from "express"
import validator from "validator"
import bcrypt from 'bcrypt'
import {v2 as cloudnary} from "cloudinary"
import doctorModel from "../models/doctorModel.js"


//API for adding doctor
const addDoctor = async (req,res) => {
    try{
        const{name,email,password,speciality,degree,experience,about,fees,address} = req.body
        const imageFile = req.file 
        
        // checking for all data to add doctor
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({success:false,message:"Missing Details"})
        }

        // validating email format
        if (validator.isEmail(email)) {
            return res.json({success:false,message:"Pleace enter the valid email"})
        }

        //validating strong password
        if (password.length < 8) {
            return res.json({success:false,message:"Pleace enter the valid password"})  
        }

        //hashing doctor passowrd 
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //upload img to cloudnary
        const imageUpload = await cloudnary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        const doctorData ={
            name,
            email,
            
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address)
            
        }

        const newDocror = new doctorModel(doctorData)
        await newDocror.save()

        res.json({success:true,message:"Doctor Added"})

    
    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
    
}

export{addDoctor}