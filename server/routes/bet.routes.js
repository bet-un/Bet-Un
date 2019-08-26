const express = require('express')
const router = express.Router()
//const User = require("../models/User");
const Bet = require('../models/Bet')



// requiero axios
const axios = require('axios')


router.get('/getAllBets', (req, res) => {
    Coaster.find()
        .then(allBets => res.json(allBets))
        .catch(err => console.log('Error', err))
})

router.post('/postBet', (req, res) => {
    Bet.create(req.body)
        .then(theNewBet => res.json(theNewBet))
        .catch(err => console.log('Error', err))
})


module.exports = router