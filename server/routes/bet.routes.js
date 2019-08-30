const express = require('express')
const router = express.Router()
//const User = require("../models/User");
const Bet = require('../models/Bet')
const User = require('../models/User')


// requiero axios
//const axios = require('axios')


router.get('/getAllBets', (req, res) => {
    Bet.find()
        .then(allBets => res.json(allBets))
        .catch(err => console.log('Error', err))
})

router.post('/postBet', (req, res) => {


    const { local, visitante, cantidad, unoxdos, apuestas } = req.body

    Bet.create({ local, visitante, cantidad, unoxdos, apuestas })
        .then(theNewBet => {


            res.json(theNewBet)
        })
        .catch(err => console.log('Error', err))
})


module.exports = router