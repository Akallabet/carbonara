/* eslint-disable @typescript-eslint/no-var-requires */
const React = require('react')

module.exports = {
  StaticImage: jest.fn().mockImplementation(props =>
    React.createElement('img', {
      ...props,
    }),
  ),
}
