/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'blue_500': '#2196f3',
      'blue_700': '#1976d2',
      'blue_200': '#90caf9',
      'blue_400': '#42a5f5',
      'white': '#ffffff',
      'blue_600': '#1e88e5',
      'borderBlue': '#bbddfb',
      'blue_300': '#64b5f6',
      'red': '#c01515'
    }
  },
  plugins: [],
}

