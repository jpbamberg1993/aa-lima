import { IoMenuOutline } from 'react-icons/io5'

export function Toolbar() {
	return (
		<div className="flex">
			<div>
				<h3 className="text-ocean-blue">
					Lima, PE
				</h3>
				<h1 className="font-robotoCondensed text-4xl font-bold text-black">
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
