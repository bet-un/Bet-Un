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
    //console.log(req.body)
    //console.log("el req body trae lo de arriba")
    //const { title, overview, id, vote_average, poster_path } = req.body // no cogemos el valor de view para que salga el default de pendiente
    console.log(req.body, "soy foking reqbody de postbet")
    const { local, visitante, cantidad, unoxdos, apuestas } = req.body
    console.log(local, visitante, cantidad, unoxdos)
    Bet.create({ local, visitante, cantidad, unoxdos, apuestas })
        .then(theNewBet => {

            console.log(theNewBet, "DIOS YA APOARECE JODER OSTIA")
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