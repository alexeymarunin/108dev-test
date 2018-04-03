const Koa        = require('koa')
const Router     = require('koa-router')
const dotenv     = require('dotenv')

// Загружаем настройки из .env
dotenv.config()

const app    = new Koa()
const router = new Router()

const poloniex = require('./poloniex')

router.get('/returnBalances', async (ctx, next) => {
  const balance = await poloniex.returnBalances()
  ctx.response.body = balance
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(process.env.APP_PORT || 3000)
