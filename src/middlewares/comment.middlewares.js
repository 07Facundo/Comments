

export function saveCommentMiddleware(req, res, next) {
  // Extraer los datos del comentario de la solicitud (reemplazar con tu método específico)
  const commentData = req.body;

  // Guardar los datos del comentario en la solicitud
  req.comment = commentData;

  req.comment.id_comment = savedComment.id_comment; 

  console.log(req.comment);

  // Llamar al siguiente middleware o controlador
  next();
}
