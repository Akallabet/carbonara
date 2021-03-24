import {CustomPhoneFieldProps} from './types'
import TextField from './text-field'
import {Box, Typography} from '@material-ui/core'

const PhoneField = ({prefix, ...props}: CustomPhoneFieldProps): JSX.Element => {
  return (
    <TextField
      InputProps={{
        startAdornment: (
          <Box width={80}>
            <Typography variant="body1" color="textSecondary">
              {prefix}
            </Typography>
          </Box>
        ),
      }}
      {...props}
    />
  )
}

export default PhoneField
