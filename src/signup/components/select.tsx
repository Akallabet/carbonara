import {useEffect, ChangeEvent} from 'react'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import MuiTextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import {CustomSelectFieldProps} from './types'

const Select = ({
  register = () => null,
  error,
  label,
  messages,
  name,
  options,
  onChange = () => null,
  ...props
}: CustomSelectFieldProps): JSX.Element => {
  const handleChange = ({
    target: {value},
  }: ChangeEvent<{name?: string | undefined; value: unknown}>) => {
    onChange(name, value as string)
  }

  useEffect(() => {
    register({name})
    onChange(name, options[0])
  }, [register])

  return (
    <FormControl fullWidth>
      <InputLabel id={`label-${name}-id`} shrink>
        {label}
      </InputLabel>
      <MuiTextField
        select
        value={options[0]}
        id={`label-${name}-id`}
        onChange={handleChange}
        inputProps={{
          id: `${name}-id`,
          'data-testid': `select-${name}-id`,
        }}
        variant="outlined"
        size="small"
        margin="none"
        fullWidth
        inputRef={register}
        {...props}
      >
        {options.map(option => (
          <MenuItem key={option} value={option}>
            <Typography variant="body1" color="textSecondary">
              {option}
            </Typography>
          </MenuItem>
        ))}
      </MuiTextField>
    </FormControl>
  )
}

export default Select
