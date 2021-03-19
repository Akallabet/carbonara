import {FunctionComponent} from 'react'
import {graphql} from 'gatsby'

const IndexPage: FunctionComponent = () => {
  return <>home</>
}

export default IndexPage

export const query = graphql`
  query HomePage {
    header: restApiContentHeader {
      ...Header
    }
    footer: restApiContentFooter {
      ...Footer
    }
  }
`
