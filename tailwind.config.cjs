/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/tw-elements/dist/js/**/*.js', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {},
		listStyleType: {
			none: 'disc',
			disc: 'disc',
			decimal: 'decimal',
			square: 'square',
			roman: 'upper-roman',
		  }
	},
	
	variants: {
		extend: {
		  textColor: ['active'],
		}
	},
	plugins: [
		require('./node_modules/tw-elements/dist/plugin'),
		require('flowbite/plugin'),
		require('@tailwindcss/typography'),
		
		
	
	  ]
}
