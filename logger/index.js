'use strict'
const chalk = require('chalk')

const LEVELS = {
  WARN: 'WARN',
  INFO: 'INFO',
  FATAL: 'FATAL'
}

const COLORS = {
  WARN: chalk.yellow,
  INFO: chalk.blue, 
  FATAL: chalk.red
}

function create(level, code, message, statusCode, payload=null, error=null) {
  const logError = {
    code, 
    message,
    statusCode,
    error, 
    payload 
  }
  
  // eslint-disable-next-line no-console
  console.log(COLORS[level](level), logError)
}

module.exports = {
  LEVELS, 
  create
}
