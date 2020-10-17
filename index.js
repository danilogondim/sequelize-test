require('dotenv').config({ path: __dirname + '/.env' })
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres'
});


const Category = sequelize.define('category', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});


Category.findAll({ attributes: ['name', 'description'] })
  .then(categories => {
    console.log(categories.every(category => category instanceof Category))
    console.log("All categories:", JSON.stringify(categories, null, 2));
  }); // true)

// test connection
// sequelize.authenticate()
//   .then(() => console.log('Connection has been established successfully.'))
//   .catch(e => console.error('Unable to connect to the database:', e))
//   .then(() => sequelize.close())
//   .then(() => console.log('Connection has been closed successfully.'))
//   .catch(e => console.error('Unable to close connection:', e))