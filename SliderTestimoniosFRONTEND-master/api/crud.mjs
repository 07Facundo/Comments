import api from "./axios.mjs";
import axios from './axios.mjs';


async function getComentarios() {
  try {
    const respuesta = await api.get('/comentarios'); // Ajusta el endpoint si es necesario
    const comentarios = respuesta.data;
    // Usa los datos de los comentarios en la lógica de tu frontend
    console.log(comentarios); // Ejemplo de uso
  } catch (error) {
    console.error('Error al obtener comentarios:', error);
    // Maneja los errores de forma adecuada, p. ej., muestra un mensaje de error al usuario
  }
}

export async function crearComentario(datosComentario) {
  // datosComentario debe ser un objeto que contenga nombre de usuario, puesto y testimonio
  try {
    const respuesta = await api.post('/comments', datosComentario);
    const nuevoComentario = respuesta.data;
    // Usa los datos del comentario recién creado
    console.log(nuevoComentario); // Ejemplo de uso
  } catch (error) {
    console.error('Error al crear comentario:', error);
    // Maneja los errores de forma adecuada
  }
}

async function getComentario(idComentario) {
  try {
    const respuesta = await api.get(`/comentarios/${idComentario}`); // Ajusta el endpoint
    const comentario = respuesta.data;
    // Usa los datos del comentario
    console.log(comentario); // Ejemplo de uso
  } catch (error) {
    console.error('Error al obtener comentario:', error);
    // Maneja los errores de forma adecuada, p. ej., muestra un mensaje si no se encuentra el comentario
  }
}

async function eliminarComentario(idComentario) {
  try {
    await api.delete(`/comentarios/${idComentario}`); // Ajusta el endpoint
    console.log('Comentario eliminado exitosamente'); // O muestra un mensaje de éxito
  } catch (error) {
    console.error('Error al eliminar comentario:', error);
    // Maneja los errores de forma adecuada
  }
}

async function actualizarComentario(idComentario, datosActualizados) {
  // datosActualizados debe ser un objeto que contenga las propiedades actualizadas
  try {
    const respuesta = await api.put(`/comentarios/${idComentario}`, datosActualizados); // Ajusta el endpoint
    const comentarioActualizado = respuesta.data;
    console.log(comentarioActualizado); // Ejemplo de uso
  } catch (error) {
    console.error('Error al actualizar comentario:', error);
    // Maneja los errores de forma adecuada
  }
}



