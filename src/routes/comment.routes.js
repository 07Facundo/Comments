import { Router } from "express";
import { getComments, getComment, createComment, updateComment, deleteComment } from "../controllers/comment.controller.js";
import { saveCommentMiddleware } from "../middlewares/comment.middlewares.js";



const router = Router();

router.get('/comments', getComments)

router.get('/comments/:id_comment', getComment)

router.post('/comments',saveCommentMiddleware, createComment)

router.delete('/comments/:id_comment', deleteComment)

router.put('/comments/:id_comment', updateComment)

export default router;
