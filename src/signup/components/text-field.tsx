import MuiTextField from '@material-ui/core/TextField'
import {CustomTextFieldProps} from './types'

const TextField = ({
  register,
  error,
  label,
  required,
  messages,
  ...props
}: CustomTextFieldProps): JSX.Element => {
  const helperText = error ? messages.error[error.type] : messages.info
  const extraProps: {label?: string} = {}
  if (label) extraProps.label = `${required ? '* ' : ''}${label}`

  return (
    <MuiTextField
      variant="outlined"
      size="small"
      margin="none"
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
      {...extraProps}
      fullWidth
      inputRef={register}
      helperText={helperText}
    />
  )
}

export default TextField
