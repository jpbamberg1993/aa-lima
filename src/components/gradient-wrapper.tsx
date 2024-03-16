import {ReactNode} from 'react'

type Props = {
	children: ReactNode
	id?: string
}

export function GradientWrapper({children, id = ''}: Props) {
	return (
		<div
			className="w-full bg-gradient-to-b from-ocean-blue to-sea-green px-6 py-6"
			id={id}
		>
			{children}
		</div>
	)
}
