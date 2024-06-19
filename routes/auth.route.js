const express = require('express')
const {
    register,login
} = require('../controller/auth.controller')
// const signupSchema = require('../validate/auth-validate')
// const validate = require('../middleware/validate-middleware')
const router = express.Router()

router.route('/register')
// .post(validate(signupSchema),register)
.post(register)
router.route('/login')
.post(login)

module.exports = router