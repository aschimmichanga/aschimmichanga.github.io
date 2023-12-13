
module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  },
  theme: {
    minWidth: {
      '40': '10rem',
      '60': '15rem',
      '80': '20rem',
      '100': '25rem',
    },
    maxWidth: {
      '120': '30rem',
      '160': '40rem',
      '200': '50rem',
    },
    extend: {
      backgroundImage: {
        'space-background': "url('/src/assets/space_bg.svg')"
      },
      fontFamily: {
        'spicy-rice': ['Spicy Rice', 'cursive'],
        'space-mono': ['Space Mono', 'monospace'],
      },
      colors: {
        'cloud-pink': '#EFC3F5'
      }
    }
  },
  variants: {},
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'night'
    ],
  }
}
