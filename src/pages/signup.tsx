import {FunctionComponent} from 'react'
import {graphql} from 'gatsby'

const SignupPage: FunctionComponent = () => {
  return <>sign up</>
}

export default SignupPage

export const query = graphql`
  query SignupPage {
    header: restApiContentHeader {
      ...Header
    }
    footer: restApiContentFooter {
      ...Footer
    }
    countries: restApiContentCountries {
      selected
      list {
        code
        name
        shortName
        cities
      }
    }
  }
`
