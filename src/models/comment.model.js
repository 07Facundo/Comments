import { Sequelize } from "sequelize";

// Aquí se crea una instancia de Sequelize, que es un ORM (Object-Relational Mapping) para Node.js.
const sequelize = new Sequelize("test_connect_lab", "root", "43697547", {
  host: "localhost",
  dialect: "mysql",
});

// Se define un modelo llamado Comment que representa una tabla en la base de datos. Tiene dos columnas
const Comment = sequelize.define("comment", {
  id_comment: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    trim: true,
  },
  position: {
    type: Sequelize.STRING(60),
    allowNull: false,
    trim: true,
  },
  testimony: {
    type: Sequelize.STRING(500),
    allowNull: false,
  }
});

//  crea la tabla en la base de datos si aún no existe.
Comment.sync()
  // El bloque .then() maneja el caso en que la sincronización es exitosa.
  .then(() => {
    console.log("Tabla creada");
  })
  // El bloque .catch() maneja errores durante la sincronización.
  .catch((err) => {
    console.log("Error al crear la DB: ", err);
  });

// verifica si la conexión a la base de datos es exitosa.
sequelize
  .authenticate()
  .then(() => {
    console.log("Base de datos conectada correctamente");
  })
  .catch((err) => {
    console.error("Error al conectar a la base de datos:", err);
  });

export default Comment;
