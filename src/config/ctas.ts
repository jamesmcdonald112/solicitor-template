import phoneIcon from "../assets/ctas/phoneIcon.svg?raw";
import { firm } from "./firm";

export const defaultCtaPanel = {
	title: "Need legal advice you can rely on?",
	body: "Our solicitors in Kilkenny are here to help. Call us or send a message and we will get back to you promptly.",
} as const;

export const globalCtas = {
	call: {
		label: firm.phone.display,
		href: `tel:${firm.phone.phoneHref}`,
		icon: phoneIcon,
	},
	email: {
		label: "Contact Us",
		href: "/contact",
	},
} as const;
