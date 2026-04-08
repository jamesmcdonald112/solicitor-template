import buildingIcon from "../../assets/icons/buildingIcon.svg?raw";
import image from "../../assets/images/new/house-key-on-wooden-table.webp";
import richardImage from "../../assets/team/richard.webp";
import { firm } from "../firm";

export const leasesAndTenancyAgreements = {
	// --- Identity ---
	title: "Leases & Tenancy Agreements",
	tag: "Landlord & Tenant",
	slug: "leases-and-tenancy-agreements",
	href: "/services/leases-and-tenancy-agreements",
	icon: buildingIcon,
	image,
	imageClass: "object-right-bottom",
	description:
		"We advise landlords and tenants on residential and commercial leases — reviewing and drafting agreements, advising on rights and obligations under Irish law, and representing clients in Residential Tenancies Board disputes.",
	// --- SEO ---
	seo: {
		title: `Lease & Tenancy Agreement Solicitors Kilkenny | ${firm.companyName}`,
		description:
			"Solicitors for landlords and tenants in Kilkenny. We review and draft leases, advise on rights under the Residential Tenancies Act, and represent clients in RTB disputes. Call (056) 776 5829.",
		canonicalPath: "/services/leases-and-tenancy-agreements",
	},
	// --- Hero ---
	hero: {
		title: "Leases & Tenancy Agreements in Kilkenny",
		subtitle:
			"A well-drafted lease protects both landlord and tenant and sets clear expectations from the start. Whether you are a landlord letting a property for the first time, a tenant reviewing a proposed agreement, or either party dealing with a dispute, we provide clear, practical advice on your rights and obligations under Irish tenancy law.",
	},
	// --- Mid-page CTA ---
	midCta: [
		"Questions about a lease or tenancy dispute?",
		"Get advice before you act.",
	],
	// --- Bottom CTA ---
	cta: {
		title: "Need advice on a lease or tenancy matter?",
		description:
			"Whether you are entering a new tenancy, reviewing an agreement, or dealing with a dispute, our Kilkenny solicitors can advise you on your legal position and the most effective way to proceed.",
	},
	// --- Trust strip ---
	trustStrip: {
		title: "Clear advice for landlords and tenants in Kilkenny",
		paragraphs: [
			"Irish landlord and tenant law has changed significantly in recent years — new rules on rent increases in Rent Pressure Zones, longer notice periods for terminations, and restrictions on the grounds for ending a tenancy. We keep up to date with these changes and advise clients precisely on where they stand.",
			"Getting a lease right from the start is far less costly than dealing with a dispute afterwards. We review agreements carefully, identify problematic terms, and advise on what should be negotiated or clarified before you sign.",
			"We act for both landlords and tenants — drafting clear, legally sound agreements; advising on ongoing rights and obligations; and representing clients in Residential Tenancies Board proceedings when disputes arise.",
			"Where disputes do occur, we take a practical approach — advising on the most cost-effective route to resolution, whether that is negotiation, RTB mediation, or formal adjudication proceedings before the Board.",
		],
		stats: [
			{ label: "Years in practice", value: "46+" },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Landlord & Tenant" },
		],
	},
	// --- Article ---
	article: {
		eyebrow: "Landlord & Tenant",
		title: "Know your rights before you sign",
		intro:
			"Whether you are letting a property for the first time or moving into a new home, getting proper legal advice before signing a lease can prevent serious problems later. Our Kilkenny solicitors advise both landlords and tenants on their rights and obligations under the Residential Tenancies Act, and represent clients in Residential Tenancies Board proceedings when disputes arise.",
		quote: {
			text: "A five-minute review of a lease before you sign can save months of dispute afterwards. Landlord and tenant law in Ireland has changed a lot in recent years — it is worth understanding your rights before you commit.",
			attribution: "Richard O'Shea, Solicitor",
			image: richardImage,
		},
		blocks: [
			{
				type: "paragraph" as const,
				text: "A lease or tenancy agreement is a legally binding contract. The terms it contains — on rent, duration, permitted use, maintenance obligations, notice requirements, and termination — govern the relationship between landlord and tenant for the life of the tenancy. Ambiguous or poorly drafted clauses are a common source of disputes, and they are much harder and more expensive to resolve once both parties have signed and moved in.",
			},
			{
				type: "paragraph" as const,
				text: "We advise both landlords and tenants. For landlords, we draft clear, enforceable agreements that protect their property and their income. For tenants, we review proposed leases and identify terms that are unfair, unlawful, or inconsistent with the protections available under the Residential Tenancies Act. In commercial tenancy matters, we advise on the specific terms that are most important to negotiate — break clauses, rent review mechanisms, repair obligations, and the right to renew.",
			},
			{
				type: "heading" as const,
				text: "Key issues for landlords in Ireland",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Rent Pressure Zones",
						text: "Most urban and suburban areas in Ireland are now designated Rent Pressure Zones (RPZs), where rent increases are capped. In RPZs, rent can be increased only once every 12 months, and the increase is capped at the rate of general inflation (HICP) or 2%, whichever is lower. Landlords who exceed this cap risk having an RTB determination made against them. We advise on whether an RPZ applies to your property and what the rules require.",
					},
					{
						label: "Terminating a tenancy",
						text: "A landlord can only terminate a tenancy on specific grounds set out in the Residential Tenancies Act — such as the tenant being in breach, the property being sold, or the landlord requiring it for their own use. The required notice period ranges from 90 days for short tenancies up to 224 days for tenancies of 8 years or more. Errors in the notice procedure can render an otherwise valid termination unlawful.",
					},
					{
						label: "Rent arrears",
						text: "Where a tenant is in arrears, the landlord must follow the correct procedure — serving a notice of termination for breach and giving the tenant a 28-day period to remedy the breach — before the tenancy can be ended. Failure to follow this procedure correctly can result in the RTB finding against the landlord.",
					},
					{
						label: "Registration with the RTB",
						text: "All landlords of residential tenancies are required by law to register the tenancy with the Residential Tenancies Board within one month of commencement and to renew the registration annually. Failure to register can affect your entitlement to claim tax relief on rental income and can result in financial penalties.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "Key rights for tenants in Ireland",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Security of tenure",
						text: "After six months of a tenancy, a tenant acquires Part 4 rights — meaning the landlord can only end the tenancy on specific grounds set out in the Residential Tenancies Act. These rights continue for cycles of six years. A landlord cannot simply ask a tenant to leave without a valid legal reason and the correct notice.",
					},
					{
						label: "Written statement of terms",
						text: "Landlords are legally required to provide tenants with a written statement of the terms of the tenancy within one month of commencement. The statement must include the amount of rent, the payment frequency, the obligations of the landlord and tenant, and other key terms. If you have not received one, we can advise on your rights.",
					},
					{
						label: "Deposit protection",
						text: "A landlord can deduct from your deposit only for rent arrears or damage beyond normal wear and tear. A disputed deposit deduction can be referred to the Residential Tenancies Board for adjudication. We advise tenants on what deductions are permissible and represent them in RTB proceedings if needed.",
					},
					{
						label: "Unlawful termination",
						text: "If you have been asked to leave without proper notice, or without a valid ground for termination, this may constitute an unlawful termination. You can refer the matter to the RTB for dispute resolution. Where the RTB finds in your favour, it can direct the landlord to allow you to return to the property or to pay damages.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "Commercial leases",
			},
			{
				type: "paragraph" as const,
				text: "Commercial tenancies are governed by different rules to residential ones. The Landlord and Tenant Acts 1967 to 2022 give business tenants certain rights — including, in some cases, a right to a new tenancy at the end of the lease. However, these rights can be waived by agreement, and many commercial leases contain terms that are significantly more favourable to the landlord than the statutory minimum.",
			},
			{
				type: "paragraph" as const,
				text: "Before taking on a commercial lease, it is essential to have the terms reviewed by a solicitor. Key issues include the length of the term, any break clause provisions, the basis for rent review, the repair and maintenance obligations allocated to the tenant, the permitted use of the premises, and the conditions for assigning or subletting. A poorly negotiated commercial lease can have significant financial consequences for years.",
			},
		],
	},
	// --- Process steps ---
	process: [
		{
			title: "Review your agreement",
			description:
				"We review the proposed lease or tenancy agreement in detail, identify any terms that are unclear, unreasonable, or inconsistent with your legal rights, and advise you on what to negotiate before signing.",
		},
		{
			title: "Drafting and negotiation",
			description:
				"Where we are drafting the agreement — typically for landlords — we prepare a clear, enforceable document tailored to the property and the letting arrangement. We negotiate amendments on your behalf where required.",
		},
		{
			title: "Advice on rights and obligations",
			description:
				"We advise landlords and tenants on their ongoing obligations — notice periods, rent review procedures, repair responsibilities, and deposit rules — so that issues are prevented rather than allowed to develop into disputes.",
		},
		{
			title: "Dispute resolution",
			description:
				"Where a dispute has arisen, we advise on the options available — direct negotiation, RTB mediation, or formal RTB adjudication — and represent you through whichever process is most appropriate to your situation.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "Does a tenancy agreement have to be in writing in Ireland?",
			answer:
				"There is no strict legal requirement for a residential tenancy to be in writing, but a landlord is required to provide a tenant with a written statement of the key terms of the tenancy within one month of its commencement. Having a written lease is strongly advisable for both parties as it sets out the agreed terms clearly and significantly reduces the risk of disputes about what was agreed.",
		},
		{
			question: "How much notice must a landlord give to end a tenancy?",
			answer:
				"Under the Residential Tenancies Act, the required notice period depends on how long the tenancy has been in place. For a tenancy of less than six months, 90 days' notice is required. For tenancies of six months to one year, 152 days' notice applies. For longer tenancies, the notice period increases up to a maximum of 224 days for tenancies of eight years or more. The landlord must also have a valid legal reason for terminating the tenancy.",
		},
		{
			question: "Can a landlord increase the rent at any time?",
			answer:
				"No. In Ireland, rent can only be reviewed once every 12 months. In Rent Pressure Zones — which cover most urban areas — the increase is capped at the rate of HICP inflation or 2%, whichever is lower. Landlords must provide the correct written notice of any rent review. We advise landlords on compliant rent review procedures and tenants on whether a proposed increase is lawful.",
		},
		{
			question: "What can I do if my landlord refuses to return my deposit?",
			answer:
				"If your landlord is withholding your deposit and you believe the deduction is not justified, you can refer the dispute to the Residential Tenancies Board. The RTB operates an online dispute resolution service and can direct the return of a deposit where it finds in your favour. We advise tenants on whether a deduction is permissible and represent clients in RTB proceedings.",
		},
		{
			question: "What is the Residential Tenancies Board?",
			answer:
				"The Residential Tenancies Board (RTB) is an independent public body that regulates the residential rental sector in Ireland. It operates a dispute resolution service for landlords and tenants, maintains a register of tenancies, and can impose sanctions on landlords who breach the Residential Tenancies Act. RTB dispute resolution is generally a faster and less expensive route to resolving tenancy disputes than going to court.",
		},
		{
			question: "Do I need a solicitor to review a commercial lease?",
			answer:
				"We strongly recommend it. Commercial leases are complex documents that can have significant financial consequences for years. Key terms — the rent review mechanism, the repair obligations allocated to the tenant, break clause conditions, and assignment and subletting rights — can vary enormously from lease to lease. A solicitor review before you sign can identify unfavourable terms that can often be negotiated.",
		},
	],
} as const;
