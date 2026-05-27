/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          blue: '#00f2ff',
          purple: '#7000ff',
          bg: '#0a0b1e',
        }
      }
    },
  },
  plugins: [],
}