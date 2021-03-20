import {useState} from 'react'
import {withContent} from '../common/providers/content-provider'
import CountriesContext from './countries-context'

const {Provider} = CountriesContext

interface CountriesProviderProps {
  content: {
    countries: {
      selected: string
    }
  }
  children: React.ReactNode
}

const CountriesProvider = ({
  children,
  content: {
    countries: {selected},
  },
}: CountriesProviderProps): JSX.Element => {
  const [selectedCountry, setSelectedCountry] = useState(selected)

  return (
    <Provider value={{selectedCountry, setSelectedCountry}}>
      {children}
    </Provider>
  )
}

export default withContent(CountriesProvider)
