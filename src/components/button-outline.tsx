'use client'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
	onClick: () => void
	className?: string
	type?: 'button' | 'submit' | 'reset'
}

export function ButtonOutline({
	children,
	onClick,
	className = '',
	type = 'button',
}: Props) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`border-sea-green text-sea-green rounded-lg border px-7 py-1 text-sm font-semibold ${className}`}
		>
			{children}
		</button>
	)
}
