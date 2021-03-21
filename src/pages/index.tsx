import {FunctionComponent} from 'react'
import {graphql} from 'gatsby'
import {Paper} from '@material-ui/core'
import {InfoSection, LogosSection, MainSection} from '../home'

const IndexPage: FunctionComponent = () => {
  return (
    <Paper>
      <MainSection />
      <LogosSection />
      <InfoSection />
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
          button
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
          logos {
            alt
            src {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
        infoSection {
          text
          infos {
            text
            icon
            link {
              url
              label
            }
          }
        }
      }
    }
  }
`
