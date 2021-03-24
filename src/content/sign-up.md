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
              name: 'firstName',
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
              name: 'lastName',
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
              name: 'phoneNumber',
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
              name: 'role',
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
              name: 'restaurantName',
              label: 'Restaurant Name',
              placeholder: 'Restaurant Name',
              required: true,
              messages: {error: 'Please enter the restaurant name'},
              width: 12,
            },
          ],
          [
            {
              type: 'text',
              name: 'address',
              label: 'Address',
              placeholder: 'Address',
              required: true,
              messages: {error: 'Please enter the address'},
              width: 8,
            },
            {
              type: 'text',
              name: 'postCode',
              label: 'Post Code',
              placeholder: 'Post Code',
              required: true,
              messages: {error: 'Please enter the post code'},
              width: 4,
            },
          ],
          [
            {
              type: 'text',
              name: 'city',
              label: 'City',
              placeholder: 'City',
              required: true,
              messages: {error: 'Please enter the city'},
              width: 6,
            },
            {
              type: 'select',
              name: 'country',
              label: 'Country',
              placeholder: 'Country',
              options: ['United Kingdom', 'Italy', 'United States'],
              width: 6,
            },
          ],
          [
            {
              type: 'select',
              name: 'timeZone',
              label: 'Time Zone',
              placeholder: 'Time Zone',
              options: ['GMT +001', 'GMT +002', 'GMT +003', 'GMT +004'],
              width: 12,
            },
          ],
          [
            {
              type: 'phone',
              name: 'restaurantPhone',
              label: 'Restaurant phone number',
              placeholder: '9223 7775',
              prefix: '+44 GB',
              required: true,
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
              type: 'text',
              name: 'website',
              label: 'Restaurant Website',
              placeholder: 'www.FLG.co.uk',
              required: true,
              messages: {error: 'Please enter the website url'},
              width: 12,
            },
          ],
          [
            {
              type: 'checkbox',
              name: 'privacy',
              label:
                'I have read and agreed to the Terms of Use and agreed to
                Privacy Policy.',
              required: true,
              messages: {error: 'Please check out terms and consitions'},
            },
          ],
        ],
    },
  ]
---
