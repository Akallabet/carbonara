import {useState} from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import {Link as GatsbyLink} from 'gatsby'

import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemText,
} from '@material-ui/core'
import Link from '@material-ui/core/Link'
import MenuIcon from '@material-ui/icons/Menu'

import {HeaderContent} from './types'

const useMenu = (initialState = false) => {
  const [isMenuOpen, setIsMenuOpen] = useState(initialState)
  const openMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  return {
    isMenuOpen,
    openMenu,
    closeMenu,
  }
}

const MobileHeader = ({
  logo: {altText},
  nav: {
    links,
    buttons: {diners, signUp},
  },
}: HeaderContent): JSX.Element => {
  const {isMenuOpen, closeMenu, openMenu} = useMenu()
  return (
    <div data-testid="mobile">
      <Box display="flex" p={1} justifyContent="space-between">
        <GatsbyLink to="/">
          <StaticImage
            src="../../../assets/images/logo_mobile.png"
            alt={altText}
            layout="fixed"
          />
        </GatsbyLink>
        <IconButton onClick={openMenu} aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Box>
      <Drawer anchor="right" open={isMenuOpen} onClose={closeMenu}>
        <Box p={2} width={250}>
          <List data-testid="menu">
            {links.map(({label, url}) => (
              <ListItemText key={label}>
                <Link component={GatsbyLink} to={url}>
                  {label}
                </Link>
              </ListItemText>
            ))}
            <ListItemText>
              <Button color="secondary" variant="outlined" fullWidth>
                {diners}
              </Button>
            </ListItemText>
            <ListItemText>
              <Button
                color="primary"
                variant="contained"
                href="/signup"
                fullWidth
              >
                {signUp}
              </Button>
            </ListItemText>
          </List>
        </Box>
      </Drawer>
    </div>
  )
}

export default MobileHeader
