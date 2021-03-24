import {WrapPageElementBrowserArgs} from 'gatsby'
import ContentProvider from '../content-provider'
import {Header, Footer} from '../../components'
import ErrorBoundary from './error-boundary'
import {CountriesProvider} from '../../../countries'

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
        <CountriesProvider>
          <Header />
          {element}
          <Footer />
        </CountriesProvider>
      </ErrorBoundary>
    </ContentProvider>
  )
}

export default PageProvider
