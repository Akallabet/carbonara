import {Box, Grid, Typography} from '@material-ui/core'
import Link from '@material-ui/core/Link'
import GetAppIcon from '@material-ui/icons/GetApp'
import TuneIcon from '@material-ui/icons/Tune'
import AddCircleOutlineRounded from '@material-ui/icons/AddCircleOutlineRounded'

import {Link as GatsbyLink} from 'gatsby'
import React from 'react'
import {withContent} from '../common/providers/content-provider'

import {InfoSectionProps} from './types'

const icons = {
  download: GetAppIcon,
  settings: TuneIcon,
  plus: AddCircleOutlineRounded,
}

const InfoSection = ({
  content: {
    home: {
      infoSection: {text, infos},
    },
  },
}: InfoSectionProps): JSX.Element => {
  return (
    <Box data-testid="info-section" py={10} px={10} textAlign="center">
      <Box maxWidth={450} mx="auto" mb={10}>
        <Typography variant="h4" color="textSecondary">
          {text}
        </Typography>
      </Box>
      <Grid container spacing={10} justify="center">
        {infos.map(({text, icon, link: {url, label}}) => {
          const Icon = icons[icon] || (() => '')
          return (
            <Grid item key={icon} sm={12} md={4}>
              <Box display="flex" maxWidth={300} mx="auto">
                <Box>
                  <Icon aria-label={icon} color="secondary" fontSize="large" />
                </Box>
                <Box>
                  <Typography variant="h5" color="textSecondary">
                    <Box fontWeight="bold">{text}</Box>
                  </Typography>
                  <Link
                    color="secondary"
                    underline="always"
                    component={GatsbyLink}
                    to={url}
                  >
                    {label}
                  </Link>
                </Box>
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default withContent(InfoSection)
