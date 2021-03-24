import SignupPage from '../pages/signup'
import header from '../content/header.md'
import footer from '../content/footer.md'
import countries from '../content/countries.md'
import signup from '../content/sign-up.md'

import {renderWithProviders} from '../test-utils/render-with-providers'
// import {fireEvent, within} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'

test('should show a sinup page with title and list of images', () => {
  const {getByText} = renderWithProviders(<SignupPage />)

  expect(getByText(signup.attributes.text)).toBeDefined()
  expect(getByText('Step 1 of 2')).toBeDefined()
})

test('should show the first step of the registration process', () => {
  const {getByText, getByPlaceholderText, getByLabelText} = renderWithProviders(
    <SignupPage />,
  )

  const step1 = signup.attributes.steps[0]
  expect(getByText(`${step1.step}. ${step1.title}`)).toBeDefined()
  expect(getByPlaceholderText(step1.rows[0][0].placeholder)).toBeDefined()
  expect(getByPlaceholderText(step1.rows[1][0].placeholder)).toBeDefined()
  expect(getByPlaceholderText(step1.rows[2][0].placeholder)).toBeDefined()
  expect(getByText(step1.rows[2][0].messages.info)).toBeDefined()
  expect(getByLabelText(step1.rows[3][0].label)).toBeDefined()
})
