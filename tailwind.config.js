const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [`./src/**/*.js`],
  theme: {
    extend: {
      fontFamily: {
        sans: [`Inter`, ...fontFamily.sans],
      },
    },
  },

  variants: {},

  plugins: [require('@tailwindcss/custom-forms')],
}
