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
        // if (!username || !password) {
        //     res.status(400).json({ message: 'Rellena todos los campos' });
        //     return;
        // }

        // if (match_hometeam_score < match_awayteam_name) {
        //     res.status(400).json();
        //     return;
        // }

        // if (match_hometeam_score == match_awayteam_name) {

        //     res.status(400).json();
        //     return;
        // }

        // if (match_hometeam_score > match_awayteam_name) {
        //     res.status(400).json();
        //     return;
        // }

        .catch(err => console.log('Error', err))
})

router.post('/postBet', (req, res) => {

    const { local, visitante, cantidad, unoxdos, apuestas, uno, dos, equis } = req.body
    Bet.create({ local, visitante, cantidad, unoxdos, apuestas, uno, dos, equis })
        .then(theNewBet => {

            // if (apuestas == ) {
            //     this.state.apuesta.unoxdos = "1"
            // } else if (this.state.apuesta.prob_AW) {
            //     this.state.apuesta.unoxdos = "2"
            // } else this.state.apuesta.unoxdos = "X"

            res.json(theNewBet)
        })
        .catch(err => console.log('Error', err))
})


module.exports = router