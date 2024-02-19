export type Contact = {
	city: string
	name: string
	phone: string
	email?: string
}
export function ContactComponent({
	city,
	name,
	phone,
	email,
}: Contact) {
	return (
		<div className="pb-5 text-black">
			<h4 className="pb-2.5 text-xl font-bold uppercase leading-4">
				{city}
			</h4>
			<p className="text-sea-green pb-0.5 font-medium leading-4">
				{name}
			</p>
			<a
				href={`tel:${phone}`}
				className="block leading-4"
			>
				{phone}
			</a>
			{email && (
				<a
					href={`mailto:${email}`}
					className="block leading-4"
				>
					{email}
				</a>
			)}
		</div>
	)
}
