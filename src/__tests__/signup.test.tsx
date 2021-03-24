import SignupPage from '../pages/signup'
import header from '../content/header.md'
import footer from '../content/footer.md'
import countries from '../content/countries.md'
import signup from '../content/sign-up.md'

import {renderWithProviders} from '../test-utils/render-with-providers'
import {fireEvent} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'

test('should show a sinup page with title and list of images', () => {
  const {getByText} = renderWithProviders(<SignupPage />)

  expect(getByText(signup.attributes.text)).toBeDefined()
  expect(getByText('Step 1 of 2')).toBeDefined()
})

test('should show the fields of the registration process', async () => {
  const {
    getByText,
    findByText,
    getByPlaceholderText,
    getByLabelText,
    getByRole,
  } = renderWithProviders(<SignupPage />)

  const step1 = signup.attributes.steps[0]
  const step2 = signup.attributes.steps[1]

  expect(getByText(`${step1.step}. ${step1.title}`)).toBeDefined()
  expect(getByPlaceholderText(step1.rows[0][0].placeholder)).toBeDefined()
  expect(getByPlaceholderText(step1.rows[1][0].placeholder)).toBeDefined()
  expect(getByPlaceholderText(step1.rows[2][0].placeholder)).toBeDefined()
  expect(getByText(step1.rows[2][0].messages.info)).toBeDefined()
  expect(getByLabelText(step1.rows[3][0].label)).toBeDefined()

  fireEvent.click(getByRole('button', {name: step1.button}))

  await findByText(`${step2.step}. ${step2.title}`)

  expect(getByPlaceholderText(step2.rows[0][0].placeholder)).toBeDefined()
  expect(getByPlaceholderText(step2.rows[1][0].placeholder)).toBeDefined()
  expect(getByPlaceholderText(step2.rows[1][1].placeholder)).toBeDefined()
  expect(getByPlaceholderText(step2.rows[2][0].placeholder)).toBeDefined()
  expect(getByLabelText(step2.rows[2][1].label)).toBeDefined()
  expect(getByLabelText(step2.rows[3][0].label)).toBeDefined()
  expect(getByPlaceholderText(step2.rows[4][0].placeholder)).toBeDefined()
  expect(getByPlaceholderText(step2.rows[5][0].placeholder)).toBeDefined()
  expect(getByLabelText(step2.rows[6][0].label)).toBeDefined()
})
