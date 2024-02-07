const express=require('express')
const router=express.Router();
const {addUser,getAllUsers}=require('../controllers/users');

router.post('/',addUser);
router.get('/',getAllUsers);
module.exports=router