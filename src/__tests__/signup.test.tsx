import SignupPage from '../pages/signup'
import header from '../content/header.md'
import footer from '../content/footer.md'
import countries from '../content/countries.md'
import signup from '../content/sign-up.md'

import {renderWithProviders} from '../test-utils/render-with-providers'
import {fireEvent} from '@testing-library/react'

import {server} from '../mocks'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('should show a sinup page with title and list of images', () => {
  const {getByText} = renderWithProviders(<SignupPage />)

  expect(getByText(signup.attributes.text)).toBeDefined()
  expect(getByText('Step 1 of 2')).toBeDefined()
})

test('should show the fields of the registration process', async () => {
  const {getByText, getByPlaceholderText, getByLabelText} = renderWithProviders(
    <SignupPage />,
  )

  const step1 = signup.attributes.steps[0]
  const step2 = signup.attributes.steps[1]

  expect(getByText(`${step1.step}. ${step1.title}`)).toBeDefined()
  expect(getByPlaceholderText(step1.rows[0][0].placeholder)).toBeDefined()
  expect(getByPlaceholderText(step1.rows[1][0].placeholder)).toBeDefined()
  expect(getByPlaceholderText(step1.rows[2][0].placeholder)).toBeDefined()
  expect(getByText(step1.rows[2][0].messages.info)).toBeDefined()
  expect(getByLabelText(step1.rows[3][0].label)).toBeDefined()

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

test('should show the validation errors for the first step', async () => {
  const {findByText, getByRole} = renderWithProviders(<SignupPage />)

  const step1 = signup.attributes.steps[0]
  fireEvent.click(getByRole('button', {name: step1.button}))

  expect(await findByText('Please enter your first name')).toBeDefined()
})

test('should submit the data and show the success screen', async () => {
  const {
    getByText,
    findByText,
    getByRole,
    getByPlaceholderText,
  } = renderWithProviders(<SignupPage />)

  const step1 = signup.attributes.steps[0]
  const step2 = signup.attributes.steps[1]

  fireEvent.change(getByPlaceholderText(step1.rows[0][0].placeholder), {
    target: {value: 'My First Name'},
  })
  fireEvent.change(getByPlaceholderText(step1.rows[1][0].placeholder), {
    target: {value: 'My Last Name'},
  })
  fireEvent.change(getByPlaceholderText(step1.rows[2][0].placeholder), {
    target: {value: '07543234567'},
  })
  fireEvent.click(getByRole('button', {name: step1.button}))
  expect(await findByText(`${step2.step}. ${step2.title}`)).toBeDefined()

  fireEvent.change(getByPlaceholderText(step2.rows[0][0].placeholder), {
    target: {value: 'My Restaurant'},
  })
  fireEvent.change(getByPlaceholderText(step2.rows[1][0].placeholder), {
    target: {value: 'My Address'},
  })
  fireEvent.change(getByPlaceholderText(step2.rows[1][1].placeholder), {
    target: {value: 'SI165RT'},
  })
  fireEvent.change(getByPlaceholderText(step2.rows[2][0].placeholder), {
    target: {value: 'Manchester'},
  })
  fireEvent.change(getByPlaceholderText(step2.rows[4][0].placeholder), {
    target: {value: '07543234567'},
  })
  fireEvent.change(getByPlaceholderText(step2.rows[5][0].placeholder), {
    target: {value: 'www.myrestaurant.com'},
  })

  fireEvent.click(getByRole('button', {name: step2.button}))
  expect(await findByText(signup.attributes.successPage.title)).toBeDefined()
  expect(getByText(signup.attributes.successPage.firstParagraph)).toBeDefined()
  expect(getByText(signup.attributes.successPage.secondParagraph)).toBeDefined()
})
