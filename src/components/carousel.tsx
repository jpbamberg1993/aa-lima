'use client'
import { useState } from 'react'

export type Image = {
	src: string
	alt: string
	title?: string
}

type Props = {
	images: Image[]
}
export function Carousel({
	images,
}: Props) {
	const [activeIndex, setActiveIndex] =
		useState(0)
	function nextSlide() {
		setActiveIndex((prev) => {
			if (prev === images.length - 1) {
				return 0
			}
			return prev + 1
		})
	}
	function prevSlide() {
		setActiveIndex((prev) => {
			if (prev === 0) {
				return images.length - 1
			}
			return prev - 1
		})
	}
	return (
		<div className="grid grid-cols-3 justify-items-center rounded-lg bg-[#fff] pb-9 pt-3">
			<h6 className="col-span-full pb-2 font-light text-black">
				{images[activeIndex].title}
			</h6>
			<button onClick={prevSlide}>
				<img
					src="/arrow.png"
					alt="Previous"
				/>
			</button>
			<img
				src={images[activeIndex].src}
				alt={images[activeIndex].alt}
			/>
			<button onClick={nextSlide}>
				<img
					src="/arrow.png"
					alt="Next"
					className="rotate-180 transform"
				/>
			</button>
		</div>
	)
}
