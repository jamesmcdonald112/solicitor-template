import documentTextIcon from "../../assets/icons/documentTextIcon.svg?raw";
import image from "../../assets/images/new/envelope-with-wax-seal.webp";
import maryImage from "../../assets/team/maryCropped.webp";
import { firm } from "../firm";

export const willsAndEstateAdministration = {
	// --- Identity ---
	title: "Wills & Estate Administration",
	tag: "Probate & Trusts",
	slug: "wills-and-estate-administration",
	href: "/services/wills-and-estate-administration",
	icon: documentTextIcon,
	image,
	imageClass: "",
	description:
		"We advise on making a valid will, enduring powers of attorney, and the full administration of estates following bereavement. Our Kilkenny solicitors guide executors and beneficiaries through the probate process with clarity and care.",
	// --- SEO ---
	seo: {
		title: `Wills & Probate Solicitors Kilkenny | ${firm.companyName}`,
		description:
			"Wills, probate and estate administration solicitors in Kilkenny. We help you make a valid will, advise on powers of attorney, and guide executors through the full probate process. Call (056) 776 5829.",
		canonicalPath: "/services/wills-and-estate-administration",
	},
	// --- Hero ---
	hero: {
		title: "Wills & Estate Administration in Kilkenny",
		subtitle:
			"Making a will is one of the most important steps you can take to protect your family and make sure your wishes are carried out. We also support executors and families through the full administration of an estate after bereavement — carefully, clearly, and at a pace that works for you.",
	},
	// --- Mid-page CTA ---
	midCta: ["Questions about a will or estate?", "We're here to help."],
	// --- Bottom CTA ---
	cta: {
		title: "Speak to a wills and probate solicitor today",
		description:
			"Whether you need to make or update a will, or you are dealing with the administration of an estate, our Kilkenny team is here to help. Contact us for clear, sensitive advice.",
	},
	// --- Trust strip ---
	trustStrip: {
		title: "Experienced wills and probate solicitors in Kilkenny",
		paragraphs: [
			"We have been advising families in Kilkenny on wills and estate matters for over 46 years. Wills and probate are an area where getting the details right matters enormously — a poorly drafted will or a misstep in the administration process can cause significant difficulties for the people you leave behind.",
			"We approach every wills and probate matter with care and thoroughness. Whether you are making your first will, updating an existing one, or dealing with the estate of a deceased family member, we take the time to understand your situation before advising you on the right approach.",
			"Dealing with a bereavement is hard. We work to make the legal process as straightforward as possible for executors and beneficiaries — taking care of the paperwork, the Revenue filings, and the dealings with financial institutions so that families can focus on what matters.",
			"We are members of the Law Society of Ireland. All wills and probate work is carried out by qualified solicitors at our office on Rose Inn Street, Kilkenny.",
		],
		stats: [
			{ label: "Years in practice", value: "46+" },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Wills & Probate" },
		],
	},
	// --- Article ---
	article: {
		eyebrow: "Wills & Probate",
		title: "Protecting your family's future",
		intro:
			"A valid, clearly drafted will is the single most effective step you can take to ensure your assets go to the right people and your wishes are respected. Without one, Irish law decides who inherits — and the outcome may not reflect what you would have chosen. Our Kilkenny solicitors advise on all aspects of wills, enduring powers of attorney, and the administration of estates.",
		quote: {
			text: "People often put off making a will because it feels like a difficult thing to face. But getting it done gives you real peace of mind — you know your family is protected and your wishes will be respected.",
			attribution: "Mary Molloy, Principal Solicitor",
			image: maryImage,
		},
		blocks: [
			{
				type: "paragraph" as const,
				text: "Without a will, your estate is distributed according to the Succession Act 1965 — a fixed legal formula that may bear little relation to your actual wishes. An unmarried partner has no automatic right to inherit under the intestacy rules. A close friend or a charity you care about receives nothing. Your assets go where the law directs, not where you would choose. A will puts you back in control.",
			},
			{
				type: "paragraph" as const,
				text: "Our solicitors take the time to understand your full circumstances before drafting anything. We consider your family structure, the nature and value of your assets, and any specific concerns you have — such as providing for a child with additional needs, making provision for a partner outside of marriage, or structuring gifts in a way that is tax-efficient. The result is a will that is precise, legally sound, and built to withstand challenge.",
			},
			{
				type: "heading" as const,
				text: "What a well-drafted will covers",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Who inherits",
						text: "You decide who receives your assets and in what shares — whether that is a spouse, children, siblings, other family members, friends, or a charity. You can make specific gifts of particular items as well as a residuary gift of whatever remains.",
					},
					{
						label: "Appointment of executor",
						text: "Your executor is the person responsible for administering your estate — gathering assets, paying debts, and distributing what remains. Choosing the right person and making sure they are willing to act is an important part of making a will.",
					},
					{
						label: "Guardianship of children",
						text: "If you have children under the age of 18, your will is the place to nominate who you would wish to act as their guardian if both parents were to die. Without a nomination, the court decides.",
					},
					{
						label: "Trusts for young beneficiaries",
						text: "If you are leaving assets to children or grandchildren, a testamentary trust can ensure that the money is managed responsibly until they are old enough to receive it outright.",
					},
					{
						label: "Tax planning",
						text: "We consider the Capital Acquisitions Tax (CAT) implications of your estate plan and advise on how to structure gifts and inheritances to make the most of available thresholds and reliefs.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "Estate administration after bereavement",
			},
			{
				type: "paragraph" as const,
				text: "When someone dies, their estate generally cannot be distributed until a grant of probate (where there is a will) or a grant of letters of administration (where there is no will) has been obtained from the Probate Office of the High Court. This is known as the administration of the estate, and it involves a number of steps — gathering information about the assets and liabilities, filing an Inland Revenue Affidavit with Revenue, lodging the application with the Probate Office, and ultimately distributing the estate in accordance with the will or the rules of intestacy.",
			},
			{
				type: "paragraph" as const,
				text: "We act for executors and administrators throughout this process. We deal with the Probate Office, Revenue, and financial institutions on your behalf, keep beneficiaries informed of progress, and ensure that assets are distributed correctly and in the right order. Where a property is to be sold or transferred as part of the estate, we handle the conveyancing as well.",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Succession Act rights",
						text: "A surviving spouse or civil partner has a legal right share of the estate that cannot be removed by will — one half where there are no children, one third where there are. Children who feel inadequately provided for can apply to court under Section 117 of the Succession Act. We advise executors on these obligations and how to manage them correctly.",
					},
					{
						label: "Capital Acquisitions Tax",
						text: "Inheritances above certain thresholds are subject to Capital Acquisitions Tax (CAT) at 33%. The threshold depends on the relationship between the deceased and the beneficiary — currently €400,000 for children, €40,000 for other close relatives, and €20,000 for others. We advise on the tax position of the estate and of each beneficiary and ensure that the correct returns are filed with Revenue.",
					},
					{
						label: "Insolvent estates",
						text: "Where the deceased's debts exceed their assets, the estate is insolvent. In this situation, debts must be paid in a specific order of priority before any distribution to beneficiaries. We advise executors on how to manage this correctly and how to protect themselves from personal liability.",
					},
					{
						label: "Contentious estates",
						text: "Where disputes arise between beneficiaries, or where the validity of the will is challenged, we advise on the options available and, where necessary, represent clients in proceedings before the courts.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "Enduring powers of attorney",
			},
			{
				type: "paragraph" as const,
				text: "An enduring power of attorney (EPA) allows you to appoint someone you trust to make decisions on your behalf if you ever lose the mental capacity to do so yourself. It is one of the most important legal documents a person can make — and one of the most commonly overlooked. Without one, if you lose capacity through illness, injury, or cognitive decline, your family may have no legal authority to manage your affairs and may need to apply to the courts for a wardship or decision-making representation order, which is a lengthy and expensive process.",
			},
			{
				type: "paragraph" as const,
				text: "Under the Assisted Decision-Making (Capacity) Act 2015, which came fully into force in April 2023, the previous EPA regime has been replaced by a new framework. New EPAs must now be registered with the Decision Support Service before they can be activated. We advise on the new requirements and can draft and register an EPA on your behalf.",
			},
		],
	},
	// --- Process steps ---
	process: [
		{
			title: "Initial consultation",
			description:
				"We meet with you to understand your family situation, your assets, and your wishes. We explain what a valid will requires under Irish law, discuss your options, and answer any questions you have.",
		},
		{
			title: "Drafting your will",
			description:
				"We prepare a draft will that clearly reflects your instructions — including the appointment of executors, any trusts for younger beneficiaries, specific gifts, and the residuary estate. We also consider the tax implications of the arrangements you have chosen.",
		},
		{
			title: "Review and execution",
			description:
				"You review the draft and raise any queries. Once you are happy with it, we arrange for the will to be properly signed and witnessed — the execution formalities are strict, and a will that is not correctly executed is not valid.",
		},
		{
			title: "Probate and estate administration",
			description:
				"Where required, we apply to the Probate Office for a grant of probate or letters of administration, gather the relevant financial information, file the Inland Revenue Affidavit with Revenue, and guide the executor through the full administration of the estate from start to finish.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "Do I need a solicitor to make a will in Ireland?",
			answer:
				"You are not legally required to use a solicitor, but it is strongly advisable. The rules for making a valid will in Ireland are strict — the will must be in writing, signed by the testator in the presence of two witnesses who are both present at the same time, and the witnesses must not be beneficiaries or spouses of beneficiaries. A poorly worded or incorrectly executed will can be challenged or declared invalid, which can cause serious difficulties for your family. A solicitor ensures the will is precisely drafted, legally sound, and properly executed.",
		},
		{
			question: "What happens if I die without a will in Ireland?",
			answer:
				"If you die without a will, you are said to die intestate and your estate is distributed according to the Succession Act 1965. Under the intestacy rules, your estate goes to your spouse or civil partner and children in fixed shares. An unmarried partner has no entitlement, no matter how long the relationship. Stepchildren who were not legally adopted have no entitlement either. The intestacy rules can produce outcomes that bear no relation to what the deceased would have wanted.",
		},
		{
			question: "How long does probate take in Ireland?",
			answer:
				"The timeline for obtaining a grant of probate depends on the complexity of the estate, how quickly the required documentation can be gathered, and the current workload of the Probate Office. For a straightforward estate where all the necessary information is available, the process typically takes four to six months from the date of instruction. More complex estates — those involving property, business interests, foreign assets, or disputes — can take considerably longer.",
		},
		{
			question: "What is the legal right share of a surviving spouse?",
			answer:
				"Under the Succession Act 1965, a surviving spouse or civil partner has a legal right share that cannot be removed by will. The legal right share is one half of the estate where the deceased left no children, and one third where there are children. A surviving spouse must elect to take the legal right share within six months of the grant of probate. We advise executors and beneficiaries on how this right affects the administration of the estate.",
		},
		{
			question: "Can a will be challenged in Ireland?",
			answer:
				"Yes. A will can be challenged on a number of grounds, including that the testator lacked testamentary capacity at the time of making the will, that they were subject to undue influence, or that the will was not properly executed. Children who feel they have not been adequately provided for can also make an application under Section 117 of the Succession Act. Properly drafted wills with contemporaneous evidence of the testator's capacity and intentions are much harder to challenge successfully.",
		},
		{
			question: "What is Capital Acquisitions Tax and when does it apply?",
			answer:
				"Capital Acquisitions Tax (CAT) is a tax on gifts and inheritances in Ireland. The rate is 33%, but inheritances below certain thresholds are exempt. The threshold depends on the relationship between the deceased and the beneficiary — children can currently receive up to €400,000 from a parent free of CAT (known as the Group A threshold). Other close relatives have a Group B threshold of €40,000, and all others have a Group C threshold of €20,000. We advise on the tax implications of your estate and of each inheritance when administering an estate.",
		},
		{
			question: "What is an enduring power of attorney?",
			answer:
				"An enduring power of attorney (EPA) is a legal document that allows you to appoint someone you trust — known as your attorney — to make decisions about your personal welfare and your property and financial affairs if you lose the mental capacity to do so yourself. Under the new Assisted Decision-Making (Capacity) Act framework, EPAs must be registered with the Decision Support Service. An EPA is an essential planning document — without one, your family may face significant difficulty managing your affairs if you lose capacity.",
		},
	],
} as const;
