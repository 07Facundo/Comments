// const getComments = () =>{

//     axios.get(`http://localhost:3000/api/comments`)
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// }

// getComments();

// const createComment = () =>{
//     axios.post(`http://localhost:3000/api/comments`)

//    .then((res) => console.log(res.data))
//    .catch((err) => console.log(err));
// }

// createComment();

async function crearComentario(datosComentario) {
  // datosComentario debe ser un objeto que contenga nombre de usuario, puesto y testimonio
  try {
    const res = await axios.post(`http://localhost:3000/api/comments`, datosComentario);
    const nuevoComentario = res.data;
    // Usa los datos del comentario recién creado
    console.log(nuevoComentario); // Ejemplo de uso
  } catch (error) {
    console.error('Error al crear comentario:', error);
    // Maneja los errores de forma adecuada
  }
}



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





