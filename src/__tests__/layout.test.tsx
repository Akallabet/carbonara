import HomePage from '../pages'
import header from '../mocks/content/header.json'
import footer from '../mocks/content/footer.json'

import {renderWithProviders} from '../test-utils/render-with-providers'
import {fireEvent, within} from '@testing-library/react'

const content = {
  header,
  footer,
}

test('should display an Header with logo, links and buttons for Desktop', () => {
  const {getAllByAltText, getByText, getByRole} = renderWithProviders(
    <HomePage />,
    content,
  )

  expect(getAllByAltText(header.logo.altText).length).toEqual(2)
  header.nav.links.forEach(({label}) => {
    expect(getByText(label)).toBeVisible()
  })
  expect(getByRole('button', {name: 'For Diners'})).toBeDefined()
  expect(getByRole('link', {name: 'Sign up'})).toBeDefined()
})

test('should display the Header with logo and menu icon for Mobile', async () => {
  const {getByTestId, getByRole} = renderWithProviders(<HomePage />, content)
  expect(
    getByRole('link', {
      name: 'Sign up',
      hidden: false,
    }),
  ).toBeDefined()
  expect(within(getByTestId('mobile')).queryByText('Sign up')).toBeNull()

  fireEvent.click(getByRole('button', {name: 'menu'}))
  expect(
    await within(getByTestId('menu')).findByText('Sign up'),
  ).toBeInTheDocument()
})

test('should display the footer', () => {
  const {getByText, getByLabelText} = renderWithProviders(<HomePage />, content)

  expect(getByText(footer.copyRight)).toBeDefined()
  expect(getByText(footer.main)).toBeDefined()
  footer.socialMedia.forEach(({type}) => {
    expect(getByLabelText(type)).toBeDefined()
  })
})
