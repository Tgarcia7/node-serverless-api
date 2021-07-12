'use strict'
const mysql = require('serverless-mysql')({
  config: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  zombieMaxTimeout: 300
})

mysql.clearConnection = function () {
  return new Promise(async (resolve, reject) => {
    try {
      await mysql.end()
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = mysql
