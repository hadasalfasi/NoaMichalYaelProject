const mongoose = require('mongoose')

const UsersSchema=new mongoose.Schema({
    idNumber:String,
    firstName:String,
    lastName:String,
    emailAddress:String
})

module.exports=mongoose.model('Users',UsersSchema)