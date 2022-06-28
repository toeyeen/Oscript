module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],

  theme: {
    extend: {
      colors: {
        // 'indigo-lighter': '#b3bcf5',
        // indigo: '#5c6ac4',
        // 'indigo-dark': '#202e78',
        'primary-main': '#f85f6a',
        'primary-dark': '#3883ab',
        'primary-dark-2': '#053a7f',
        'primary-light': '#003268',
        'primary-light-2': '#00aaef',
      },
    },
  },
  plugins: [],
}
