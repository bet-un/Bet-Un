const express = require('express');
const authRoutes = express.Router();

const passport = require('passport');
const bcrypt = require('bcrypt');

const User = require('../models/User');


authRoutes.post('/signup', (req, res, next) => {
    const { username, password } = req.body

    if (!username || !password) {
        res.status(400).json({ message: 'Rellena todos los campos' });
        return;
    }

    if (password.length < 7) {
        res.status(400).json({ message: 'La contraseña debe tener mínimo 8 caracteres' });
        return;
    }

    User.findOne({ username }, (err, foundUser) => {

        if (err) {
            res.status(500).json({ message: "Problema con el usuario." });
            return;
        }

        if (foundUser) {
            res.status(400).json({ message: 'Este usuario ya existe.' });
            return;
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);

        const aNewUser = new User({
            username: username,
            password: hashPass
        });

        aNewUser.save(err => {
            if (err) {
                res.status(400).json({ message: 'Problema al registrar el usuario.' });
                return;
            }

            // Automatically log in user after sign up
            // .login() here is actually predefined passport method
            req.login(aNewUser, (err) => {

                if (err) {
                    res.status(500).json({ message: 'Problema al entrar.' });
                    return;
                }

                // Send the user's information to the frontend
                // We can use also: res.status(200).json(req.user);
                res.status(200).json(aNewUser);
            });
        });
    });
});

authRoutes.post('/card', (req, res, next) => {

    const card = true

    //console.log(req.body)


    User.findByIdAndUpdate(req.user._id, { card: card })
        //console.log(user.id)
        .then(newuser => res.status(200).json(newuser))
        .catch(err => console.log('Error', err))
})


authRoutes.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
        if (err) {
            res.status(500).json({ message: 'Something went wrong authenticating user' });
            return;
        }

        if (!theUser) {
            // "failureDetails" contains the error messages
            // from our logic in "LocalStrategy" { message: '...' }.
            res.status(401).json(failureDetails);
            return;
        }

        // save user in session
        req.login(theUser, (err) => {
            if (err) {
                res.status(500).json({ message: 'Session save went bad.' });
                return;
            }

            // We are now logged in (that's why we can also send req.user)
            res.status(200).json(theUser);
        });
    })(req, res, next);
});

authRoutes.post('/logout', (req, res, next) => {
    // req.logout() is defined by passport
    req.logout();
    res.status(200).json({ message: 'Log out success!' });
});


authRoutes.get('/loggedin', (req, res, next) => {
    // req.isAuthenticated() is defined by passport
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
        return;
    }
    res.status(403).json({ message: 'Unauthorized' });
});

authRoutes.post('/update', (req, res, next) => {
    const dif = req.body.dif + ""
    const userBet = req.body.bet
    //console.log(req.body)
    //console.log(dif)

    //console.log(userBet._id, "estoy en el back")
    // console.log(req.body, "soy undefined?")
    // User.findByIdAndUpdate(req.user._id, { $push: { bets: theNewBet._id, balance: dif } }, { new: true })
    //     .then((user) => {
    //         console.log(user)
    //         console.log('aqui el nuevo usuario')
    //     })

    User.findByIdAndUpdate(req.user._id, { $push: { balance: dif, bets: userBet._id } }, { new: true })
        //console.log(user.id)
        .then(newuser => res.status(200).json(newuser))
    // User.findByIdAndUpdate(user.id, { $push: { balance: dif } })
    //     //console.log(user.id)
    //     .then(newuser => res.json(newuser))
        .catch(err => console.log('Error', err))
})


authRoutes.get('/misApuestas', (req, res, next) => {

    User.findById(req.user._id)
        .populate('bets')
        .then(bets => {
            console.log(bets)
            //console.log(user)
            res.json(bets)
        })
        .catch((err) => console.log(err))
})


module.exports = authRoutes