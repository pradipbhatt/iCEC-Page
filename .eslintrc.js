module.exports = {
  extends: ['next', 'next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    quotes: ['error', 'single'], // Allow double quotes
  },
};
