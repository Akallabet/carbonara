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
  query NotFound {
    header: markdownRemark(frontmatter: {title: {eq: "header"}}) {
      frontmatter {
        logo {
          altText
        }
        nav {
          links {
            label
            url
          }
          buttons {
            diners
            signUp
          }
        }
      }
    }
    footer: markdownRemark(frontmatter: {title: {eq: "footer"}}) {
      frontmatter {
        copyRight
        main
        socialMedia {
          type
        }
      }
    }
    countries: markdownRemark(frontmatter: {title: {eq: "countries"}}) {
      frontmatter {
        selected
        list {
          code
          name
          shortName
          cities
        }
      }
    }
  }
`
