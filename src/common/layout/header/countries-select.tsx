import {Select} from '@material-ui/core'
import React, {ChangeEvent, FunctionComponent, useState} from 'react'
import {CountriesSelectProps} from './types'

const CountriesSelect: FunctionComponent<CountriesSelectProps> = ({
  selected,
  list,
}: CountriesSelectProps) => {
  const [country, setCountry] = useState(selected)
  const handleOnChange = ({
    target: {value},
  }: ChangeEvent<{name?: string | undefined; value: unknown}>) =>
    setCountry(value as string)

  return (
    <Select
      native
      value={country}
      onChange={handleOnChange}
      inputProps={{'data-testid': 'country-selector'}}
    >
      {list.map(({code, name}) => (
        <option key={code} value={code} color="primary">
          {name}
        </option>
      ))}
    </Select>
  )
}

export default CountriesSelect
