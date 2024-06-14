import { Sequelize } from "sequelize";


// Aquí se crea una instancia de Sequelize, que es un ORM (Object-Relational Mapping) para Node.js.
const sequelize = new Sequelize('test_connect_lab', 'root', '43697547', {
    host: 'localhost',
    dialect: 'mysql',
});

// Se define un modelo llamado Post que representa una tabla en la base de datos. Tiene dos columnas
const Post = sequelize.define('post', {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      trim: true,
    },
    comment: {
      type: Sequelize.STRING(5000),
      allowNull: false,
    }
});

//  crea la tabla en la base de datos si aún no existe.
Post.sync()
  // El bloque .then() maneja el caso en que la sincronización es exitosa.
  .then(() => {
    console.log('Tabla creada')
  })
  // El bloque .catch() maneja errores durante la sincronización.
  .catch((err) => {
    console.log('Error al crear la DB: ',err)
  })


// verifica si la conexión a la base de datos es exitosa.
sequelize.authenticate()
  .then(() => {
    console.log('Base de datos conectada correctamente');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });


export default Post 