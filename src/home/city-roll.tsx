import {FC, useEffect, useState} from 'react'

type CityRollProps = {cities: Array<string>}

const CityRoll: FC<CityRollProps> = ({cities}: CityRollProps) => {
  const [cityIndex, setCityIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCityIndex(cityIndex === cities.length - 1 ? 0 : cityIndex + 1)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [cityIndex])

  return <>{cities[cityIndex]}</>
}

export default CityRoll
