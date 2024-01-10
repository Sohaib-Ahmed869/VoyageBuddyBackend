const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: { type: String, required: true, unique: true },
    lastname: String,
    email: String,
    password: String,
    dateOfBirth: Date
});

module.exports = mongoose.model('User', userSchema);
