'use client'
import {ButtonOutline} from '@/components/button-outline'

export function TraditionsBtn() {
	const navigateToTraditions = () => {
		const target = document.querySelector('#traditions')
		if (target) {
			target.scrollIntoView({behavior: 'smooth'})
		} else {
			console.error('Could not find the target element')
		}
	}
	return (
		<div className="pt-4">
			<ButtonOutline onClick={navigateToTraditions}>12 Traditions</ButtonOutline>
		</div>
	)
}
