const cctx = require('ccxt')

const poloniex = new cctx.poloniex({
  apiKey: process.env.POLONIEX_API_KEY,
  secret: process.env.POLONIEX_SECRET,
})

module.exports = {
  returnBalances(params) {
    return poloniex.fetchBalance(params)
  }
}

