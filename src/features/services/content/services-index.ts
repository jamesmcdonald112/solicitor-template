import { propertyCard } from "./property";
import { firm } from "../firm";
import {
	debtCollection,
	employmentLaw,
	familyAndChildcareLaw,
	leasesAndTenancyAgreements,
	personalInjuryLitigation,
	roadTrafficAccidents,
	willsAndEstateAdministration,
} from "../services";

// --- Services index page content (hero, cta) ---
export const servicesIndexContent = {
	seo: {
		title: `Legal Services in Kilkenny | ${firm.companyName}`,
		description:
			"Solicitors in Kilkenny offering property conveyancing, wills and probate, family law, personal injury, employment law, leases, and debt recovery. Contact us for clear, practical legal advice.",
		canonicalPath: "/services",
	},
	hero: {
		eyebrow: "Legal Services in Kilkenny",
		title: "Services",
		subtitle:
			"We provide clear, practical legal advice across a wide range of personal and business matters. Whether you are buying a home, dealing with a bereavement, going through a separation, or facing a workplace dispute, our experienced Kilkenny team is here to help.",
	},
	cta: {
		title: "Not sure which service you need?",
		body: "Our team in Kilkenny is happy to talk through your situation and point you in the right direction — no obligation, just clear advice on where to start.",
	},
} as const;

// --- All services (used by ServiceCardsGrid on the services index page) ---
// Order here controls the order the cards appear on the page
export const allServices = [
	propertyCard,
	willsAndEstateAdministration,
	familyAndChildcareLaw,
	personalInjuryLitigation,
	roadTrafficAccidents,
	leasesAndTenancyAgreements,
	employmentLaw,
	debtCollection,
] as const;
