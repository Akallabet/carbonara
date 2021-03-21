import {useMediaQuery, useTheme} from '@material-ui/core'

type useBreakpointsType = () => {
  isMobile: boolean
  isGreaterThanMobile: boolean
  isTablet: boolean
  isDesktopSmall: boolean
  isDesktop: boolean
  isDesktopLarge: boolean
}

const useBreakpoints: useBreakpointsType = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const isGreaterThanMobile = useMediaQuery(theme.breakpoints.up('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'))
  const isDesktopSmall = useMediaQuery(theme.breakpoints.down('md'))
  const isDesktop = useMediaQuery(theme.breakpoints.down('lg'))
  const isDesktopLarge = useMediaQuery(theme.breakpoints.down('xl'))

  return {
    isMobile,
    isGreaterThanMobile,
    isTablet,
    isDesktopSmall,
    isDesktop,
    isDesktopLarge,
  }
}

export default useBreakpoints
