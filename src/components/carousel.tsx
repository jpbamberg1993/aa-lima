'use client'
import {useState} from 'react'
import Image from 'next/image'

export type Image = {
	src: string
	alt: string
	title?: string
}

type Props = {
	images: Image[]
}

export function Carousel({images}: Props) {
	const [activeIndex, setActiveIndex] = useState(0)
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

	const activeImage = images[activeIndex]
	return (
		<div className="grid grid-cols-3 justify-items-center rounded-lg bg-[#fff] pb-9 pt-5">
			<h6 className="col-span-full pb-2 text-center font-light text-black">{activeImage.title}</h6>
			<button onClick={prevSlide}>
				<Image
					src="/arrow.png"
					alt="Previous"
					width="31"
					height="31"
				/>
			</button>
			<Image
				src={activeImage.src}
				alt={activeImage.alt}
				className="pt-2"
				width="130"
				height="200"
			/>
			<button onClick={nextSlide}>
				<Image
					src="/arrow.png"
					alt="Next"
					width="31"
					height="31"
					className="rotate-180 transform"
				/>
			</button>
		</div>
	)
}
