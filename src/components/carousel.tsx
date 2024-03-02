'use client'
import {useState} from 'react'
import {AnimatePresence, motion, Variants} from 'framer-motion'
import Image from 'next/image'

export type Image = {
	src: string
	alt: string
	title?: string
}

type Props = {
	images: Image[]
}

const imageWidth = 130

const variants: Variants = {
	enter: (direction: number) => ({
		x: direction > 0 ? imageWidth : -imageWidth,
		opacity: 0,
	}),
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			x: {type: 'spring', stiffness: 300, damping: 30},
			opacity: {duration: 0.2},
		},
	},
	exit: (direction: number) => ({
		x: direction > 0 ? -imageWidth : imageWidth,
		opacity: 0,
		transition: {
			x: {type: 'spring', stiffness: 300, damping: 30},
			opacity: {duration: 0.2},
		},
	}),
}

const swipeConfidenceThreshold = 10000
function swipePower(offset: number, velocity: number) {
	return Math.abs(offset) * velocity
}

export function Carousel({images}: Props) {
	const [index, setIndex] = useState(0)
	const [direction, setDirection] = useState(0)
	function nextSlide() {
		setDirection(1)
		if (index === images.length - 1) {
			setIndex(0)
		} else {
			setIndex(index + 1)
		}
	}
	function prevSlide() {
		setDirection(-1)
		if (index === 0) {
			setIndex(images.length - 1)
		} else {
			setIndex(index - 1)
		}
	}
	const activeImage = images[index]
	return (
		<div className="relative grid grid-cols-[1fr_auto_1fr] justify-items-center rounded-lg bg-[#fff] pb-9 pt-5">
			<h6 className="col-span-full max-w-48 pb-2 text-center font-light text-black">{activeImage.title}</h6>
			<button
				onClick={prevSlide}
				className={`mt-[-20px]`}
			>
				<Image
					src="/arrow.png"
					alt="Previous"
					width="31"
					height="31"
				/>
			</button>
			<div className={`relative mx-auto flex h-[200px] w-[130px] justify-center overflow-hidden align-middle`}>
				<AnimatePresence
					initial={false}
					custom={direction}
				>
					<motion.div
						variants={variants}
						initial="enter"
						animate="animate"
						exit="exit"
						transition={{
							x: {type: 'spring', stiffness: 300, damping: 30},
							opacity: {duration: 0.2},
						}}
						drag="x"
						dragConstraints={{left: 0, right: 0}}
						dragElastic={1}
						onDragEnd={(_, {offset, velocity}) => {
							const swipe = swipePower(offset.x, velocity.x)
							if (swipe < -swipeConfidenceThreshold) {
								nextSlide()
							} else if (swipe > swipeConfidenceThreshold) {
								prevSlide()
							}
						}}
						custom={direction}
						key={activeImage.src}
						className={`absolute`}
					>
						<Image
							src={activeImage.src}
							alt={activeImage.alt}
							className={`pointer-events-none`}
							width="130"
							height="200"
						/>
					</motion.div>
				</AnimatePresence>
			</div>
			<button
				onClick={nextSlide}
				className={`mt-[-20px]`}
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
