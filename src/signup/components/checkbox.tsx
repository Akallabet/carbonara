import React, {useState, useEffect} from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import MUICheckbox from '@material-ui/core/Checkbox'
import FormHelperText from '@material-ui/core/FormHelperText'
import {CustomCheckboxFieldProps} from './types'

const Checkbox = ({
  register,
  error,
  messages,
  onChange,
  name,
  checked: defaultChecked = false,
  label,
  required,
  ...props
}: CustomCheckboxFieldProps): JSX.Element => {
  const [checked, setChecked] = useState(defaultChecked)
  const helperText = error && messages.error

  const toggleStatus = () => {
    onChange(name, !checked)
    setChecked(!checked)
  }

  useEffect(() => {
    register({name, value: checked})
  }, [register])

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MUICheckbox
            {...props}
            color="primary"
            checked={checked}
            onChange={toggleStatus}
          />
        }
        label={label}
      />
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default Checkbox
