const mongoose=require('mongoose')
const TaskSchema=new mongoose.Schema({
    taskName:String,
    taskId:Number,
    userId:Number,
    description:String,
    completed:Boolean
})
module.exports=mongoose.model('Tasks',TaskSchema)