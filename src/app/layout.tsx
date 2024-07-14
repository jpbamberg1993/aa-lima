import type {Metadata} from 'next'
import {Inter, Roboto_Condensed} from 'next/font/google'
import './globals.css'
import {ReactNode} from 'react'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})
const robotoCondensed = Roboto_Condensed({
	subsets: ['latin'],
	variable: '--font-roboto-condensed',
})

export const metadata: Metadata = {
	title: 'AA Lima (English)',
	description: 'An English speaking meeting of alcoholics anonymous in Lima, Peru',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${robotoCondensed.variable}`}
		>
			<body className={inter.className}>
				{children}
				<footer className="flex h-20 items-center justify-center">
					<p className="font-semibold text-black">©AALima.org | All Rights Reserved</p>
				</footer>
			</body>
		</html>
	)
}
