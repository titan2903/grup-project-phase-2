const { Router } = require('express')
const router = Router()
const Controller = require('../controllers/api_controllers.js')

router.get('/movies/:title', Controller.omdb)

module.exports = router