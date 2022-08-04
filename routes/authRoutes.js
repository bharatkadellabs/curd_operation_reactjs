const express =require('express');
const router =express.Router();
const authControler =require ('../controllers/authControler');

router.post("/",authControler.registerUser);
router.post("/login",authControler.loginUser);

module.exports=router; 