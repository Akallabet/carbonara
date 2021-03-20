/* eslint-disable @typescript-eslint/no-var-requires */
const {setupServer} = require('msw/node')

const {rest} = require('msw')

const server = setupServer()

server.listen()
