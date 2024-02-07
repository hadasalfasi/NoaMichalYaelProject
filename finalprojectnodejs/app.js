require("dotenv").config();
const cors=require('cors');
const express=require('express');
const app=express();
const mongoose=require('mongoose')
const Task=require('./routes/task')
const Users=require("./routes/users")
const IdTask=require("./routes/idTask")
const bodyParser=require('body-parser')

app.use(cors());
app.use(bodyParser.json());
app.use('/task',Task);
app.use('/users',Users);
app.use('/idTask',IdTask)

const CONACTION_URL='mongodb+srv://Tasks:123@atlascluster.emaryrv.mongodb.net/?retryWrites=true&w=majority'
const PORT=5000;
mongoose.connect(CONACTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>app.listen(PORT,()=>console.log(`server runing on port ${PORT}`)))
.catch((error)=>console.log(error.message));

