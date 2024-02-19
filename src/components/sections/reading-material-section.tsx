import {GradientWrapper} from '@/components/gradient-wrapper'
import {TextTitle} from '@/components/text-title'
import {BookCarousel} from '@/components/book-carousel'

export function ReadingMaterialSection() {
	return (
		<GradientWrapper>
			<TextTitle text="Reading Material" />
			<BookCarousel />
		</GradientWrapper>
	)
}
