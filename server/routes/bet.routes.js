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
    //console.log(req.body)
    //console.log("el req body trae lo de arriba")
    //const { title, overview, id, vote_average, poster_path } = req.body // no cogemos el valor de view para que salga el default de pendiente

    Bet.create(req.body)
        .then(theNewBet => {
            //User.findByIdAndUpdate(req.user._id, { $push: { bets: theNewBet._id } }, { new: true })

            //  .then((user) => {
            //    console.log(user)
            //  console.log('aqui el nuevo usuario')
            //})
            //console.log(theNewBet)
            // console.log('aqui la nueva apuesta')
            res.json(theNewBet)
        })
        .catch(err => console.log('Error', err))
})


module.exports = router