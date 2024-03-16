import {TextTitle} from '@/components/text-title'
import {Contact, ContactComponent} from '@/components/contact-component'

const contacts: Contact[] = [
	{
		city: 'Lima',
		name: 'Luis S.',
		phone: '+51 959 785 979',
		email: 'aagrouplima@gmail.com',
	},
	{
		city: 'Cusco',
		name: 'Gustavo V.',
		phone: '+51 910 622 682',
	},
	{
		city: 'Iquitos',
		name: 'Jann D.',
		phone: '+51 984 789 375',
	},
	{
		city: 'Arequipa / Moquegua',
		name: 'Ronald P.',
		phone: '+51 953 503 298',
	},
]

export function ContactSection() {
	return (
		<section
			className="p-6"
			id="contact"
		>
			<h5 className="text-center text-xl font-bold text-black">Need Help?</h5>
			<TextTitle
				text="Contact Us"
				color="text-ocean-blue pb-3.5"
			/>
			{contacts.map((contact, index) => (
				<ContactComponent
					key={index}
					{...contact}
				/>
			))}
		</section>
	)
}
