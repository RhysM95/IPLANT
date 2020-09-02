const mongoose = require('mongoose');
module.exports = mongoose.model('Plant', new mongoose.Schema(
{
    id: String,
    name: String,
    user: String,
    temp: Float32Array,
    light: Float32Array,
    humidity: Float32Array,
    moisure: Float32Array

}));