import {useEffect, useState} from 'react'
import {CountriesSelectProps} from '../common/layout/header/types'

import withCountries from '../countries/with-countries'

const CityRoll = ({
  selectedCountry,
  list,
}: CountriesSelectProps): JSX.Element => {
  const [cityIndex, setCityIndex] = useState(0)

  const {cities} = list.find(({code}) => code === selectedCountry) || {
    cities: [],
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCityIndex(cityIndex === cities.length - 1 ? 0 : cityIndex + 1)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [cityIndex])

  return <>{cities[cityIndex]}</>
}

export default withCountries(CityRoll)
