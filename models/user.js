const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const Usersshcema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    mobile:{
        type:Number,
        required:[true,"mobile number should not be more than 10 digit"]
    },
    password:{
        type:String,
        unique:true
    },
    userType:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

Usersshcema.methods.generateToken = async function(){
    try{
        return jwt.sign(
            {
                usersId:this.id.toString(),
                name:this.name,
                email:this.email,
                mobile:this.mobile,
                password:this.password,
                userType:this.userType,
            },
            "KIHAN-THAKOR",
            {
                expiresIn:"1d"
            }
        )
    }catch(error){
        console.log(error)
    }
}
// Usersshcema.pre('save',async function(next){
//     const salt = await bcrypt.genSalt()
//     this.password = await bcrypt.hash(this.password,salt);
//     next();
// });


// UserSchema.methods.matchPassword = async function(enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };

module.exports = mongoose.model('Users',Usersshcema)