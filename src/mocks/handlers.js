/* eslint-disable @typescript-eslint/no-var-requires */
const {rest} = require('msw')

const prefix = process.env.GATSBY_PREFIX
const url = (prefix ? `/${prefix}` : '') + '/register'

exports.handlers = [
  rest.post(url, (_req, res, ctx) => {
    return res(ctx.json({success: true}))
  }),
]
