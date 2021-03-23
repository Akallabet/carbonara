import SignupPage from '../pages/signup'
import header from '../content/header.md'
import footer from '../content/footer.md'
import countries from '../content/countries.md'
import signup from '../content/sign-up.md'

import {renderWithProviders} from '../test-utils/render-with-providers'
// import {fireEvent, within} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'

test.skip('should show a sinup page with title and list of images', () => {
  const {
    getAllByAltText,
    getByText,
    getByRole,
    getByTestId,
  } = renderWithProviders(<SignupPage />)

  expect(getByText('Sign Up')).toBeDefined()
})
