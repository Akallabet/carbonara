/* eslint-disable @typescript-eslint/no-var-requires */
const {setupServer} = require('msw/node')
// const {handlers} =  require('./handlers')

const {rest} = require('msw')

const header = require('./content/header.json')

// This configures a request mocking server with the given request handlers.
const server = setupServer(
  rest.get('https://www.test.com/content/header', (req, res, ctx) => {
    return res(ctx.json(header))
  }),
)

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const {server} = require('./server')
server.listen()
