/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      green: '#9CD919',
      'dark-green': '#52A62D',
      'light-green': '#B7D969',
      dark: '#333333',
      white: '#FFFFFF',
      black: '#000000',
      gray: '#F1F1F1'
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif']
    },
    extend: {
      letterSpacing: {
        tightest: '-.065em'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
