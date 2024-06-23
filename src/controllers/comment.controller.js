import Comment from "../models/comment.model.js";

export const getComments = async (req, res) => {
  const comments = await Comment.findAll({
    where: {
      id_comment: req.comment.id_comment,
    },
  });

  res.status(200).json(comments);
};

export const createComment = async (req, res) => {
  const { username, position, testimony } = req.body;

  const newComment = new Comment({
    username,
    position,
    testimony,
  });

  const savedComment = await newComment.save();

  req.body = savedComment.id_comment;

  console.log(req.body);

  res.json(savedComment);
};

export const getComment = async (req, res) => {
  const comment = await Comment.findByPk(req.params.id_comment);

  if (!comment) return res.status(404).json({ message: "Comment not found" });

  res.json(comment);
};

export const deleteComment = async (req, res) => {
  try {
    const { id_comment } = req.params;
    const comment = await Comment.findByPk(id_comment);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    await comment.destroy();

    res.status(204).json(); // Respuesta de "Sin contenido" para una eliminación exitosa
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting comment" });
  }
};

export const updateComment = async (req, res) => {
  try {
    const { id_comment } = req.params;
    const updatedComment = await Comment.findByPk(id_comment);

    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    const updatedValues = req.body; // Suponiendo que el cuerpo de su solicitud contiene datos de actualización
    await updatedComment.update(updatedValues);

    const updatedCommentAfterUpdate = await Comment.findByPk(id_comment); // Obtiene los datos de la tarea actualizada

    res.json(updatedCommentAfterUpdate);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Error updating comment" }); // Generic error response
  }
};
