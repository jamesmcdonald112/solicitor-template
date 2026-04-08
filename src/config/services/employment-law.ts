import briefcaseIcon from "../../assets/icons/briefcaseIcon.svg?raw";
import image from "../../assets/images/new/person-signing-document-at-desk.webp";
import nicholasImage from "../../assets/team/nicholas.webp";
import { firm } from "../firm";

export const employmentLaw = {
	// --- Identity ---
	title: "Employment Law",
	tag: "Employment & Equality",
	slug: "employment-law",
	href: "/services/employment-law",
	icon: briefcaseIcon,
	image,
	imageClass: "object-bottom",
	description:
		"We advise employees and employers on unfair dismissal, redundancy, workplace rights, discrimination, and employment contracts. Whatever your employment law issue, we give you clear, practical advice and represent your interests effectively.",
	// --- SEO ---
	seo: {
		title: `Employment Law Solicitors Kilkenny | Unfair Dismissal & WRC | ${firm.companyName}`,
		description:
			"Employment law solicitors in Kilkenny advising employees and employers on unfair dismissal, redundancy, WRC complaints, discrimination and employment contracts. Time limits apply — call (056) 776 5829.",
		canonicalPath: "/services/employment-law",
	},
	// --- Hero ---
	hero: {
		title: "Employment Law in Kilkenny",
		subtitle:
			"If you have been dismissed from your job, made redundant, or treated unfairly at work, you may have important legal rights — and strict time limits apply. Our solicitors advise employees and employers on the full range of employment law matters, from understanding your options to representing you at the Workplace Relations Commission.",
	},
	// --- Mid-page CTA ---
	midCta: [
		"Dismissed or treated unfairly at work?",
		"Time limits apply — act now.",
	],
	// --- Bottom CTA ---
	cta: {
		title: "Facing a workplace dispute? Get advice now",
		description:
			"Most WRC complaints must be submitted within six months of the act complained of. If you have been dismissed, made redundant, or are dealing with a workplace issue, contact our Kilkenny employment team without delay.",
	},
	// --- Trust strip ---
	trustStrip: {
		title: "Employment law advice for employees and employers in Kilkenny",
		paragraphs: [
			"Employment disputes are stressful and time-sensitive. Whether you have just been dismissed, are facing a redundancy process, or have received a WRC complaint, early legal advice makes a real difference to the outcome.",
			"Our approach is practical and direct. We assess the strength of your position honestly, advise on the most effective strategy, and move quickly given the tight time limits that apply to most employment law claims.",
			"We advise employees on their rights under Irish employment legislation — including the Unfair Dismissals Acts, the Employment Equality Acts, the Redundancy Payments Acts, and the Organisation of Working Time Act — and represent them in WRC proceedings.",
			"We also advise employers on building compliant contracts and procedures that reduce the risk of disputes arising in the first place, and on managing performance, conduct, and absence issues in a way that is fair and legally defensible.",
		],
		stats: [
			{ label: "Years in practice", value: "46+" },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Employment Law" },
		],
	},
	// --- Article ---
	article: {
		eyebrow: "Employment Law",
		title: "Your rights in the workplace",
		intro:
			"Irish employment law gives employees significant protections — but knowing when those protections apply, how to use them, and how to do so before the time limit runs out is not straightforward. Our Kilkenny employment solicitors advise employees and employers on unfair dismissal, redundancy, discrimination, workplace rights, and WRC proceedings.",
		quote: {
			text: "The six-month deadline for WRC complaints catches a lot of people out. If you think you have been dismissed or treated unfairly at work, the most important thing is to take advice quickly — before the clock runs out.",
			attribution: "Nicholas O'Shea, Solicitor",
			image: nicholasImage,
		},
		blocks: [
			{
				type: "paragraph" as const,
				text: "The Workplace Relations Commission (WRC) is the body responsible for adjudicating on complaints under Irish employment legislation. A WRC adjudicator can award reinstatement, re-engagement, or financial compensation of up to two years' remuneration in unfair dismissal cases. In discrimination cases, the maximum award is also two years' remuneration. The WRC process is generally faster and less formal than going to court, but the time limits are strict and the preparation required is significant.",
			},
			{
				type: "heading" as const,
				text: "Key employment rights for employees",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Unfair dismissal",
						text: "An employee who has been continuously employed for at least 12 months has the right not to be unfairly dismissed. A dismissal can be unfair either because the reason given is not a fair one or because the employer did not follow fair procedures. Common procedural failures include not giving the employee an opportunity to respond to allegations, not conducting a fair investigation, or failing to provide a right of appeal. An employer who cannot show both a fair reason and a fair procedure risks an adverse WRC finding.",
					},
					{
						label: "Constructive dismissal",
						text: "Constructive dismissal occurs when an employee is effectively forced to resign because of their employer's conduct. Examples include a significant unilateral reduction in pay, a demotion without justification, serious workplace bullying, or a fundamental change to the employee's role. The bar for constructive dismissal is high — the employer's conduct must amount to a breach of contract or make it unreasonable to remain. Taking legal advice before resigning is strongly recommended.",
					},
					{
						label: "Redundancy",
						text: "A genuine redundancy arises where a role no longer exists due to business closure, restructuring, or reduced need for particular work. An employee with two or more years of continuous service is entitled to a statutory redundancy payment calculated at two weeks' pay per year of service, plus one additional week, subject to a weekly earnings cap. Employers cannot use redundancy to disguise the dismissal of an employee for other reasons — this is a sham redundancy and is unlawful.",
					},
					{
						label: "Discrimination",
						text: "The Employment Equality Acts 1998 to 2015 prohibit discrimination in employment on nine grounds: gender, civil status, family status, age, disability, sexual orientation, race, religion, and membership of the Traveller community. Discrimination includes direct discrimination, indirect discrimination, harassment (including sexual harassment), and victimisation for making a complaint. Successful discrimination claims can result in compensation of up to two years' remuneration.",
					},
					{
						label: "Organisation of working time",
						text: "The Organisation of Working Time Act 1997 gives employees rights to maximum working hours (48 hours per week averaged over a reference period), rest breaks, annual leave (four weeks per year), and public holiday entitlements. Breaches of these rights can be referred to the WRC.",
					},
					{
						label: "Payment of wages",
						text: "The Payment of Wages Act 1991 prohibits unlawful deductions from wages. If your employer has reduced your pay without your agreement, or has made deductions that are not authorised under your contract, this may constitute an unlawful deduction that can be referred to the WRC.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "Advice for employers",
			},
			{
				type: "paragraph" as const,
				text: "For employers, the cost of getting dismissals and redundancies wrong can be significant — in terms of WRC awards, legal costs, and the disruption of contested proceedings. We advise businesses on putting in place clear, compliant employment contracts, disciplinary and grievance procedures, and performance management frameworks from the outset.",
			},
			{
				type: "paragraph" as const,
				text: "Where a disciplinary or redundancy process is required, we advise on how to manage it correctly — ensuring that the employee is given appropriate notice, a genuine opportunity to respond, and a right of appeal. Following the correct procedure is not just a legal requirement; it is also the fairest way to handle a difficult situation and significantly reduces the risk of a successful WRC claim.",
			},
			{
				type: "heading" as const,
				text: "Time limits — act promptly",
			},
			{
				type: "paragraph" as const,
				text: "Most WRC complaints must be submitted within six months of the date of the act complained of. In exceptional circumstances, this period can be extended to twelve months where the claimant can show reasonable cause for the delay. The six-month deadline is strictly applied — missing it will generally prevent you from bringing a claim, regardless of how strong it might be on its merits. If you have been dismissed, made redundant, or subjected to unlawful treatment at work, contact us without delay.",
			},
		],
	},
	// --- Process steps ---
	process: [
		{
			title: "Initial consultation",
			description:
				"We review your employment situation — your contract, relevant correspondence, and the circumstances of your dismissal or dispute — and advise you honestly on whether you have a viable claim, what process applies, and what steps to take next.",
		},
		{
			title: "Internal grievance and appeal",
			description:
				"Where a dismissal or disciplinary decision has been made, we advise on whether internal grievance or appeal procedures should be exhausted first. Pursuing internal routes is often a prerequisite for WRC claims and can sometimes lead to a resolution without formal proceedings.",
		},
		{
			title: "WRC complaint",
			description:
				"We prepare and submit your complaint to the Workplace Relations Commission, gather the necessary supporting evidence and documentation, and represent you at the WRC adjudication hearing. We advise you clearly on the strengths and weaknesses of your case throughout.",
		},
		{
			title: "Appeal and enforcement",
			description:
				"If the WRC decision is not in your favour, we advise on the right of appeal to the Labour Court. Where a decision is made in your favour and the other party fails to comply, we advise on the steps available to enforce it.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "What is constructive dismissal in Ireland?",
			answer:
				"Constructive dismissal occurs when an employee is forced to resign because their employer's conduct has made it unreasonable to remain in the job. It can arise from a fundamental breach of contract by the employer — such as a significant unilateral pay cut, demotion without justification, persistent bullying, or a failure to address serious workplace issues. The bar is high: the employer's conduct must be serious enough that no reasonable employee would be expected to remain. Crucially, you must generally have 12 months' continuous service to bring an unfair dismissal claim. We strongly advise taking legal advice before resigning.",
		},
		{
			question: "How long do I have to make a WRC complaint?",
			answer:
				"Most WRC complaints must be submitted within six months of the date of the act complained of — for example, the date of dismissal. This deadline can be extended to 12 months in exceptional circumstances where there is reasonable cause for the delay. The six-month rule is strictly enforced and it is one of the most common reasons that otherwise valid claims cannot be pursued. Contact us as soon as possible.",
		},
		{
			question: "Am I entitled to statutory redundancy pay?",
			answer:
				"If you have been in continuous employment for at least two years and your position has been genuinely made redundant, you are entitled to a statutory redundancy payment. The payment is calculated at two weeks' pay per year of service, plus one additional week, subject to a maximum weekly earnings cap (currently €600 per week). Your employer is obliged to pay this. If they refuse or cannot pay, you may be able to claim from the Social Insurance Fund.",
		},
		{
			question: "Can my employer change my contract without my agreement?",
			answer:
				"In general, an employer cannot unilaterally make significant changes to the core terms of your employment — such as reducing your pay, changing your working hours, or substantially altering your role — without your agreement. Doing so may constitute a breach of contract and could form the basis of a constructive dismissal claim or a complaint to the WRC. We can advise you on your options and the best way to respond.",
		},
		{
			question: "What does the WRC process involve?",
			answer:
				"The Workplace Relations Commission adjudicates on complaints under Irish employment legislation. Once a complaint is submitted, it is assigned to a WRC adjudicator who will schedule a hearing. Both parties are given the opportunity to present their case — in writing and orally at the hearing. The adjudicator issues a written decision which can be appealed to the Labour Court. The WRC process is generally less formal and faster than court proceedings.",
		},
		{
			question: "I am an employer and have received a WRC complaint — what should I do?",
			answer:
				"Take it seriously and take legal advice promptly. WRC complaints have strict response deadlines, and how you engage with the process from the outset matters. We advise employers on how to respond, what documentation to gather, and how to present their case at the hearing. We also advise on whether the matter can be resolved by agreement before a hearing takes place.",
		},
	],
} as const;
