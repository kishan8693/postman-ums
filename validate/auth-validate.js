// const { z } = require('zod')

// const signupSchema = z.object({
//     name:z
//     .string({ required_error:"name is required"})
//     .trim()
//     .min(10,{message:"the name must be 10 characters..."})
//     .max(20,{message:"name should be not more than 20 characters"}),
    
//     email:z
//     .string({required_error:"email is required "})
//     .trim()
//     .min(10,{message:"email must be 10 characters"})
//     .max(30,{message:"email should be not more than 30 character"}),

//     password:z
//     .string({required_error:"password is required"})
//     .trim()
//     .min(8,{message:"password must be atleast 8 character"})
//     .max(12,{message:"password should be not more than 12 characters"})
// })

// module.exports = signupSchema