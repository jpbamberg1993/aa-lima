import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: 'var(--font-inter)',
				robotoCondensed:
					'var(--font-roboto-condensed)',
			},
		},
		colors: {
			'ocean-blue': '#2193B0',
			black: '#333333',
			white: '#F4F4F4',
			'light-grey': '#F4F4F4',
			'sea-green': '#2E8B57',
		},
	},
	plugins: [],
}
export default config
