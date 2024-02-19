'use client'
import {ButtonOutline} from '@/components/button-outline'

export function TraditionsBtn() {
	return (
		<div className="pt-4">
			<ButtonOutline onClick={() => console.log('You clicked me')}>12 Traditions</ButtonOutline>
		</div>
	)
}
