/* eslint-disable @typescript-eslint/no-var-requires */
const {rest} = require('msw')

const url = process.env.API_URL || process.env.GATSBY_API_URL

exports.handlers = [
  rest.post(url, (_req, res, ctx) => {
    return res(ctx.json({success: true}))
  }),
]
