export function saveCommentMiddleware(req, res, next) {
  
    // Extraer los datos del comentario de la solicitud (reemplazar con tu método específico)
    const commentData = req.body;
  
    // Guardar los datos del comentario en la solicitud
    req.comment = commentData;

    console.log(req.comment);
  
    // Llamar al siguiente middleware o controlador
    next();
  }
  