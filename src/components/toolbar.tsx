'use client'
import {useState} from 'react'
import {IoMenuOutline} from 'react-icons/io5'
import {NavigationMenu} from '@/components/navigation-menu'

export function Toolbar() {
	const [displayMenu, setDisplayMenu] = useState(false)
	function toggleDisplayMenu() {
		setDisplayMenu(!displayMenu)
	}
	return (
		<section id="home">
			<div className="flex px-6 pt-4">
				<div>
					<h5 className="text-ocean-blue">Lima, PE</h5>
					<h1 className="pt-2 font-robotoCondensed text-4xl font-bold text-black">
						ALCOHOLICS
						<br />
						ANONYMOUS
					</h1>
				</div>
				<button
					onClick={toggleDisplayMenu}
					className="ml-auto text-ocean-blue"
				>
					<IoMenuOutline
						className="text-ocean-blue"
						size={45}
					/>
				</button>
				<NavigationMenu
					displayMenu={displayMenu}
					toggleDisplayMenu={toggleDisplayMenu}
				/>
			</div>
		</section>
	)
}
