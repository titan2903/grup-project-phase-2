const { OAuth2Client } = require('google-auth-library');
const { User } = require('../models')
const Password = require('../helpers/password')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const jwt = require('jsonwebtoken')
require('dotenv').config()


class UserControllers {

    static login(req, res) {
        console.log(req.body)
        User.findOne({
                where: {
                    username: req.body.username
                }
            })
            .then(user => {
                console.log(user)
                let message = 'username / password salah'
                if (!user) {
                    res.status(400).json(message)
                } else {
                    if (!Password.checkPassword(req.body.password, user.password)) {
                        res.status(400).json(message)
                    } else {
                        const token = jwt.sign({
                            userId: user.id
                        }, 'movie_list')
                        res.status(200).json({ token })
                    }
                }
            })
            .catch(err => {
                if (!err.message) {
                    res.status(400).json({
                        message: err.message
                    })
                } else {
                    console.log(err)
                    res.status(500).json({
                        message: 'internal server error'
                    })
                }
            })
    }

    static register(req, res) {
        User.create({
                username: req.body.username,
                password: Password.hashPassword(req.body.password),
                email: req.body.email
            })
            .then(user => {
                res.status(200).json(user)
            })
            .catch(err => {
                if (!err.message) {
                    res.status(400).json({
                        message: err.message
                    })
                } else {
                    console.log(err)
                    res.status(500).json({
                        message: 'internal server error'
                    })
                }
            })
    }

    static googleSignIn(req, res){
        const token = req.body.token
        const user = {}
        client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        })
            .then(data => {
                const payload = data.getPayload()
                // console.log(payload);
                user.username = payload.name
                user.email = payload.email
                user.password = 'qwerty' // INI DEFAULT AJA DULU YA GES
                return User.findOne({
                    where: {
                        email: payload.email
                    }
                })
            })
            .then(userData => {
                if (userData) {
                    return userData
                } else {
                    return User.create(user)
                }
            })
            .then(userLogin => {
                let userObj = {
                    id: userLogin.id,
                    username: userLogin.username,
                    email: userLogin.email
                }
                res.status(200).json({
                    token: jwt.sign(userObj, 'movie-list')
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

module.exports = UserControllers