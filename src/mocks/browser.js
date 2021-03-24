/* eslint-disable @typescript-eslint/no-var-requires */
const {setupWorker} = require('msw')
const {handlers} = require('./handlers')

const worker = setupWorker(...handlers)

exports.worker = worker
