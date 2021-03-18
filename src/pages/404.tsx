import * as React from 'react'
import {graphql} from 'gatsby'

// markup
const NotFoundPage = (): JSX.Element => {
  return (
    <main>
      <title>Not found</title>
      <h1>Page not found</h1>
    </main>
  )
}

export default NotFoundPage

export const query = graphql`
  query NotFoundPage {
    header: restApiContentHeader {
      ...Header
    }
  }
`
