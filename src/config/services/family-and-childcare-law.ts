import homeIcon from "../../assets/icons/homeIcon.svg?raw";
import image from "../../assets/images/new/hands-holding-family-figurines.webp";
import nicholasImage from "../../assets/team/nicholas.webp";
import { firm } from "../firm";

export const familyAndChildcareLaw = {
	// --- Identity ---
	title: "Family & Childcare Law",
	tag: "Family & Child Law",
	slug: "family-and-childcare-law",
	href: "/services/family-and-childcare-law",
	icon: homeIcon,
	image,
	imageClass: "",
	description:
		"We provide sensitive and experienced legal support in family law matters — separation, divorce, guardianship, custody, access, and childcare proceedings. Our aim is to help you reach a fair outcome with as little conflict as possible.",
	// --- SEO ---
	seo: {
		title: `Family Law Solicitors Kilkenny | Separation & Divorce | ${firm.companyName}`,
		description:
			"Family law solicitors in Kilkenny handling separation, divorce, guardianship, custody and childcare proceedings. Sensitive, practical advice when it matters most. Call (056) 776 5829.",
		canonicalPath: "/services/family-and-childcare-law",
	},
	// --- Hero ---
	hero: {
		title: "Family & Childcare Law in Kilkenny",
		subtitle:
			"Family law matters are often the most personal and emotionally difficult situations a person can face. We provide clear legal advice and steady support throughout — working to help you reach a fair outcome with the minimum of conflict, while always keeping the welfare of children at the centre of every decision.",
	},
	// --- Mid-page CTA ---
	midCta: [
		"Going through a separation or family law matter?",
		"Get confidential advice today.",
	],
	// --- Bottom CTA ---
	cta: {
		title: "Talk to a family law solicitor in Kilkenny",
		description:
			"Family law matters require prompt, confidential advice. Contact our team to discuss your situation — we will explain your options clearly and help you decide on the right next step.",
	},
	// --- Trust strip ---
	trustStrip: {
		title: "Sensitive, experienced family law advice in Kilkenny",
		paragraphs: [
			"Family law is an area where the right legal advice — given at the right time — can make a significant difference to the outcome for you and your children. We approach every family law matter with discretion, taking the time to understand your situation before advising on the most appropriate course of action.",
			"Our aim is always to resolve matters with as little conflict as possible. Where agreement can be reached — through negotiation or mediation — we help clients get there. Where court proceedings are unavoidable, we prepare thoroughly and represent clients clearly and effectively.",
			"We advise on the full range of family law matters, from straightforward consent separations to complex contested divorces involving significant assets, pensions, and difficult custody arrangements. Every client receives the same thorough, personal approach.",
			"We understand that the decisions made in family law proceedings shape lives for years to come. We take that responsibility seriously and focus on outcomes that are fair, practical, and in the best interests of everyone involved — particularly children.",
		],
		stats: [
			{ label: "Years in practice", value: "46+" },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Family Law" },
		],
	},
	// --- Article ---
	article: {
		eyebrow: "Family Law",
		title: "Legal support through life's most difficult moments",
		intro:
			"Family law matters involve decisions that will shape your life and the lives of your children for years to come. Our Kilkenny solicitors provide clear legal advice and steady support throughout separation, divorce, guardianship, and childcare proceedings — always focused on helping you reach a resolution that works.",
		quote: {
			text: "Family law matters are rarely just legal problems — they involve real people going through genuinely hard times. Our job is to give clear advice and steady support so clients can make good decisions, even in difficult circumstances.",
			attribution: "Nicholas O'Shea, Solicitor",
			image: nicholasImage,
		},
		blocks: [
			{
				type: "paragraph" as const,
				text: "The breakdown of a relationship involves resolving a range of interconnected issues — the family home, maintenance, guardianship and access to children, pensions, and other financial assets. In Ireland, these matters can be resolved by agreement between the parties and made into a consent order by the court, or decided by the court itself if agreement is not possible. Understanding the difference between these routes — and knowing which is right for your situation — is one of the first things we help you with.",
			},
			{
				type: "paragraph" as const,
				text: "Where children are involved, their welfare is always the primary legal consideration. We advise on guardianship, custody, and access arrangements with a focus on arrangements that are child-centred and workable in practice. Where both parties are willing to engage constructively, we can often help reach arrangements without the need for contested court proceedings.",
			},
			{
				type: "heading" as const,
				text: "Separation, divorce, and financial matters",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Judicial separation",
						text: "A judicial separation legally recognises that a couple is living apart and resolves financial and parenting arrangements — without ending the marriage. There is no minimum period of separation required. It is an option for couples who do not yet meet the criteria for divorce, or who have religious or personal reasons for remaining married.",
					},
					{
						label: "Divorce",
						text: "To obtain a divorce in Ireland, the parties must have lived apart for at least two of the previous three years (reduced from four years following the 2019 constitutional referendum). The court must be satisfied that proper provision has been made for all dependent family members before granting a decree. We advise on what 'proper provision' means in your specific circumstances.",
					},
					{
						label: "Cohabitation and civil partnerships",
						text: "Cohabiting couples who qualify as 'qualified cohabitants' under the Civil Partnership and Certain Rights and Obligations of Cohabitants Act 2010 may be entitled to apply to the court for financial relief following the breakdown of a long-term relationship. The rights available are more limited than those for married couples, which makes getting legal advice early especially important.",
					},
					{
						label: "The family home",
						text: "The family home is often the most significant asset and one of the most emotionally charged issues in separation proceedings. We advise on the options — sale and division of proceeds, one party buying out the other, or a deferred transfer where children remain in the home — and the financial and tax implications of each.",
					},
					{
						label: "Maintenance",
						text: "Either spouse can apply for maintenance from the other, and either parent can apply for maintenance for a dependent child. Maintenance can be agreed voluntarily or ordered by the court. We advise on appropriate levels of maintenance and how to seek enforcement of a maintenance order if payments are not being made.",
					},
					{
						label: "Pension adjustment orders",
						text: "Pensions are frequently one of the most valuable assets in a family law case and are often underestimated. A pension adjustment order can direct that part of one party's pension entitlement be paid to the other party on retirement or on the death of the pension holder. We advise on how to identify and value pension assets and how to seek an appropriate order.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "Guardianship, custody, and access",
			},
			{
				type: "paragraph" as const,
				text: "Guardianship, custody, and access are three distinct concepts that are often confused. Guardianship is the right and duty to make decisions about a child's upbringing — it is automatically held by a married couple and by the mother of a child born outside marriage. An unmarried father can acquire guardianship by agreement with the mother or by court order. Custody refers to where a child lives and who has day-to-day care of them. Access refers to the right of the non-custodial parent to spend time with the child.",
			},
			{
				type: "paragraph" as const,
				text: "Where parents cannot agree on these arrangements, the court will make orders based on what is in the best interests of the child. Courts increasingly favour arrangements that allow the child to maintain a meaningful relationship with both parents. We advise on how to approach these proceedings in a way that prioritises the welfare of your children and demonstrates to the court that you have their interests at heart.",
			},
			{
				type: "heading" as const,
				text: "Childcare proceedings",
			},
			{
				type: "paragraph" as const,
				text: "Childcare proceedings are brought by Tusla, the Child and Family Agency, where it has concerns about the safety or welfare of a child. These are serious proceedings that can result in supervision orders, interim care orders, or full care orders removing a child from the family home. We represent parents and other parties in childcare proceedings, ensuring their voice is heard and that the court has a complete and balanced picture before making any order. If you have received notice of childcare proceedings, it is essential to take legal advice immediately.",
			},
		],
	},
	// --- Process steps ---
	process: [
		{
			title: "Initial consultation",
			description:
				"We listen carefully to your situation and explain your legal options — whether that is judicial separation, divorce, mediation, or another route. We outline what to expect at each stage and give you an honest assessment of your position.",
		},
		{
			title: "Negotiation and agreement",
			description:
				"Where possible, we work with you and the other side to reach agreement on financial matters, the family home, maintenance, and arrangements for children. A negotiated agreement is generally quicker, less costly, and less stressful than contested proceedings.",
		},
		{
			title: "Court proceedings",
			description:
				"Where agreement cannot be reached, we issue the necessary court applications, gather evidence, and represent you at all hearings — including interim applications and the full hearing before the Circuit Court or High Court.",
		},
		{
			title: "Orders and follow-up",
			description:
				"Once a court order or consent order is in place, we explain its terms carefully and advise on compliance. We remain available to assist if issues arise with its implementation — or if circumstances change in the future.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "What is the difference between judicial separation and divorce in Ireland?",
			answer:
				"A judicial separation legally recognises that a couple is living apart and resolves issues such as maintenance, property, and custody, but the parties remain legally married and cannot remarry. A divorce ends the marriage entirely, allowing both parties to remarry if they wish. In Ireland, you must have been living apart for at least two of the previous three years before applying for a divorce. Both routes resolve the same financial and parenting issues — the key difference is whether the marriage itself is brought to an end.",
		},
		{
			question: "Do we have to go to court to get a separation or divorce?",
			answer:
				"Not necessarily. Many couples reach agreement through negotiation between their solicitors, and that agreement is then formalised as a consent order — a court order that is made by consent rather than after a contested hearing. This avoids the need for a full court hearing and is generally quicker, less expensive, and less stressful. A consent order has the same legal force as an order made after a contested hearing.",
		},
		{
			question: "How are childcare and access arrangements decided?",
			answer:
				"If parents cannot agree on arrangements for children, the court will make orders based on the best interests of the child. Courts consider factors including each parent's relationship with the child, the child's wishes (depending on their age and maturity), their need for stability and continuity, and their relationship with siblings. Courts in Ireland increasingly support arrangements that allow children to have a meaningful relationship with both parents.",
		},
		{
			question: "What rights does an unmarried father have in Ireland?",
			answer:
				"An unmarried father does not automatically have guardianship rights in Ireland, although he does have the right to apply for guardianship, custody, and access. Guardianship can be granted by agreement with the mother or by a court order. Where guardianship is agreed, it is formalised by a statutory declaration. We advise fathers on the steps to take to secure their parental rights, and we represent them in any proceedings that become necessary.",
		},
		{
			question: "Can I get legal aid for a family law matter?",
			answer:
				"Legal aid is available for family law matters through the Legal Aid Board, subject to a means test and a contribution. There are often waiting lists at Legal Aid Board offices. Alternatively, some solicitors' firms charge fees that reflect the client's ability to pay. We are happy to discuss fees with you at your initial consultation.",
		},
		{
			question: "What happens to the family home when a couple separates?",
			answer:
				"The family home is one of the most significant issues in any separation or divorce. The options typically include selling the property and dividing the proceeds, one party buying out the other's share, or a deferred transfer where the sale or buyout is postponed — for example, until the youngest child reaches a certain age. The right solution depends on the financial position of both parties, whether there is a mortgage, and what is in the best interests of any children. We advise on all of these options and their tax implications.",
		},
	],
} as const;
