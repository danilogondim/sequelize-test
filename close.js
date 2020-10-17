const sequelize = require('./index');

// close function
const close = async function() {
  try {
    await sequelize.close();
    console.log('Connection has been closed successfully.');
  } catch (error) {
    console.error('Unable to close connection:', error);
  }
}

// Call close
close();