import {NavLink} from '@/components/nav-link'

type Props = {
	displayMenu: boolean
	toggleDisplayMenu: () => void
}
export function NavigationMenu({displayMenu, toggleDisplayMenu}: Props) {
	if (!displayMenu) return null
	return (
		<div
			id="mobileOverlay"
			className="fixed inset-0 z-50 flex h-full items-center justify-center overflow-auto bg-white align-middle"
		>
			<ul className="text-center text-xl font-bold text-black">
				<NavLink
					href="#home"
					text="Home"
					closeNav={toggleDisplayMenu}
				/>
				<NavLink
					href="#meetings"
					text="Meetings"
					closeNav={toggleDisplayMenu}
				/>
				<NavLink
					href="#contact"
					text="Contact Us"
					closeNav={toggleDisplayMenu}
				/>
				<NavLink
					href="#reading"
					text="Reading Material"
					closeNav={toggleDisplayMenu}
				/>
				<NavLink
					href="https://www.aa.org/self-assessment"
					text="Self-Assessment"
					closeNav={toggleDisplayMenu}
				/>
				<NavLink
					href="#traditions"
					text="12 Traditions"
					closeNav={toggleDisplayMenu}
				/>
			</ul>
		</div>
	)
}
