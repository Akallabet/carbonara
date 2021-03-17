import React from 'react'
// import {useStaticQuery, graphql} from 'gatsby'

// import {Typography, Box} from '@material-ui/core'
// import {makeStyles} from '@material-ui/core/styles'

import {ErrorBoundary as ErrorBoundaryComponent} from 'react-error-boundary'

// import {Layout, Button} from '../../components'

// const useStyles = makeStyles(({spacing, palette}) => ({
//   title: {
//     paddingTop: '50%',
//     marginTop: spacing(4),
//     fontSize: '35px',
//     color: palette.primary.main,
//   },
//   subTitle: {
//     fontSize: '18px',
//     marginBottom: 'auto',
//     lineHeight: '30px',
//   },
// }))

const ErrorPage = () => {
  return <p>error</p>
}

interface ErrorBoudaryProps {
  children: React.ReactNode
}

const ErrorBoundary = ({children}: ErrorBoudaryProps): JSX.Element => {
  return (
    <ErrorBoundaryComponent FallbackComponent={ErrorPage}>
      {children}
    </ErrorBoundaryComponent>
  )
}

export default ErrorBoundary
