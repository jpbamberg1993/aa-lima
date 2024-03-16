import {TextTitle} from '@/components/text-title'
import {traditions} from '@/data/traditions'

export function TraditionsSection() {
	return (
		<section
			className="bg-ocean-blue px-12 py-7"
			id="traditions"
		>
			<TextTitle text={'12 TRADITIONS'} />
			<p className="pb-4 pt-5 text-center font-light leading-5 text-white">
				The Twelve Traditions provide guidelines for relationships between the groups, members, the global
				Fellowship and society at large.
			</p>
			<ul className="text-white">
				{traditions.map((tradition, index) => (
					<li
						key={index}
						className="pt-5"
					>
						<div className="flex text-white">
							<div className="mr-3 flex h-[39px] w-[39px] flex-shrink-0 items-center justify-center rounded-md bg-white bg-opacity-75 align-middle">
								<p className="text-xl font-semibold text-ocean-blue">{index + 1}</p>
							</div>
							<p className="pt-0.5 text-sm font-normal leading-4">{tradition}</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}
