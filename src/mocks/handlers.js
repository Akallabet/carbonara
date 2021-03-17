import {rest} from 'msw'

import header from './content/header.json'

export const handlers = [
  rest.get('/content/header', (req, res, ctx) => res(ctx.json(header))),
]
