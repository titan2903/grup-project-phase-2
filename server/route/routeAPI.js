const { Router } = require('express')
const router = Router()
const Controller = require('../controllers/api_controllers.js')

router.get('/holidays/:ISOcountry/:year', Controller.holiday) 


module.exports = router