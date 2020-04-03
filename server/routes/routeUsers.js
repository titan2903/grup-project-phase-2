const { Router } = require('express')
const router = Router()
const Controller = require('../controllers/user_controllers.js')


router.post('/register', Controller.register)

router.post('/login', Controller.login)

router.post('/google-login', Controller.googleSignIn) // OAUTH

module.exports = router