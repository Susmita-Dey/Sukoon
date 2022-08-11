const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  email: {
    type: 'string',
    required: true,
    unique: true,
  },
  password: {
    type: 'string',
    required: true
  },
  confirmPassword: {
    type: 'string',
    required: true
  }
})

const Register = new mongoose.model('Register', personSchema);

module.exports = Register;
