module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ['Space Mono', 'sans-serif'],
    },

    extend: {
      colors: {
        veryCyan: {
          100: 'hsl(189, 41%, 97%)',
          300: 'hsl(185, 41%, 84%)',
          500: 'hsl(184, 14%, 56%)',
          600: 'hsl(186, 14%, 43%)',
          700: 'hsl(183, 100%, 15%);',
          900: 'hsl(172, 67%, 45%)',
        },
      },
    },
  },
  plugins: [],
}
