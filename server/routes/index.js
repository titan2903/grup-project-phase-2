const { Router } = require('express')
const router = Router()
const API = require('./routeAPI.js')
const Users = require('./routeUsers.js')
const ImdbId = require('./routeApiIMDBId');

router.use('/imdbid', ImdbId)
router.use('/api', API)
router.use('/users', Users)

module.exports = router