'use strict'
const bodyParser = require('body-parser')
const express = require('express')
const http = require('http')
const router = require('./routes')
const serverless = require('serverless-http')
const pino = require('pino')
const logger = pino({ prettyPrint: true })
// require('./models/') // init DB connection

const app = express()
const server = http.createServer(app)

app.use(bodyParser.urlencoded( { extended: false } ))
app.use(bodyParser.json())
app.use('/', router)

logger.info('Serverless API started succesfully')
module.exports = {
  handler: serverless(app),
  server: { app, server }
}
