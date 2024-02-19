'use client'
import {ReactNode} from 'react'

type Props = {
	children: ReactNode
	onClick: () => void
	className?: string
	type?: 'button' | 'submit' | 'reset'
}

export function ButtonOutline({children, onClick, className = '', type = 'button'}: Props) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`rounded-lg border border-sea-green px-7 py-1 text-sm font-semibold text-sea-green ${className}`}
		>
			{children}
		</button>
	)
}
