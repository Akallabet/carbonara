import {useState} from 'react'
import {useTimeout} from '../common/hooks'

import withCountries from '../countries/with-countries'

type CityRollProps = {cities: Array<string>}

const CityRoll = ({cities}: CityRollProps): JSX.Element => {
  const [cityIndex, setCityIndex] = useState(0)

  useTimeout(
    () => setCityIndex(cityIndex === cities.length - 1 ? 0 : cityIndex + 1),
    3000,
    cityIndex,
  )

  return <>{cities[cityIndex]}</>
}

export default withCountries(CityRoll)
