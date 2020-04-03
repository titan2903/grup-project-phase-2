const { Router } = require('express')
const router = Router()
const ImdbId = require('../controllers/api_imdbController');

router.get('/movies/:title', ImdbId.imdbId)

module.exports = router