const express=require('express')
const router=express.Router();
const {getIdTask,updateRunId}=require('../controllers/idTask')

// router.post('/',addIdTask);
router.get('/',getIdTask);
router.put('/',updateRunId);
module.exports=router