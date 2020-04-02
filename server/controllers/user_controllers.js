const User = require('../models').User
const Password = require('../helpers/password')
const jwt = require('jsonwebtoken')

class UserControllers {

    static login(req, res) {
        User.findOne({
                where: {
                    username: req.body.username
                }
            })
            .then(user => {
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

}

module.exports = UserControllers