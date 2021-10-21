const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    require: true,
  },
  weight: {
    type: Number,
  },
});

module.exports = model('User', userSchema);
