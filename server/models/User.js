const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: String,
    password: String,
    balance: { type: [Number], default: [10] },
    bets: [{ type: Schema.Types.ObjectId, ref: 'Bet' }],
    card: { type: Boolean, default: false }
}, { timestamps: true })

const User = mongoose.model('User', UserSchema)
module.exports = User