import {WrapPageElementBrowserArgs} from 'gatsby'
import ContentProvider from '../../../content/content-provider'
import ErrorBoundary from './error-boundary'

type PageProviderArgs = WrapPageElementBrowserArgs & {
  props: {
    content: any
  }
}

const PageProvider = ({element, props}: PageProviderArgs): JSX.Element => {
  console.log(props)
  return (
    <ContentProvider {...props}>
      <ErrorBoundary>{element}</ErrorBoundary>
    </ContentProvider>
  )
}

export default PageProvider
