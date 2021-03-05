const Hapi = require('@hapi/hapi')
require('dotenv-extended').load({ errorOnMissing: true })

const server = Hapi.server({
  port: process.env.PORT
})

const routes = [].concat(
  require('./routes/healthy'),
  require('./routes/healthz')
)

server.route(routes)

module.exports = server
