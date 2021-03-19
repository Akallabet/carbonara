import {rest} from 'msw'

import header from './content/header.json'
import footer from './content/footer.json'

export const handlers = [
  rest.get('/content/header', (req, res, ctx) => res(ctx.json(header))),
  rest.get('/content/footer', (req, res, ctx) => res(ctx.json(footer))),
]
