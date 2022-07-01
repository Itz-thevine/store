module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColorOne: '#08140A',
        mainColorTwo: '#54D771',
        mainColorThree: '#4DAE5F',
      },
      height: {
        banner:   `calc(100vh - 11rem)`,
        im:'24rem'
      },
      width: {
        im: '24rem'
      },
      
    },
  },
  plugins: [],
}
