import {WrapPageElementBrowserArgs} from 'gatsby'
import ContentProvider from '../../../content/content-provider'
import ThemeProvider from '../theme-provider'
import ErrorBoundary from './error-boundary'

type PageProviderArgs = WrapPageElementBrowserArgs & {
  props: {
    content: any
  }
}

const PageProvider = (pageProps: PageProviderArgs): JSX.Element => {
  const {element, props} = pageProps
  return (
    <ThemeProvider>
      <ContentProvider {...props}>
        <ErrorBoundary>{element}</ErrorBoundary>
      </ContentProvider>
    </ThemeProvider>
  )
}

export default PageProvider
