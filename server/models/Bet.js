const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const betSchema = new Schema({
    apuestas: Number,
    cantidad: Number,
    unoxdos: String,
    local: String,
    visitante: String,
    uno: Number,
    dos: Number,
    equis: Number
}, { timestamps: true })

const Bet = mongoose.model('Bet', betSchema);
module.exports = Bet