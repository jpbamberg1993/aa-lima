'use client'
import {useState} from 'react'
import {IoMenuOutline} from 'react-icons/io5'
import {NavLink} from '@/components/nav-link'

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
				{displayMenu && (
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
				)}
			</div>
		</section>
	)
}
