import {Select} from '@material-ui/core'
import React, {ChangeEvent} from 'react'
import withCountries from '../../../countries/with-countries'
import {CountriesSelectProps} from './types'

const CountriesSelect = ({
  list,
  selectedCountry,
  setSelectedCountry,
}: CountriesSelectProps): JSX.Element => {
  const handleOnChange = ({
    target: {value},
  }: ChangeEvent<{name?: string | undefined; value: unknown}>) =>
    setSelectedCountry(value as string)

  return (
    <Select
      native
      value={selectedCountry}
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

export default withCountries(CountriesSelect)
