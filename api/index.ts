import 'reflect-metadata'

import express from 'express'
import { createConnection } from 'typeorm'

import router from './routes'

// TODO: error handling
createConnection()

const app = express()

app.use(router)

export default {
  path: '/api',
  handler: app,
}
