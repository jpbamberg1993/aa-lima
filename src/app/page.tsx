import { Toolbar } from '@/components/toolbar'
import { Info } from '@/components/info'
import { Meetings } from '@/components/meetings'

export default function Home() {
	return (
		<main className="container mx-auto max-w-[430px] py-4">
			<Toolbar />
			<Info />
			<Meetings />
		</main>
	)
}
