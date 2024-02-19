import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

export function GradientWrapper({
	children,
}: Props) {
	return (
		<div className="to-sea-green w-full bg-gradient-to-b from-ocean-blue px-6 py-6">
			{children}
		</div>
	)
}
