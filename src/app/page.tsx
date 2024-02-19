import { Toolbar } from '@/components/toolbar'
import { Info } from '@/components/info'

export default function Home() {
	return (
		<main className="container mx-auto max-w-[430px] py-4">
			<Toolbar />
			<Info />
		</main>
	)
}
