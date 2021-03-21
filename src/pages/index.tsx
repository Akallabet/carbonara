import {FunctionComponent} from 'react'
import {graphql} from 'gatsby'
import {Paper} from '@material-ui/core'
import {LogosSection, MainSection} from '../home'

const IndexPage: FunctionComponent = () => {
  return (
    <Paper>
      <MainSection />
      <LogosSection />
    </Paper>
  )
}

export default IndexPage

export const query = graphql`
  query HomePage {
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
    home: markdownRemark(frontmatter: {title: {eq: "home"}}) {
      frontmatter {
        mainSection {
          text
          backgroundImage {
            alt
            src {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
        logosSection {
          text
          logos
        }
      }
    }
  }
`
