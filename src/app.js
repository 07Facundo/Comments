import express from 'express'

import commentRoutes from './routes/comment.routes.js'
import { saveCommentMiddleware } from './middlewares/comment.middlewares.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Se crea una instancia de la aplicación Express llamada app
const app = express()

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    credentials: true,
}));
// Se configura el middleware para analizar datos en formato JSON en las solicitudes entrantes.Esto permite que la aplicación procese datos JSON enviados por los clientes (por ejemplo, en solicitudes POST).
app.use(express.json());

app.use(cookieParser());

// Se especifica que todas las rutas que comiencen con /api deben ser manejadas por el módulo authRoutes.
app.use('/api', commentRoutes);

// Se exporta la instancia de la aplicación app para que pueda ser utilizada en otros archivos o módulos.
export default app