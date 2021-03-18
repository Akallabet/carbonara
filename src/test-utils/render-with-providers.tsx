import {render, RenderResult} from '@testing-library/react'
import PageProvider from '../common/providers/page-provider'

type HOFRender = <T>(Component: JSX.Element, data: T) => RenderResult

export const renderWithProviders: HOFRender = (Component, data) =>
  render(<PageProvider props={{data}} element={Component} />)
