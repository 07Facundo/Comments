const commentForm = document.getElementById('commentForm');

commentForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Evita el envío predeterminado del formulario

  const formData = new FormData(commentForm); // Obtener datos del formulario

  const username = formData.get('username');
  const position = formData.get('position');
  const testimony = formData.get('testimony');

  // Preparar el objeto de datos del comentario
  const commentData = {
    username,
    position,
    testimony
  };

  // Llamar a la función createComment para crear el comentario
  await crearComentario(commentData);

  // Manejar la respuesta (éxito o error)
  // ...

  // Opcionalmente, limpiar el formulario después del envío
  commentForm.reset();
});
