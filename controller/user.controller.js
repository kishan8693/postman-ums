const Users = require('../models/user')

exports.getUsers =async(req,res)=>{
    try{
        const users = await Users.find()
        res.status(200).json({
            success:true,
            message:"SHOW ALL USERS!!!!",
            data:users
        })
    }catch(error){
        res.status(404).json({
            success:false,
            message:"NOT FOUND USERS"
        })
    }
}

exports.getUser = async (req,res) => {
    try{
        const userId = req.params.id
        const userDetails = await Users.findById(userId)
        if(!userDetails){
            res.status(404).json({
                success:false,
                message:"NOT FOUND USER FROM GIVEN ID"
            })
        }
        res.status(200).json({
            success:true,
            message:`FIND USER FROM GIVEN ID IS:${userId}`,
            userDetails
        })
    }catch(error){
        res.status(400).json({
            success:false,
            message:"SOMETHING WENT TO WRONG....."
        })
    }
}

exports.createUser = async(req,res) =>{
    try{
        const newUser = await Users.create({
            name:req.body.name,
            email:req.body.email,
            mobile:req.body.mobile,
            password:req.body.password,
            userType:req.body.userType,
        })
        res.status(200).json({
            success:true,
            message:"NEW USER ADDED SUCCESSFULLY!!",
            data:newUser
        })
    }catch(error){
        res.status(400).json({
            success:false,
            message:"SOMETHING WENT TO WRONG....."
        })
    }
}

exports.updateUser = async(req,res)=>{
    const updateUser = await Users.findByIdAndUpdate(
        req.params.id,
        req.body,{
            new:true
        }
    )
    res.status(200).json({
        success:true,  
        message:`USER UPDATE FROM GIVEN ID IS${req.params.id}`,
        data:updateUser
    })
}

exports.deleteUsers = async(req,res)=>{
    try{
        const userId = req.params.id
        const deleteUsers = await Users.findByIdAndDelete(userId) 
        res.status(200).json({
            success:true,
            message:"DELETED USER IS:",
            data:deleteUsers
        })
    }catch(error){
        res.status(400).json({
            success:false,
            message:"SOMETHING WENT TO WRONG"
        })
    }
}