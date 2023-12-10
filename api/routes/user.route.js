import express from 'express';
import { test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

//get used for getting the information
router.get("/test",test);
// router.get('/test',(req,res)=>{
//     res.json({
//         message:'Hello World',
//     });
// });
router.post('/update/:id', verifyToken, updateUser)

export default router;