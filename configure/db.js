const mongoose = require('mongoose')

const connectDB = async()=>{
    const connection = await mongoose.connect("mongodb://localhost:27017/user_auth",{
    })
    console.log(`mongoDb connected:${connection.connection.host}`)
}

module.exports = connectDB
