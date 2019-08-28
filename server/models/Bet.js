const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const betSchema = new Schema({
    apuestas: Number,
    cantidad: Number,
    unoxdos: String,
    local: String,
    visitante: String
}, { timestamps: true })

const Bet = mongoose.model('Bet', betSchema);
module.exports = Bet