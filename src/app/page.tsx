import {Toolbar} from '@/components/toolbar'
import {InfoSection} from '@/components/sections/info-section'
import {MeetingsSection} from '@/components/sections/meetings-section'
import {ContactSection} from '@/components/sections/contact-section'
import {ReadingMaterialSection} from '@/components/sections/reading-material-section'
import {TraditionsSection} from '@/components/sections/traditions-section'

export default function Home() {
	return (
		<main className="container mx-auto max-w-[430px] py-4">
			<Toolbar />
			<InfoSection />
			<MeetingsSection />
			<ContactSection />
			<ReadingMaterialSection />
			<TraditionsSection />
		</main>
	)
}
