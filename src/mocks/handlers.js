/* eslint-disable @typescript-eslint/no-var-requires */
const {rest} = require('msw')

exports.handlers = [
  rest.post('/register', (_req, res, ctx) => {
    return res(ctx.json({success: true}))
  }),
]
