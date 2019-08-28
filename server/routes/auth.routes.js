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
    User.findByIdAndUpdate(user.id, { $push: { balance: dif } })
    //console.log(user.id)
        .then(newuser => res.json(newuser))
        .catch(err => console.log('Error', err))
})


module.exports = authRoutes