const mongoose=require('mongoose')
const idTaskSchema=new mongoose.Schema({
    runTaskId:Number,
})
module.exports=mongoose.model('idTasks',idTaskSchema)