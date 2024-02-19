import Image from 'next/image'
import { TraditionsBtn } from '@/components/traditions-btn'

export function Info() {
	return (
		<div className="bg-light-grey relative mt-4 h-72 w-full px-6 pt-4">
			<Image
				src="/fellowship.svg"
				alt="a group of people standing closely"
				width="640"
				height="195"
				className="absolute inset-0 bg-cover bg-center bg-no-repeat pt-8 opacity-20"
			/>
			<h2 className="text-3xl font-bold text-ocean-blue">
				You are
				<br />
				<span className="font-extrabold">
					NOT alone.
				</span>
			</h2>
			<p className="pr-16 pt-2 text-sm text-black">
				Alcoholics Anonymous is a
				fellowship of men and women who
				share their experience, strength
				and hope with each other that
				they may solve their common
				problem and help others to
				recover from alcoholism.
			</p>
			<TraditionsBtn />
		</div>
	)
}
