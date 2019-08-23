const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: String,
    password: String,
    balance: { type: [Number], default: [10] },
    bets_id: [{ type: Schema.Types.ObjectId, ref: 'Bet' }],
}, { timestamps: true })

const User = mongoose.model('User', UserSchema)
module.exports = User