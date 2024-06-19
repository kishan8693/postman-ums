// const { parseAsync } = require('../validate/auth-validate')

// const validate = (schema) => async (req,res,next) =>{
//     try{    
//         const parseBody = await parseAsync(req.body)
//         req.body = parseBody
//         next()
//     }catch(err){
//         const message = err.errors[0].message
//         console.log(message)
//         res.status(400).json({
//             success:false,
//             message:message
//         })
//     }   
// }
// module.exports = validate