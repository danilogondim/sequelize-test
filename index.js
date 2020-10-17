require('dotenv').config({ path: __dirname + '/.env' })
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres'
});


sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(e => console.error('Unable to connect to the database:', e))
  .then(() => sequelize.close())
  .then(() => console.log('Connection has been closed successfully.'))
  .catch(e => console.error('Unable to close connection:', e))