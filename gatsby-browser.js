import ThemeProvider from './src/common/providers/theme-provider'
import PageProvider from './src/common/providers/page-provider'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {worker} = require('./src/mocks/browser')
worker.start()

export const wrapPageElement = PageProvider
export const wrapRootElement = ThemeProvider
