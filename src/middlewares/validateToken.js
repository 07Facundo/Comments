import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const authRequired = (req, res, next) =>{
    const { token } = req.cookies;
    
    if (!token) return res.status(401).json({ message: 'No token, authorization denied'});
    
    jwt.verify(token, TOKEN_SECRET, (err, comment) =>{
        if (err) return res.status(403).json({ message: 'Invalid token, authorization'});
        
        // Check if `user` object has an `id` property
        if (comment.id_comment) {
            console.log(comment)
            req.comment = comment;
        } else {
            // Handle the case where `id` is missing (optional)
            console.error('User ID not found in decoded token');
        }
    
        next();
        
    })
    
}