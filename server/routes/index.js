const { Router } = require('express')
const router = Router()
const API = require('./routeAPI.js')
const Users = require('./routeUsers.js')

router.use('/api', API)
router.use('/users', Users)

module.exports = router