import express from 'express'

import authRoutes from './routes/registerPost.routes.js'

// Se crea una instancia de la aplicación Express llamada app
const app = express()


// Se configura el middleware para analizar datos en formato JSON en las solicitudes entrantes.Esto permite que la aplicación procese datos JSON enviados por los clientes (por ejemplo, en solicitudes POST).
app.use(express.json());

// Se especifica que todas las rutas que comiencen con /api deben ser manejadas por el módulo authRoutes.
app.use('/api', authRoutes)

// Se exporta la instancia de la aplicación app para que pueda ser utilizada en otros archivos o módulos.
export default app
