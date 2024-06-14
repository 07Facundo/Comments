import { Router } from "express";
import { registerPost } from '../controllers/registerPost.controller.js';

// Se crea una instancia de un enrutador utilizando la función Router() proporcionada por Express. Los enrutadores se utilizan para definir rutas y manejar solicitudes HTTP específicas.
const router = Router();

// Se define una ruta POST con la URL /registerPost. Cuando se recibe una solicitud POST a esta ruta, se ejecutará la función registerPost.
router.post('/registerPost', registerPost);


export default router;
