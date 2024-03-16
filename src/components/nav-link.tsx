import {useRef} from 'react'

type Props = {
	href: string
	text: string
	closeNav: () => void
}

export function NavLink({href, text, closeNav}: Props) {
	const targetRef = useRef<HTMLAnchorElement>(null)
	const handleClick = () => {
		const target = targetRef.current
		if (target) {
			closeNav()
			target.scrollIntoView({behavior: 'smooth'})
		}
	}
	return (
		<li className="py-2">
			<a
				href={href}
				ref={targetRef}
				onClick={handleClick}
			>
				{text}
			</a>
		</li>
	)
}
