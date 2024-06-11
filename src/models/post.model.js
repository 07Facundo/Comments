import { Sequelize } from "sequelize";



const sequelize = new Sequelize('test_connect_lab', 'root', '43697547', {
    host: 'localhost',
    dialect: 'mysql',
});


const Post = sequelize.define('post', {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      trim: true,
    },
    post: {
      type: Sequelize.STRING(5000),
      allowNull: false,
    }
});

Post.sync()
  .then(() => {
    console.log('Tabla creada')
  })
  .catch((err) => {
    console.log('Error al crear la DB: ',err)
  })

sequelize.authenticate()
  .then(() => {
    console.log('Base de datos conectada correctamente');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });


export default Post