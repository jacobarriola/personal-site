const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
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
