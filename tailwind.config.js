/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'nautralSilver': '#F5F7FA',
            'nautralDGrey': '#4D4D4D',
            'brandPrimary': '#4CAF4F',
            'nautralGrey': '#717171',
        },
    },
  },
  plugins: [],
}
