module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'TwitterChirp': 'TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      'TwitterChirpExtendedHeavy': 'TwitterChirpExtendedHeavy, Verdana, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    },
    extend: {
      colors: {
        'primary': '#1d9bf0',
        'primary-h': '#1a8cd8',
        'white-h': '#d2e3fc',
        'transparent-h': 'rgba(29, 155, 240, .1)',
        'border-white': '#333639',
        'border-transparent': '#536471',
      },
    },
  },
  plugins: [],
};
