'use strict'
const { server } = require('../server')
const supertest = require('supertest')

const app = server.app

beforeAll(() => {
  process.env.NODE_ENV = 'test'
})

test('Test health check endpoint', async () => {
  const res = await supertest(app).get('/healthcheck')
  expect(res.status).toBe(200)
})

test('Test non-existing endpoint', async () => {
  const res = await supertest(app).get('/non-existing')
  expect(res.status).toBe(404)
})
