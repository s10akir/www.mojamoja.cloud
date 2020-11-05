import 'reflect-metadata'

import express from 'express'
import passport from 'passport'
import { Strategy as BearerStrategy } from 'passport-http-bearer'
import { createConnection, getConnection } from 'typeorm'

import router from './routes'

// FIXME: 開発環境でのNuxtのHMR時にDBへのコネクションプールが維持されたまま再起動するので、
//        getConnectionのConnectionNotFoundErrorを利用してコネクションプール初期化を行っている
//        普通に最悪
try {
  const connection = getConnection()
  // promiseなので同期を取らないと次のコネクションプール初期化に失敗する
  connection.close().then(() => createConnection())
} catch {
  // catchにあるがこれが期待する正常時動作
  // （アプリケーション起動時はコネクションプールがないことを期待する）
  createConnection()
}

const app = express()
app.use(passport.initialize())

passport.use(
  new BearerStrategy((token, done) => {
    // FIXME: トークンの検証
    if (token === 'TRUE') {
      return done(null, true)
    } else {
      return done(null, false)
    }
  })
)

app.use(router)

export default {
  path: '/api',
  handler: app,
}
