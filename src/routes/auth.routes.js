import { Router } from "express";
import { registerPost } from '../controllers/auth.controller.js';

const router = Router();

router.post('/registerPost', registerPost);



export default router;
