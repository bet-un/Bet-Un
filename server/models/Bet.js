const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const betSchema = new Schema({
    odd_1: Number,
    odd_x: Number,
    odd_2: Number,
    match_id: String
}, { timestamps: true })

const Bet = mongoose.model('Bet', betSchema);
module.exports = Bet