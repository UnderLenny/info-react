import Header from '@/components/Header/Header'
import type { Metadata } from 'next'
import { Philosopher } from 'next/font/google'
import './globals.css'

const philosopher = Philosopher({
	subsets: ['latin'],
	weight: '400',
})

export const metadata: Metadata = {
	title: 'Панорама',
	description: 'Гостевой дом',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body className={philosopher.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
