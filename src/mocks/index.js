/* eslint-disable @typescript-eslint/no-var-requires */
const {setupServer} = require('msw/node')

const {handlers} = require('./handlers')

const server = setupServer(...handlers)

exports.server = server
