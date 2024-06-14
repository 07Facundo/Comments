import Post from '../models/post.model.js'

// Defino una función llamada registerPost que acepta dos parámetros: req (la solicitud HTTP) y res (la respuesta HTTP). La función se declara como async, lo que significa que puede contener operaciones asincrónicas (como las consultas a la base de datos).
export const registerPost = async (req, res) => {

    // Extrae las propiedades username y comment del cuerpo de la solicitud (req.body). Estas propiedades deben estar presentes en la solicitud enviada al servidor.
    const { username, comment } = req.body

   try {

    // Crea una nueva instancia del modelo Post. Asigna los valores de username y comment a las propiedades correspondientes del nuevo post.
    const newPost = new Post({
        username,
        comment
    })

    // Guarda el nuevo post en la base de datos. El uso de await indica que esta operación es asincrónica y esperamos a que se complete antes de continuar.
    const postSaved = await newPost.save()

    // Envía una respuesta JSON al cliente con el post guardado
    res.json(postSaved);

    // Captura cualquier error que ocurra durante la ejecución del bloque
   } catch (err) {
    // Si ocurre un error, envía una respuesta con un código de estado 500 (error interno del servidor) y un mensaje de error en formato JSON.
    res.status(500).json({message: err.message});
    }
};