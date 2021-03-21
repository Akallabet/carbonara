import {Box, Grid, Typography} from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp'
import TuneIcon from '@material-ui/icons/Tune'
import AddCircleOutlineRounded from '@material-ui/icons/AddCircleOutlineRounded'

import {Link} from 'gatsby'
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
    <Box data-testid="info-section" py={12} px={10}>
      <Typography variant="h4" color="textSecondary">
        {text}
      </Typography>
      <Grid container>
        {infos.map(({text, icon, link: {url, label}}) => {
          const Icon = icons[icon] || (() => '')
          return (
            <Grid item key={icon} xs={12} sm={4}>
              <Box display="flex">
                <Box>
                  <Icon aria-label={icon} color="secondary" />
                </Box>
                <Box>
                  <Typography variant="body1" color="textSecondary">
                    {text}
                  </Typography>
                  <Link to={url} color="textSecondary">
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
