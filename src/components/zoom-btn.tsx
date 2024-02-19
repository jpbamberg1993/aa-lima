'use client'

export function ZoomBtn() {
	function handleClick() {
		window.open(
			process.env.NEXT_PUBLIC_ZOOM_LINK,
			'_blank',
		)
	}

	return (
		<button
			className="bg-white text-sea-green mt-2 rounded-lg border px-7 py-1 text-sm font-semibold"
			onClick={handleClick}
		>
			Join Meeting
		</button>
	)
}
