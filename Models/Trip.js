const mongoose = require('mongoose');
const Mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    location: String,
    checkIn: Date,
    checkOut: Date,
    restaurants: Mongoose.Schema.Types.Mixed,
    hotels: Mongoose.Schema.Types.Mixed,
    airports: Mongoose.Schema.Types.Mixed,
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;