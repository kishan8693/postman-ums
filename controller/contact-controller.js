const Contacts = require('../models/contact')

exports.sendMessages = async(req,res)=>{
    try{
        const responce = req.body
        await Contacts.create(responce)
        return res.status(200).json({
            success:true,
            message:"message send successfully"
        })
    }catch(error){
        res.status(404).json({
            success:false,
            message:"message not delivered"
        })
    }
}

