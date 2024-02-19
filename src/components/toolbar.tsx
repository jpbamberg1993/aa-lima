import {IoMenuOutline} from 'react-icons/io5'

export function Toolbar() {
	return (
		<div className="flex px-6 pt-4">
			<div>
				<h5 className="text-ocean-blue">Lima, PE</h5>
				<h1 className="pt-2 font-robotoCondensed text-4xl font-bold text-black">
					ALCOHOLICS
					<br />
					ANONYMOUS
				</h1>
			</div>
			<button className="ml-auto">
				<IoMenuOutline
					className="text-ocean-blue"
					size={45}
				/>
			</button>
		</div>
	)
}
