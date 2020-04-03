const { Router } = require('express')
const router = Router()
const Controller = require('../controllers/api_controllers.js')
const Auth = require('../middlewares/auth')

router.get('/holidays/:ISOcountry/:year', Auth, Controller.holiday)

router.get('/google_search/:search', Auth, Controller.googleSearch)


module.exports = router