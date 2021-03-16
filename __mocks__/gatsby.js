/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const React = require('react')

const gatsby = jest.requireActual('gatsby')
module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  navigate: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({innerRef, to, ...rest}) =>
      React.createElement('a', {
        ...rest,
        ref: innerRef,
        href: to,
      }),
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
}
