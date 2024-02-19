import {
	Carousel,
	Image,
} from '@/components/carousel'

const booksImages: Image[] = [
	{
		src: '/big-book.png',
		alt: 'Big Book',
		title: 'Big Book',
	},
	{
		src: '/twelve-steps-traditions.png',
		alt: 'Twelve Steps and Twelve Traditions',
		title:
			'Twelve Steps and Twelve Traditions',
	},
]
export function BookCarousel() {
	return (
		<Carousel images={booksImages} />
	)
}