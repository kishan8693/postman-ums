const express = require("express")
const connectDB = require('./configure/db')

//routes
const Users = require('./routes/user.routes')
const auth = require("./routes/auth.route")
const Contacts = require("./routes/contact-routes")

connectDB()
const app = express()

app.use(express.json())

// use routes
app.use('/api/v1/Users',Users)
app.use('/api/v1/auth',auth)
app.use('/api/v1/Contacts',Contacts)


port=4000
app.listen(port,()=>{
    console.log(`server running on this port:${port}`)
})