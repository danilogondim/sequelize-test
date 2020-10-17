require('dotenv').config({ path: __dirname + '/.env' })
const { initModels } = require('./models/init-models')
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres'
});
const { Category,
  OrderItem,
  User,
  Order,
  Item
} = initModels(sequelize)

// after installing sequelize-auto, I could not run the command directly. I had to give the following path:
// ./node_modules/.bin/sequelize-auto -o "./models" -d sequelize_auto_test -h localhost -u my_username -p 5432 -x my_password -e postgres

// // using async-await
// const getUsers = async () => {
//   const users = await User.findAll();
//   console.log(JSON.stringify(users, null, 2));
// }
// getUsers();

// using vanilla promises
User.findAll()
  .then(users => {
    console.log(JSON.stringify(users, null, 2));
  });

// test connection
// sequelize.authenticate()
//   .then(() => console.log('Connection has been established successfully.'))
//   .catch(e => console.error('Unable to connect to the database:', e))
//   .then(() => sequelize.close())
//   .then(() => console.log('Connection has been closed successfully.'))
//   .catch(e => console.error('Unable to close connection:', e))