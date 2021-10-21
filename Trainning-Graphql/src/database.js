const mongoose = require('mongoose');

async function connect() {
  try {
    mongoose.connect('mongodb://localhost/mongodbGraphql');
    console.log('Db is connected');
  } catch (error) {
    console.log(error);
  }
}

module.exports = connect;
