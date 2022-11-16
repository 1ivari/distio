/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['*.{html,js}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					"primary": "#2573d9",
          
					"secondary": "#b6d0f2",
										
					"accent": "#5d5d5d",
										
					"neutral": "#d9d9d9",
										
					"base-100": "#ffffff",
										
					"info": "#5FAAEC",
										
					"success": "#85E0BD",
										
					"warning": "#E7BF23",
										
					"error": "#EA6264",
				},
			},
		],
	},
	plugins: [require('daisyui')],
}
