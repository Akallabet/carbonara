import {FunctionComponent} from 'react'
import {graphql} from 'gatsby'
import {Grid} from '@material-ui/core'

import {MobileReviewSection} from '../home'
import {AccountCreation} from '../signup'

const SignupPage: FunctionComponent = () => {
  return (
    <Grid container>
      <Grid item sm={12} md={6}>
        <AccountCreation />
      </Grid>
      <Grid item sm={false} md={6}>
        <MobileReviewSection />
      </Grid>
    </Grid>
  )
}

export default SignupPage

export const query = graphql`
  query Signup {
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
        buttons {
          signUp {
            label
            href
          }
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
    home: markdownRemark(frontmatter: {title: {eq: "home"}}) {
      frontmatter {
        reviewSection {
          reviews {
            text
            image {
              src {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
              alt
            }
          }
        }
      }
    }
    signup: markdownRemark(frontmatter: {title: {eq: "signup"}}) {
      frontmatter {
        text
        steps {
          step
          title
          button
          rows {
            type
            label
            placeholder
            required
            width
            messages {
              error
              info
            }
            prefix
            options
          }
        }
      }
    }
  }
`
