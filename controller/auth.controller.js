const Users = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = async (req,res)=>{
    try{
        const{name,email,mobile,password,userType} = req.body
        const userExist = await Users.findOne({email:email})

        if(userExist){
            return res.status(400).json({
                success:false,
                message:"user is alreayd register with us"
            })
        }

        const saltRound = 10
        const hash_password = await bcrypt.hash(password,saltRound)

        const userCreated = await Users.create({
            name,email,mobile,password:hash_password,userType
        })        
        res.status(201).json({
            success:true,
            message:"new user added succesfully",
            data:userCreated,
            token:await userCreated.generateToken()
        })
    }catch(error){
        res.status(404).json({
            success:false,
            message:"something went to wrong"
        })
    }   
}

exports.login = async(req,res)=>{
    try{
        const {email,password} = req.body
        const userExist = await Users.findOne({email})

        if(!userExist){
            res.status(404).json({
                success:false,
                message:"user not found please register first"
            })
        }

        const verify =  await bcrypt.compare(password,userExist.password)
        if(verify){
            res.status(200).json({
                success:true,
                message:"Login Successfully!!!",
                token: await userExist.generateToken()
            })
        }
        res.status(500).json({
            success:false,
            message:"something went to wrong"
        })
    }catch(error){
        console.log(error)
    }
}