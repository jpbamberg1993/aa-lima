import {LocationMap} from '@/components/locationMap'
import {ZoomBtn} from '@/components/zoom-btn'
import {TextTitle} from '@/components/text-title'
import {GradientWrapper} from '@/components/gradient-wrapper'

export function MeetingsSection() {
	return (
		<GradientWrapper id="meetings">
			<TextTitle text="MEETINGS" />
			<h4 className="pt-2 text-xl font-semibold text-white">FACE TO FACE</h4>
			<p className="font-light leading-4 text-white">Good Shepherd Group</p>
			<p className="pt-2 font-medium text-white">
				Tuesday / Thursday: 7:00pm - 8:00pm
				<br />
				Saturday: 11:00am
			</p>
			<a
				href="https://www.google.com/maps/dir//Av.+Sta.+Cruz+491,+Miraflores+15074,+Peru/@-12.109077,-77.0384462,15.87z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105c8400bbac97b:0xe31c83c887391f17!2m2!1d-77.0346723!2d-12.1078656?entry=ttu"
				className="block pb-1 pt-5 font-medium text-white"
				target="_blank"
			>
				Anglican Cathedral of the Good Shepherd, Avenida Santa Cruz 491, Miraflores (enter through wooden side
				door around the corner)
			</a>
			<LocationMap />
			<h4 className="pt-5 text-xl font-semibold text-white">ZOOM</h4>
			<p className="font-light leading-4 text-white">Friends of Bill in Lima</p>
			<p className="pt-2 font-medium text-white">
				Monday / Wednesday / Friday: 12:00pm
				<br />
				Tuesday: 7:00pm
				<br />
				Sunday: 11:00 am - Speaker Meeting
			</p>
			<p className="pt-2 text-white">Password: 12345</p>
			<ZoomBtn />
		</GradientWrapper>
	)
}
