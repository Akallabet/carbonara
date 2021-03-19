import {WrapPageElementBrowserArgs} from 'gatsby'
import ContentProvider from '../content-provider'
import {Header, Footer} from '../../layout'
import ErrorBoundary from './error-boundary'

type PageProviderArgs = WrapPageElementBrowserArgs & {
  props: {
    content: any
  }
}

const PageProvider = (pageProps: PageProviderArgs): JSX.Element => {
  const {element, props} = pageProps
  return (
    <ContentProvider {...props}>
      <ErrorBoundary>
        <Header />
        {element}
        <Footer />
      </ErrorBoundary>
    </ContentProvider>
  )
}

export default PageProvider
