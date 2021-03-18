import {FunctionComponent} from 'react'
import {graphql} from 'gatsby'
// import {Header} from '../common/layout'

// interface IndexPageProps {}

// const IndexPage: FunctionComponent = () => {
//   return <Header />
// }

const IndexPage: FunctionComponent = () => {
  return <>home</>
}

export default IndexPage

export const query = graphql`
  query HomePage {
    header: restApiContentHeader {
      ...Header
    }
  }
`
