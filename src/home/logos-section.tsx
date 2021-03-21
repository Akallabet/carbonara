import {Box, Grid, GridSize, Typography} from '@material-ui/core'

import {withContent} from '../common/providers/content-provider'
import {withCountries} from '../countries'
import {LogosSectionProps} from './types'

import DonnePepe from './logos/donne-pepe'
import MammaPizza from './logos/mamma-pizza'
import MaggieFu from './logos/maggie-fu'
import EighteenB from './logos/18B'

const logoComponents = {
  'donne-pepe': DonnePepe,
  'mamma-pizza': MammaPizza,
  'maggie-fu': MaggieFu,
  '18B': EighteenB,
}

const LogosSection = ({
  selectedCountry,
  content: {
    home: {
      logosSection: {text, logos},
    },
    countries: {list},
  },
}: LogosSectionProps): JSX.Element => {
  const {name} = list.find(({code}) => code === selectedCountry) || {
    cities: [],
  }
  const logosSpaces = (12 / logos.length) as GridSize
  return (
    <Box position="relative" bgcolor="secondary.main">
      <Typography data-testid="trusted-text">
        <Box component="span" mr={1}>
          {text}
        </Box>
        <Box component="span">{name}</Box>
      </Typography>
      <Grid container>
        {logos.map((logo: string) => {
          const Logo = logoComponents[logo] || (() => '')
          return (
            <Grid key={logo} item xs={12} sm={logosSpaces}>
              <Box textAlign="center">
                <Logo />
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default withCountries(withContent(LogosSection))
