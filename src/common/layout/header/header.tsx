import {FunctionComponent} from 'react'
import {graphql} from 'gatsby'

import {Hidden} from '@material-ui/core'

import {withContent} from '../../providers/content-provider'
import DesktopHeader from './desktop-header'
import MobileHeader from './mobile-header'
import {HeaderProps} from './types'

const Header: FunctionComponent<HeaderProps> = ({
  content: {header},
}: HeaderProps) => {
  return (
    <header>
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
