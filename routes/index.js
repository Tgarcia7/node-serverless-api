'use strict'
const express = require('express')
const controller = require('../controllers')
// const { isAuth } = require('../middleware/auth')

const router = express.Router()

router.get('/healthcheck', controller.healthCheck)

// This endpoint must be the last one
router.use(controller.notFound)

module.exports = router
