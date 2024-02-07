const express=require('express')
const router=express.Router();
const {addTask,getTaskById,updateTaskByTaskId,deleteTaskByID}=require('../controllers/task')

router.post('/',addTask);
router.get('/:userId',getTaskById);
router.put('/',updateTaskByTaskId);//למה רק ID הוא שולח ואח"כ שולף נתונים לשמים של אובייקט?
router.delete('/:taskId',deleteTaskByID)

module.exports=router
