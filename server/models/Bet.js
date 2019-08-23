const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const betSchema = new Schema({
    odd_1: String,
    odd_x: String,
    odd_2: String,
    match: String
}, { timestamps: true })

const Bet = mongoose.model('Bet', betSchema);
module.exports = Bet