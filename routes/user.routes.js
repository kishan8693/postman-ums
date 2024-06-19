const express = require('express')

const{
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUsers,
} = require('../controller/user.controller')
const router = express.Router()


router.route('/')
.get(getUsers)
.post(createUser)

router.route('/:id')
.get(getUser)
.put(updateUser)
.delete(deleteUsers)

module.exports = router