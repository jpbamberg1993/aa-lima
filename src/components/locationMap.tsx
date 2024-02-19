'use client'

import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'

export function LocationMap() {
	const mapStyle = {
		height: '124px',
		width: '100%',
		'border-radius': '8px',
	}
	const defaultProps = {
		center: {
			lat: -12.107178,
			lng: -77.034544,
		},
		zoom: 12,
	}
	return (
		<LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ?? ''}>
			<GoogleMap
				mapContainerStyle={mapStyle}
				center={defaultProps.center}
				zoom={defaultProps.zoom}
			>
				<Marker position={defaultProps.center} />
			</GoogleMap>
		</LoadScript>
	)
}
