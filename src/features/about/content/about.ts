import aboutImage from "../../../assets/images/new/kilkenny-castle-from-johns-bridge.webp";

export const aboutPageContent = {
	seo: {
		title: "About Us",
		description:
			"Mary Molloy Solicitor — a family-run solicitor practice in Kilkenny City since 1979. Over 46 years of experience in property, wills, family law, personal injury and more. Meet our team.",
		canonicalPath: "/about",
	},
	hero: {
		eyebrow: "About the firm",
		title: "A Kilkenny practice built on clear, personal advice",
		subtitle:
			"We are a family-run firm of solicitors based in Kilkenny City. Since 1979, we have helped individuals and families across County Kilkenny with property, wills and probate, family law, personal injury, and private client matters — with straightforward advice and consistent communication throughout.",
		image: aboutImage,
		imageAlt: "Kilkenny Castle and the River Nore, Kilkenny City",
	},
	trustStrip: {
		title: "Over 46 years of practical legal advice in Kilkenny",
		paragraphs: [
			"Mary Molloy Solicitor has been based on Rose Inn Street in Kilkenny City since 1979. What began as a sole practice has grown into a close-knit family firm, with Mary's sons Nicholas and Richard now practising alongside her — each bringing their own area of focus and a shared commitment to the values the firm was built on.",
			"We work primarily in property, wills and probate, family law, personal injury, and private client matters — areas where getting the detail right, and keeping clients properly informed, makes a real difference to the people involved.",
			"Our focus has always been the same: give clients clear answers, explain each step in plain English, and keep matters moving without unnecessary delay. We take the time to understand your situation before advising, and we make sure you understand your options before making any decisions.",
			"Clients come to us at important moments in their lives — buying a first home, dealing with a bereavement, navigating a separation, or facing a legal dispute. We take that seriously, and we work to make the legal process as straightforward and stress-free as possible.",
		],
		stats: [
			{ label: "Years in practice", value: "46+" },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Core focus", value: "Property & Probate" },
		],
	},
} as const;

export type AboutPageContent = typeof aboutPageContent;
