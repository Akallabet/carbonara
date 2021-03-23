/* eslint-disable @typescript-eslint/no-var-requires */
const React = require('react')

// const Link = jest.requireActual('@material-ui/core/Link')

module.exports = jest.fn().mockImplementation(
  // these props are invalid for an `a` tag
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({innerRef, to, component, ...rest}) =>
    React.createElement('a', {
      ...rest,
      ref: innerRef,
      href: to,
    }),
)
