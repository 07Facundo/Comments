import Post from '../models/post.model.js'

export const registerPost = async (req, res) => {
    const { username, post } = req.body

   try {

    const newPost = new Post({
        username,
        post
    })

    const postSaved = await newPost.save()

    res.json(postSaved);

   } catch (err) {
    res.status(500).json({message: err.message});
    }
};