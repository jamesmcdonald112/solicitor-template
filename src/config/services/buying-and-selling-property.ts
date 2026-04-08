import homeModernIcon from "../../assets/icons/homeModernIcon.svg?raw";
import image from "../../assets/images/new/house-key-and-figurine.webp";
import maryImage from "../../assets/team/maryCropped.webp";
import { firm } from "../firm";

export const buyingAndSellingProperty = {
	// --- Identity ---
	title: "Buying & Selling Property",
	tag: "Conveyancing",
	slug: "buying-and-selling-property",
	href: "/services/buying-and-selling-property",
	icon: homeModernIcon,
	image,
	imageClass: "object-[center_80%]",
	description:
		"Our property solicitors in Kilkenny guide you through every step of buying or selling a home — from reviewing contracts to managing completion. We protect your interests and keep your transaction moving at every stage.",
	// --- SEO ---
	seo: {
		title: `Property Solicitors Kilkenny | Buying & Selling Property | ${firm.companyName}`,
		description:
			"Buying or selling property in Kilkenny? Our experienced solicitors manage the full conveyancing process — contracts, title checks, mortgage requirements and completion. Call (056) 776 5829.",
		canonicalPath: "/services/buying-and-selling-property",
	},
	// --- Hero ---
	hero: {
		title: "Buying & Selling Property in Kilkenny",
		subtitle:
			"Buying or selling a home is one of the biggest decisions you will ever make. Our property solicitors in Kilkenny manage the full conveyancing process — from reviewing contracts and raising enquiries to handling completion and registration. We keep you informed at every step and make sure nothing is left to chance.",
	},
	// --- Mid-page CTA ---
	midCta: [
		"Ready to move your property matter forward?",
		"Get in touch today.",
	],
	// --- Bottom CTA ---
	cta: {
		title: "Ready to move your property matter forward?",
		description:
			"Contact our Kilkenny property solicitors for clear, practical advice on buying or selling a home.",
	},
	// --- Trust strip ---
	trustStrip: {
		title: "Kilkenny property solicitors with over 46 years of experience",
		paragraphs: [
			"Mary Molloy Solicitor has been helping buyers and sellers in Kilkenny and across County Kilkenny since 1979. Conveyancing is at the heart of what we do — our team handles residential property transactions every day, and we understand the local market, common title issues, and what it takes to keep deals on track.",
			"We act for first-time buyers, people moving home, investors, and those selling an inherited or investment property. Whatever your situation, you get the same thorough, careful approach — contracts reviewed in full, title investigated properly, and all lender requirements managed without delay.",
			"We know that buying or selling a home can feel stressful, particularly if something unexpected comes up during the process. Our job is to deal with those issues on your behalf, keep you fully informed, and make the experience as straightforward as possible.",
			"We are a regulated solicitor's practice and members of the Law Society of Ireland. All conveyancing work is carried out by qualified solicitors. We are based on Rose Inn Street in Kilkenny City and can assist clients remotely where needed.",
		],
		stats: [
			{ label: "Years in practice", value: "46+" },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Core focus", value: "Conveyancing" },
		],
	},
	// --- Article ---
	article: {
		eyebrow: "Conveyancing in Kilkenny",
		title: "What your property solicitor does for you",
		intro:
			"Conveyancing is the legal process of transferring ownership of a property from one person to another. It involves reviewing contracts, investigating title, managing mortgage and lender requirements, and seeing the transaction through to completion and registration. Here is what we do on your behalf — and why it matters.",
		quote: {
			text: "We review every contract in full before you sign anything. If something is unclear or needs to be negotiated, we raise it — that is what we are here for.",
			attribution: "Mary Molloy, Principal Solicitor",
			image: maryImage,
		},
		blocks: [
			{
				type: "heading" as const,
				text: "Buying a property in Kilkenny",
			},
			{
				type: "paragraph" as const,
				text: "When you are buying a property, your solicitor does far more than witness your signature on a contract. We carry out a full investigation of the title to make sure the seller has the right to sell, that there are no undisclosed rights or burdens affecting the property, and that planning and building compliance is in order. We raise enquiries with the seller's solicitor on any points that need clarification, and we advise you clearly on the answers before you commit.",
			},
			{
				type: "paragraph" as const,
				text: "If you are buying with a mortgage, we also act for your lender — reviewing the loan offer, ensuring the property meets the lender's requirements, and managing the drawdown of funds. We handle stamp duty, Land Registry registration, and all post-completion steps so that when the transaction is finished, your ownership is properly recorded and protected.",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Contract review",
						text: "We read the contract in full, explain what it says, and raise any issues with the seller's solicitor before you sign anything.",
					},
					{
						label: "Title investigation",
						text: "We investigate the title to the property — checking that the seller owns it outright, that there are no judgments or mortgages outstanding, and that the boundaries match what is on the ground.",
					},
					{
						label: "Planning and compliance",
						text: "We check that any extensions, conversions, or structures on the property have the necessary planning permissions and certificates of compliance.",
					},
					{
						label: "Mortgage and lender requirements",
						text: "We liaise with your lender, review the loan offer, and manage the drawdown of mortgage funds in time for completion.",
					},
					{
						label: "Stamp duty",
						text: "We calculate and file your stamp duty return with Revenue and ensure payment is made on time — currently 1% on the first €1 million of residential property, 2% on the balance.",
					},
					{
						label: "Land Registry registration",
						text: "We register your ownership with the Property Registration Authority so that your title is fully protected and recorded.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "Selling a property in Kilkenny",
			},
			{
				type: "paragraph" as const,
				text: "When you are selling, we prepare the contracts and all supporting documentation early in the process so there is no unnecessary delay once a buyer has been found. We deal with the buyer's solicitor's enquiries promptly, resolve any title issues that arise, and manage the transaction through to completion and the release of funds.",
			},
			{
				type: "paragraph" as const,
				text: "If there is a mortgage on the property, we obtain a redemption figure from your lender, ensure it is discharged on completion, and arrange for the release of the title deeds. If you are selling a property that has been recently extended or altered, we advise early on what planning and compliance documentation you will need to gather — dealing with this at the start avoids delays later.",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Contracts and documentation",
						text: "We prepare the contracts for sale and all supporting documentation, including copies of the title, planning documents, and relevant certificates.",
					},
					{
						label: "Responding to enquiries",
						text: "We deal with the buyer's solicitor's pre-contract and requisition queries promptly and professionally.",
					},
					{
						label: "Mortgage discharge",
						text: "We obtain a redemption figure, arrange for the mortgage to be paid off on completion, and ensure the title deeds are released to the buyer's solicitor.",
					},
					{
						label: "Completion and closing",
						text: "We manage the transfer of ownership documents and the release of sale proceeds, and confirm that the transaction has been properly closed.",
					},
					{
						label: "Capital Gains Tax advice",
						text: "If you are selling a property that is not your principal private residence, a Capital Gains Tax liability may arise. We flag this issue early and can signpost you to appropriate tax advice.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "First-time buyers",
			},
			{
				type: "paragraph" as const,
				text: "If you are buying your first home, the process can feel unfamiliar and the terminology can be confusing. We take the time to explain each step clearly — what we are doing, why it matters, and what you need to do. We make sure you understand what you are signing before you sign anything, and we are always available to answer questions along the way.",
			},
			{
				type: "paragraph" as const,
				text: "First-time buyers may be entitled to the Help to Buy scheme, which allows you to claim a tax rebate of up to €30,000 towards the deposit on a new build property. If you are using the First Home Scheme, which provides an equity share to bridge the gap between your deposit and mortgage, we will advise you on how this affects the legal title to your property.",
			},
			{
				type: "heading" as const,
				text: "What to have ready before you instruct us",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Buyers",
						text: "Photo ID and proof of address (passport or driving licence), mortgage approval in principle, details of your deposit and its source (required for anti-money laundering purposes), your PPS number, and the name and contact details of the estate agent.",
					},
					{
						label: "Sellers",
						text: "Photo ID and proof of address, your title deeds or folio number if you have it, details of your mortgage lender and account number, any planning permissions or certificates of compliance for works carried out, and a valid BER certificate (required by law before marketing a property for sale).",
					},
				],
			},
		],
	},
	// --- Process steps ---
	process: [
		{
			title: "Get in touch",
			description:
				"Contact us as soon as an offer is accepted — or even before, to understand what to expect. We open your file, confirm your details, and explain the likely timeline.",
		},
		{
			title: "Documents and identity checks",
			description:
				"We carry out the required identity and anti-money laundering checks and gather the core documents needed to begin legal work on your file.",
		},
		{
			title: "Contract stage",
			description:
				"For buyers, we review the contract and title documents in full and raise any necessary enquiries. For sellers, we prepare contracts and documentation and respond to the buyer's queries.",
		},
		{
			title: "Mortgage and finance",
			description:
				"We review your loan offer, ensure all lender requirements are met, and manage the drawdown of mortgage funds in time for completion.",
		},
		{
			title: "Exchange and signing",
			description:
				"Once all queries are resolved, contracts are signed and exchanged. At this point the sale becomes legally binding and a closing date is agreed.",
		},
		{
			title: "Completion",
			description:
				"We handle all closing documentation, manage the transfer of funds, and ensure that ownership passes correctly on the agreed date.",
		},
		{
			title: "Registration and closing",
			description:
				"We attend to stamp duty, Land Registry registration, and all post-completion steps, and confirm to you when your matter is fully closed.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "Do I need a solicitor to buy or sell a property in Ireland?",
			answer:
				"Yes. A solicitor is required to carry out conveyancing in Ireland. You cannot register a property purchase with the Land Registry without the involvement of a solicitor. Your mortgage lender will also require a solicitor to act on their behalf (usually the same solicitor who acts for you as the buyer).",
		},
		{
			question: "When should I instruct a solicitor?",
			answer:
				"As early as possible — ideally before your offer is accepted, so we can prepare your file and explain the process. The sooner you instruct us, the quicker we can move when contracts are issued. Delays in instructing a solicitor are one of the most common causes of property transactions falling through.",
		},
		{
			question: "How long does conveyancing take in Ireland?",
			answer:
				"The typical timeline from instruction to completion is eight to twelve weeks for a straightforward transaction, though this can vary significantly depending on the complexity of the title, how quickly all parties respond, and whether any issues arise during the process. New builds can take longer depending on the stage of construction.",
		},
		{
			question: "What is stamp duty and how much will I pay?",
			answer:
				"Stamp duty is a tax paid by the buyer on the purchase of a property. For residential properties in Ireland, the rate is currently 1% on the first €1 million of the purchase price and 2% on anything above that. First-time buyers pay the same rates. We calculate your stamp duty, file the return with Revenue, and arrange payment as part of the conveyancing process.",
		},
		{
			question: "What is title investigation and why does it matter?",
			answer:
				"A title investigation is our review of the legal ownership of the property you are buying. We check that the seller has good and marketable title — meaning they own it outright and are entitled to sell it — that there are no outstanding mortgages, judgments, or rights affecting the property, and that planning and building compliance is in order. A thorough title investigation protects you from buying a property with hidden legal problems.",
		},
		{
			question: "What happens if something goes wrong during conveyancing?",
			answer:
				"Issues can arise during conveyancing — a title defect, a planning problem, or a dispute over the boundary. Our job is to identify these issues early, advise you on how they affect the transaction, and work to resolve them. In some cases, an issue will affect the price or the terms of the purchase; in others, it may mean the transaction cannot proceed. We will always advise you honestly on your position.",
		},
		{
			question: "Do I need a BER certificate to sell my property?",
			answer:
				"Yes. A Building Energy Rating (BER) certificate is required by law before you can market a property for sale or rent in Ireland. You must have one in place before we can include it in the contracts for sale. If you do not have one, you will need to arrange for a BER assessor to carry out an assessment of the property.",
		},
		{
			question:
				"What is the difference between registered and unregistered title?",
			answer:
				"Most properties in Ireland are now registered with the Property Registration Authority (PRA), which maintains a central register of ownership. Older properties may still have unregistered title, where ownership is proved by a chain of title deeds. Both are legally valid, but unregistered title requires a more detailed investigation and, where possible, we would recommend that it is converted to registered title as part of the transaction.",
		},
		{
			question: "Can I buy or sell a property if I am not based in Kilkenny?",
			answer:
				"Yes. We act for clients across County Kilkenny and the surrounding areas, and we regularly assist clients who are based elsewhere in Ireland or abroad. Most of the conveyancing process can be managed remotely by phone, email, and secure document exchange.",
		},
		{
			question: "What are solicitor's fees for conveyancing in Ireland?",
			answer:
				"Solicitor's fees for conveyancing are made up of professional fees and outlays. Outlays are third-party costs such as Land Registry fees, search fees, and stamp duty — these are fixed by law or by the relevant authority. Professional fees vary depending on the complexity of the transaction. We will explain our fees clearly at the outset so you know exactly what to expect.",
		},
	],
} as const;
