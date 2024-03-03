import {Carousel} from '@/components/carousel'
import {booksImages} from '@/data/books'

export function BookCarousel() {
	return (
		<div className="pt-4">
			<Carousel images={booksImages} />
		</div>
	)
}
