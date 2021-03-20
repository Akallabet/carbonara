import CountriesContext from './countries-context'

const withCountries = (
  Component: React.ElementType,
): ((props: any) => JSX.Element) => {
  const WithCountries = (props: any): JSX.Element => (
    <CountriesContext.Consumer>
      {({selectedCountry, setSelectedCountry}: any): JSX.Element => (
        <Component
          {...props}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      )}
    </CountriesContext.Consumer>
  )

  return WithCountries
}

export default withCountries
