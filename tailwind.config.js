module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'accent': '#304FFD',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')
,require('@tailwindcss/typography')
],
};
