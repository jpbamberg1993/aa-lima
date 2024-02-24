'use client'
import {useState, useEffect, useRef} from 'react'
import {motion} from 'framer-motion'
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
	const [width, setWidth] = useState(0)
	const carouselRef = useRef<HTMLDivElement>(null)
	const [activeIndex, setActiveIndex] = useState(0)
	useEffect(() => {
		if (!carouselRef.current) {
			setWidth(500)
			return
		}
		setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
	}, [])
	function nextSlide() {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({left: 130, behavior: 'smooth'})
		}
	}
	function prevSlide() {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({left: -130, behavior: 'smooth'})
		}
	}

	const activeImage = images[activeIndex]
	return (
		<div
			className="relative mx-auto justify-items-center rounded-lg bg-[#fff] pb-9 pt-5"
			style={{
				gridTemplateRows: 'auto 180px',
			}}
		>
			<h6 className="col-span-full pb-2 text-center font-light text-black">{activeImage.title}</h6>
			{/* Use memo to avoid re rendering images */}
			<button
				onClick={prevSlide}
				className={`absolute top-1/2`}
			>
				<Image
					src="/arrow.png"
					alt="Previous"
					width="31"
					height="31"
				/>
			</button>
			<motion.div
				className={`mx-auto grid w-[80%] cursor-grab overflow-hidden px-2`}
				ref={carouselRef}
				whileTap={{cursor: 'grabbing'}}
			>
				<motion.div
					className={`flex`}
					drag={`x`}
					dragConstraints={{right: 90, left: -width}}
				>
					{images.map((image, index) => (
						<motion.div
							key={index}
							className={`m-2 min-w-[130px]`}
						>
							<Image
								src={image.src}
								alt={image.alt}
								className={`pointer-events-none transform transition-transform duration-300 ease-in ease-out hover:scale-110`}
								width="130"
								height="200"
							/>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
			<button
				onClick={nextSlide}
				className={`absolute right-0 top-1/2`}
			>
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
