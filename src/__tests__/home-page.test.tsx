import HomePage from '../pages'
import header from '../mocks/content/header.json'
import footer from '../mocks/content/footer.json'

import {renderWithProviders} from '../test-utils/render-with-providers'
// import {fireEvent, within} from '@testing-library/react'

const content = {
  header,
  footer,
}

test.skip('should display a dropdown with a list of countries', () => {
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
