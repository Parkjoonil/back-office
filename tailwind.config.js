module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'accent': '#304FFD',
        'primary': '#5757FF',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')
,require('@tailwindcss/typography')
],
};
