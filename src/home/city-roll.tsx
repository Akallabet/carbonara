import {useEffect, useState} from 'react'

import withCountries from '../countries/with-countries'

type CityRollProps = {cities: Array<string>}

const CityRoll = ({cities}: CityRollProps): JSX.Element => {
  const [cityIndex, setCityIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCityIndex(cityIndex === cities.length - 1 ? 0 : cityIndex + 1)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [cityIndex])

  return <>{cities[cityIndex]}</>
}

export default withCountries(CityRoll)
