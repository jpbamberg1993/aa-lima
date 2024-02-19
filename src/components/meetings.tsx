import { LocationMap } from '@/components/locationMap'
import { ZoomBtn } from '@/components/zoom-btn'
import { TextTitle } from '@/components/text-title'

export function Meetings() {
	return (
		<div className="to-sea-green w-full bg-gradient-to-b from-ocean-blue px-6 py-6">
			<TextTitle text="MEETINGS" />
			<h4 className="text-white pt-2 text-xl font-semibold">
				FACE TO FACE
			</h4>
			<p className="text-white font-light leading-4">
				Good Shepherd Group
			</p>
			<p className="pt-2 font-medium">
				Tuesday / Thursday: 7:00pm -
				8:00pm
				<br />
				Saturday: 11:00am
			</p>
			<a
				href="https://www.google.com/maps/dir//Av.+Sta.+Cruz+491,+Miraflores+15074,+Peru/@-12.109077,-77.0384462,15.87z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c8400bbac97b:0xe31c83c887391f17!2m2!1d-77.0346723!2d-12.1078656?entry=ttu"
				className="block pb-1 pt-5 font-medium"
				target="_blank"
			>
				Anglican Cathedral of the Good
				Shepherd, Avenida Santa Cruz
				491, Miraflores
			</a>
			<LocationMap />
			<h4 className="text-white pt-5 text-xl font-semibold">
				ZOOM
			</h4>
			<p className="text-white font-light leading-4">
				Friends of Bill in Lima
			</p>
			<p className="pt-2 font-medium">
				Monday / Wednesday / Friday:
				12:00pm
				<br />
				Tuesday: 7:00pm
				<br />
				Saturday: 11:30 am - Speaker
				Meeting
			</p>
			<p className="pt-2">
				Password: 12345
			</p>
			<ZoomBtn />
		</div>
	)
}
