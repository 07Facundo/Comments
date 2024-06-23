import { Router } from "express";
import { getComments, getComment, createComment, updateComment, deleteComment} from "../controllers/comment.controller.js";




const router = Router();

router.get('/comments',  getComments)

router.get('/comments/:id_comment', getComment)

router.post('/comments', createComment)

// router.post('/comments/logout', logout);

router.delete('/comments/:id_comment', deleteComment)

router.put('/comments/:id_comment', updateComment)

export default router;
