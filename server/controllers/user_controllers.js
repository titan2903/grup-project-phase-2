const { OAuth2Client } = require('google-auth-library');
const { User } = require('../models')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const jwt = require('jsonwebtoken')
require('dotenv').config()

class UserControllers {

    static login(req, res) {

    }

    static register(req, res) {

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