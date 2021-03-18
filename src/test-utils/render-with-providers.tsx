import {render, RenderResult} from '@testing-library/react'
import PageProvider from '../common/providers/page-provider'
import ThemeProvider from '../common/providers/theme-provider'

type HOFRender = <T>(Component: JSX.Element, data: T) => RenderResult

export const renderWithProviders: HOFRender = (Component, data) =>
  render(
    <ThemeProvider
      element={<PageProvider props={{data}} element={Component} />}
    />,
  )
