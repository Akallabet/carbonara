import {FunctionComponent, useState} from 'react'
import {StaticImage} from 'gatsby-plugin-image'

import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemText,
} from '@material-ui/core'

import {withContent} from '../../content/content-provider'
import MenuIcon from './menu-icon'
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

const MobileHeader: FunctionComponent<HeaderContent> = ({
  logo: {altText},
  nav: {
    links,
    buttons: {diners, signUp},
  },
}: HeaderContent) => {
  const {isMenuOpen, closeMenu, openMenu} = useMenu()
  return (
    <div data-testid="mobile">
      <Box display="flex" p={1} justifyContent="space-between">
        <StaticImage
          src="../../assets/images/logo_mobile.png"
          alt={altText}
          layout="fixed"
        />
        <IconButton onClick={openMenu}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Drawer anchor="right" open={isMenuOpen} onClose={closeMenu}>
        <Box p={2} width={250}>
          <List data-testid="menu">
            {links.map(({label, url}) => (
              <ListItemText key={label}>
                <a href={url}>{label}</a>
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

export default withContent(MobileHeader)
