export type Contact = {
	city: string
	name: string
	phone: string
	note?: string
	email?: string
}
export function ContactComponent({city, name, phone, note, email}: Contact) {
	return (
		<div className="pb-5 text-black">
			<h4 className="pb-2.5 text-xl font-bold uppercase leading-4">{city}</h4>
			<p className="pb-0.5 font-medium leading-4 text-sea-green">{name}</p>
			<div className="flex items-center">
				<a
					href={`tel:${phone}`}
					className="block leading-4"
				>
					{phone}
				</a>
				{note && <p className="ml-1 font-semibold">{note}</p>}
			</div>
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
