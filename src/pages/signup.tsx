import {FunctionComponent} from 'react'
import {graphql} from 'gatsby'
import {Header} from '../common/layout'

const SignupPage: FunctionComponent = () => {
  return <Header />
}

export default SignupPage

export const query = graphql`
  query SignupPage {
    header: restApiContentHeader {
      ...Header
    }
  }
`
