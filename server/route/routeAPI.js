const { Router } = require('express')
const router = Router()
const Controller = require('../controllers/api_controllers.js')

router.get('/google_search/:search', Controller.googleSearch)

module.exports = router