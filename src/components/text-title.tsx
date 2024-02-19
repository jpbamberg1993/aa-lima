type Props = {
	text: string
	color?: string
}
export function TextTitle({
	text,
	color = 'text-white',
}: Props) {
	return (
		<h3
			className={`text-center text-2xl font-extrabold uppercase ${color}`}
		>
			{text}
		</h3>
	)
}
