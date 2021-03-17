import {render, RenderResult} from '@testing-library/react'
import ContentProvider from '../content/content-provider'

type HOFRender = <T>(Component: JSX.Element, content: T) => RenderResult

export const renderWithProviders: HOFRender = (Component, content) =>
  render(<ContentProvider data={content}>{Component}</ContentProvider>)
