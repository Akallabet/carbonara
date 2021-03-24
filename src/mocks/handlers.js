/* eslint-disable @typescript-eslint/no-var-requires */
const {rest} = require('msw')

exports.handlers = [
  rest.post('http://www.test.com/register', (_req, res, ctx) => {
    return res(ctx.json({success: true}))
  }),
]
