/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	  ],
  theme: {
    extend: {
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			Inria: ['Inria Sans', 'serif']
		},
		colors: {
			'dark-green': '#264653',
			'forest-green': '#2a9d8f',
			'mustard': '#e9c46a',
			'cream': '#fefae0'
		}
	},
  },
  plugins: [],
}