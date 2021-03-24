---
path: '/signup'
title: 'signup'
text: 'Sign Up'
steps:
  [
    {
      step: 1,
      title: 'Create Account',
      button: 'Next',
      rows:
        [
          [
            {
              type: 'text',
              label: 'First Name',
              placeholder: 'First Name',
              validation: 'alpha',
              required: true,
              messages: {error: 'Please enter only letters'},
              width: 12,
            },
          ],
          [
            {
              type: 'text',
              label: 'Last Name',
              placeholder: 'Last Name',
              validation: 'alpha',
              required: true,
              messages: {error: 'Please enter only letters'},
              width: 12,
            },
          ],
          [
            {
              type: 'phone',
              label: 'Phone Number',
              placeholder: '9223 7774',
              prefix: '+44 GB',
              validation: 'number',
              required: true,
              messages:
                {
                  info:
                    'Use your real mobile number, We will text you a link to
                    download the app.',
                  error: 'Please enter only numbers',
                },
              width: 12,
            },
          ],
          [
            {
              type: 'select',
              label: 'Role',
              options: ['Manager', 'Waiter'],
              messages: {error: 'Please select one option'},
              width: 6,
            },
          ],
        ],
    },
    {
      step: 2,
      title: 'Set up restaurant',
      button: 'Complete',
      rows:
        [
          [
            {
              type: 'text',
              label: 'Restaurant Name',
              placeholder: 'First Name',
              width: 12,
            },
          ],
          [
            {type: 'text', label: 'Address', placeholder: 'Address', width: 8},
            {
              type: 'text',
              label: 'Post Code',
              placeholder: 'Post Code',
              width: 8,
            },
          ],
          [
            {type: 'text', label: 'City', placeholder: 'City', width: 6},
            {
              type: 'dropdown',
              label: 'Country',
              placeholder: 'Country',
              options: ['United Kingdom', 'Italy', 'United States'],
              width: 6,
            },
          ],
          [
            {
              type: 'dropdown',
              label: 'Time Zone',
              placeholder: 'Time Zone',
              options: ['GMT +001', 'GMT +002', 'GMT +003', 'GMT +004'],
              width: 12,
            },
          ],
          [
            {
              type: 'phone',
              label: 'Restaurant phone number',
              placeholder: '9223 7774',
              prefix: '+44 GB',
              messages:
                {
                  info:
                    'Phone Number Use your real mobile number,  We will text you
                    a link to download the app.',
                  error: 'Please enter only numbers',
                },
              width: 12,
            },
          ],
          [
            {
              type: 'url',
              label: 'Restaurant Website',
              placeholder: 'www.FLG.co.uk',
              width: 12,
            },
          ],
          [
            {
              type: 'url',
              label: 'Restaurant Website',
              placeholder: 'www.FLG.co.uk',
              messages: {error: 'Please enter a website'},
              width: 12,
            },
          ],
          [
            {
              type: 'checkbox',
              label:
                'I have read and agreed to the Terms of Use and agreed to
                Privacy Policy.',
              required: true,
            },
          ],
        ],
    },
  ]
---
