import {FunctionComponent} from 'react'
import {graphql} from 'gatsby'

import {Box, Hidden} from '@material-ui/core'

import {withContent} from '../../providers/content-provider'
import DesktopHeader from './desktop-header'
import MobileHeader from './mobile-header'
import {HeaderProps} from './types'
import CountriesSelect from './countries-select'

const Header: FunctionComponent<HeaderProps> = ({
  content: {header, countries},
}: HeaderProps) => {
  return (
    <header>
      <Box
        borderColor="secondary.main"
        border={1}
        borderLeft={0}
        borderTop={0}
        borderRight={0}
        textAlign="right"
      >
        <CountriesSelect {...countries} />
      </Box>
      <Hidden implementation="css" smDown>
        <DesktopHeader {...header} />
      </Hidden>
      <Hidden implementation="css" mdUp>
        <MobileHeader {...header} />
      </Hidden>
    </header>
  )
}

export default withContent(Header)

// export const query = graphql`
//   fragment Header on MarkdownRemark {
//     logo {
//       altText
//     }
//     nav {
//       links {
//         label
//         url
//       }
//       buttons {
//         diners
//         signUp
//       }
//     }
//   }
// `
