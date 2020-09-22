const mongoose = require('mongoose');
module.exports = mongoose.model('Plant', new mongoose.Schema(
{
    id: Number,
    type: Number,
    name: String,
    user: String,
    plantData: Array
    // temp: String,
    // light: String,
    // humidity: String,
    // moisure: String,
    // time: String
}));