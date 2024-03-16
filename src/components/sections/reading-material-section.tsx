'use client'
import {GradientWrapper} from '@/components/gradient-wrapper'
import {TextTitle} from '@/components/text-title'
import {BookCarousel} from '@/components/book-carousel'
import {MouseEvent} from 'react'

export function ReadingMaterialSection() {
	function handleClick(e: MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		window.location.href = 'https://www.aa.org/self-assessment'
	}

	return (
		<GradientWrapper id="reading">
			<TextTitle text="Reading Material" />
			<BookCarousel />
			<div className="flex flex-col justify-center pb-2 pt-12">
				<h4 className="pb-4 text-center text-xl font-medium text-white">Not sure if you have a problem?</h4>
				<button
					onClick={handleClick}
					className="mx-auto w-[225px] rounded-lg bg-white py-1 text-sm font-semibold text-sea-green"
				>
					Take a Self-Assessment
				</button>
			</div>
		</GradientWrapper>
	)
}
