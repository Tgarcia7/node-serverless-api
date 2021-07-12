'use strict'
const logger = require('../logger/index')
const HTTP_STATUS_CODES = require('http').STATUS_CODES

async function healthCheck(req, res) {
  logger.create(logger.LEVELS.INFO, '200', 'HealthCheck endpoint succesfully processed', 
    HTTP_STATUS_CODES[200], req.body)
  res.status(200).send(HTTP_STATUS_CODES[200])
}

async function notFound(req, res) {
  if (!req.route) {
    logger.create(logger.LEVELS.INFO, '200', `A not found endpoint was requested: ${req.originalUrl}`, 
      HTTP_STATUS_CODES.OK, req.body)
    res.status(404).send(HTTP_STATUS_CODES[404])
  }
}

module.exports = {
  healthCheck,
  notFound
}
