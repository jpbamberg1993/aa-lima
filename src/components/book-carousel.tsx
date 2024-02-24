import {Carousel, Image} from '@/components/carousel'

const booksImages: Image[] = [
	{
		src: '/big-book.png',
		alt: 'Big Book',
		title: 'Big Book',
	},
	{
		src: '/twelve-steps-traditions.png',
		alt: 'Twelve Steps and Twelve Traditions',
		title: 'Twelve Steps and Twelve Traditions',
	},
	{
		src: '/twelve-steps-traditions.png',
		alt: 'Twelve Steps and Twelve Traditions',
		title: 'Twelve Steps and Twelve Traditions',
	},
	{
		src: '/twelve-steps-traditions.png',
		alt: 'Twelve Steps and Twelve Traditions',
		title: 'Twelve Steps and Twelve Traditions',
	},
	{
		src: '/twelve-steps-traditions.png',
		alt: 'Twelve Steps and Twelve Traditions',
		title: 'Twelve Steps and Twelve Traditions',
	},
	{
		src: '/twelve-steps-traditions.png',
		alt: 'Twelve Steps and Twelve Traditions',
		title: 'Twelve Steps and Twelve Traditions',
	},
]
export function BookCarousel() {
	return (
		<div className="pt-4">
			<Carousel images={booksImages} />
		</div>
	)
}
