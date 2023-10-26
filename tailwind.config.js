/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      animation: {
        'slideIn': 'slideIn 500ms ease forwards',
      },
      keyframes: {
        'slideIn': {
          '0%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0%)'},
        },
    },
  },
  plugins: [],
}
}
