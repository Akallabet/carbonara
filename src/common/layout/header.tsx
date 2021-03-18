import {FunctionComponent} from 'react'
import {graphql} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import {Box, Button, Hidden} from '@material-ui/core'
import {withContent} from '../../content/content-provider'

interface HeaderProps {
  content: {
    header: {
      logo: {
        altText: string
      }
      nav: {
        links: Array<{label: string; url: string}>
        buttons: {
          diners: string
          signUp: string
        }
      }
    }
  }
}

const Header: FunctionComponent<HeaderProps> = ({
  content: {
    header: {
      logo: {altText},
      nav: {
        links,
        buttons: {diners, signUp},
      },
    },
  },
}: HeaderProps) => (
  <Hidden implementation="css" xsDown>
    <Box component="header" display="flex" p={1}>
      <StaticImage src="../../assets/images/logo.png" alt={altText} />
      <Box component="nav" flexGrow="2" textAlign="right" data-testid="nav">
        {links.map(({label, url}) => (
          <a key={label} href={url}>
            {label}
          </a>
        ))}
        <Button color="secondary" variant="outlined">
          {diners}
        </Button>
        <Button color="primary" variant="contained" href="/signup">
          {signUp}
        </Button>
      </Box>
    </Box>
  </Hidden>
)

export default withContent(Header)

export const query = graphql`
  fragment Header on RestApiContentHeader {
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
`
