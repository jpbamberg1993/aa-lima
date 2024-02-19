'use client'

export function ZoomBtn() {
	function handleClick() {
		window.open(process.env.NEXT_PUBLIC_ZOOM_LINK, '_blank')
	}

	return (
		<button
			className="mt-2 rounded-lg border bg-white px-7 py-1 text-sm font-semibold text-sea-green"
			onClick={handleClick}
		>
			Join Meeting
		</button>
	)
}
