/* eslint-disable @typescript-eslint/no-var-requires */
const {setupServer} = require('msw/node')

const {rest} = require('msw')

const header = require('./content/header.json')
const footer = require('./content/footer.json')
const countries = require('./content/countries.json')

const server = setupServer(
  rest.get('https://www.test.com/content/header', (req, res, ctx) => {
    return res(ctx.json(header))
  }),
  rest.get('https://www.test.com/content/footer', (req, res, ctx) => {
    return res(ctx.json(footer))
  }),
  rest.get('https://www.test.com/content/countries', (req, res, ctx) => {
    return res(ctx.json(countries))
  }),
)

server.listen()
