import {Box, Button, Grid} from '@material-ui/core'
import TextField from './text-field'
import PhoneField from './phone-field'
import SelectField from './select'
import {FormProps} from '../types'

import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const createSchema = rows => {
  const yupShape = {}
  for (const row of rows) {
    for (const {name, required, validation} of row) {
      if (validation && required) {
        yupShape[name] = yup[validation]().required()
      } else if (validation) {
        yupShape[name] = yup[validation]()
      }
    }
  }

  return yup.object().shape(yupShape)
}

import Checkbox from './checkbox'

const Form = ({rows, button, onSubmit}: FormProps): JSX.Element => {
  const {register, errors, handleSubmit, setValue} = useForm({
    resolver: yupResolver(createSchema(rows)),
  })

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      {rows.map((items, i) => (
        <Box mb={6} key={i}>
          <Grid container spacing={5}>
            {items.map(({type, width, name, ...props}, j) => (
              <Grid item xs={12} sm={width} key={j}>
                {(type === 'text' && (
                  <TextField
                    register={register}
                    name={name}
                    {...props}
                    error={errors[name]}
                  />
                )) ||
                  (type === 'phone' && (
                    <PhoneField
                      register={register}
                      name={name}
                      {...props}
                      error={errors[name]}
                    />
                  )) ||
                  (type === 'select' && (
                    <SelectField
                      onChange={setValue}
                      register={register}
                      name={name}
                      {...props}
                    />
                  )) ||
                  (type === 'checkbox' && (
                    <Checkbox
                      onChange={setValue}
                      register={register}
                      name={name}
                      error={errors[name]}
                      {...props}
                    />
                  ))}
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
