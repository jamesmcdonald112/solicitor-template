import homeModernIcon from "../../../assets/icons/homeModernIcon.svg?raw";
import propertyImage from "../../../assets/images/new/house-key-and-figurine.webp";
import { firm } from "../../../config/firm";

export const homePageContent = {
	seo: {
		title: firm.companyName,
		description:
			"Solicitors in Kilkenny with over 46 years of experience. Clear, practical legal advice for buying and selling property, wills and probate, family law, personal injury and more. Call (056) 776 5829.",
		canonicalPath: "/",
	},

	hero: {
		eyebrow: "Solicitors in Kilkenny",
		title: "Clear legal advice, from a firm that knows you",
		// TODO: Update subtitle once fee structure is confirmed with Mary.
		// If fixed-fee conveyancing is offered, add a line here.
		subtitle:
			"Whether you are buying a home, dealing with a bereavement, or facing a legal matter you have never dealt with before — we are here to help. A family firm in Kilkenny City, practising since 1979.",
		ctas: {
			primary: { label: firm.phone.display, href: `tel:${firm.phone.phoneHref}` },
			secondary: { label: "Our services", href: "/services" },
		},
	},

	featuredService: {
		eyebrow: "Conveyancing in Kilkenny",
		card: {
			tag: "Buying & Selling Property",
			title: "Buying or selling property in Kilkenny?",
			body: "We manage the full conveyancing process from first instruction to completion — contracts reviewed, title investigated, mortgage requirements handled, and everything in between. You will always know where things stand.",
			points: [
				"Contracts reviewed in full before you sign anything",
				"Title checks, planning, and compliance handled",
				"Mortgage and lender requirements managed",
				"Completion coordinated from start to finish",
			],
			cta: { label: "Learn about our property service", href: "/services/buying-and-selling-property" },
			icon: homeModernIcon,
			image: propertyImage,
		},
		aside: {
			title: "Property handled with care",
			intro: "Buying or selling a home is one of the biggest decisions you will ever make. We handle the legal side thoroughly, keep you informed, and make the process as straightforward as possible.",
			keyPoints: [
				{
					heading: "Plain English, not legal jargon",
					body: "We explain every step — what it means, what we need from you, and what happens next.",
				},
				{
					heading: "You are kept informed throughout",
					body: "We update you at each stage so you are never left wondering where your transaction stands.",
				},
				{
					heading: "Over 46 years of Kilkenny transactions",
					body: "We know local properties, common title issues, and how to keep deals on track.",
				},
				{
					heading: "Costs explained before work begins",
					// TODO: update if fixed-fee conveyancing is confirmed
					body: "No surprises. We discuss our fees upfront so you know exactly what to expect.",
				},
			],
		},
	},

	supportingServices: {
		eyebrow: "Other services",
		title: "We can also help with",
	},

	trustStrip: {
		title: "A Kilkenny solicitor practice you can rely on",
		paragraphs: [
			"Mary Molloy Solicitor has been practising on Rose Inn Street, Kilkenny since 1979. Mary now practises alongside her sons Nicholas and Richard — a family team with a shared commitment to thorough, personal legal work.",
			"We act for individuals and families across County Kilkenny and the surrounding area. Our work spans property, wills and probate, family law, personal injury, employment law, and debt recovery — always approached with the same care and attention to detail.",
			"Conveyancing is at the heart of what we do. But whatever legal matter you bring to us, you can expect clear advice, consistent communication, and a team that treats your matter as it deserves to be treated.",
			"We are a regulated practice and members of the Law Society of Ireland. All legal work is carried out by qualified solicitors. We are based in Kilkenny City and can assist clients remotely where needed.",
		],
		stats: [
			{ label: "Years in practice", value: "46+" },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Core focus", value: "Conveyancing" },
		],
	},
} as const;

export type HomePageContent = typeof homePageContent;
