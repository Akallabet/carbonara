import {Box, Grid, Typography} from '@material-ui/core'
import {useState} from 'react'
import {withContent} from '../common/providers/content-provider'
import {PhoneField, SelectField, TextField} from './form'
import {AccountCreationProps} from './types'

const AccountCreation = ({
  content: {
    signup: {text, steps},
  },
}: AccountCreationProps): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(steps[0])
  // const next = () => {}
  // const complete = () => {}

  return (
    <Box px={11}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" color="textSecondary">
          {text}
        </Typography>
        <Typography
          variant="h5"
          color="textSecondary"
        >{`Step ${currentStep.step} of ${steps.length}`}</Typography>
      </Box>
      <Box>
        <Box key={currentStep.step}>
          <Typography
            variant="h5"
            color="textSecondary"
          >{`${currentStep.step}. ${currentStep.title}`}</Typography>
        </Box>
        <Box component="form">
          {currentStep.rows.map((items, i) => (
            <Box mb={6} key={i}>
              <Grid container>
                {items.map(({type, width, ...props}, j) => (
                  <Grid item xs={12} sm={width} key={j}>
                    {type === 'text' ? <TextField {...props} /> : ''}
                    {type === 'phone' ? <PhoneField {...props} /> : ''}
                    {type === 'select' ? <SelectField {...props} /> : ''}
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default withContent(AccountCreation)
