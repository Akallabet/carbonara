import useMediaQuery from '@material-ui/core/useMediaQuery'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const mock = () => useMediaQuery.mockImplementation(() => false)

export default mock
