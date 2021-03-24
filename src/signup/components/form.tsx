import {Box, Button, Grid} from '@material-ui/core'
import TextField from './text-field'
import PhoneField from './phone-field'
import SelectField from './select'
import {FormProps} from '../types'

import {useForm} from 'react-hook-form'

const Form = ({rows, button, onSubmit}: FormProps): JSX.Element => {
  const {register, handleSubmit, setValue} = useForm()
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      {rows.map((items, i) => (
        <Box mb={6} key={i}>
          <Grid container>
            {items.map(({type, width, ...props}, j) => (
              <Grid item xs={12} sm={width} key={j}>
                {type === 'text' ? (
                  <TextField register={register} {...props} />
                ) : (
                  ''
                )}
                {type === 'phone' ? (
                  <PhoneField register={register} {...props} />
                ) : (
                  ''
                )}
                {type === 'select' ? (
                  <SelectField
                    onChange={setValue}
                    register={register}
                    {...props}
                  />
                ) : (
                  ''
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
      <Box textAlign="right">
        <Button variant="contained" color="primary" type="submit">
          {button}
        </Button>
      </Box>
    </Box>
  )
}

export default Form
