import banknotesIcon from "../../assets/icons/banknotesIcon.svg?raw";
import image from "../../assets/images/new/calculator-and-finances.webp";
import richardImage from "../../assets/team/richard.webp";
import { firm } from "../firm";

export const debtCollection = {
	// --- Identity ---
	title: "Debt Collection",
	tag: "Debt Recovery",
	slug: "debt-collection",
	href: "/services/debt-collection",
	icon: banknotesIcon,
	image,
	imageClass: "object-[80%_60%]",
	description:
		"We assist businesses and individuals in recovering money owed to them — from solicitor's demand letters through to court proceedings and enforcement. We take a structured, proportionate approach to get you paid as efficiently as possible.",
	// --- SEO ---
	seo: {
		title: `Debt Recovery Solicitors Kilkenny | ${firm.companyName}`,
		description:
			"Debt recovery solicitors in Kilkenny for businesses and individuals. We pursue outstanding debts from formal demand letter to court judgment and enforcement. Call (056) 776 5829.",
		canonicalPath: "/services/debt-collection",
	},
	// --- Hero ---
	hero: {
		title: "Debt Recovery in Kilkenny",
		subtitle:
			"Unpaid debts put real pressure on businesses and individuals. Our solicitors take a structured, efficient approach to debt recovery — starting with a formal demand letter and moving through the courts where necessary. We keep the process proportionate to the amount at stake and keep you fully informed throughout.",
	},
	// --- Mid-page CTA ---
	midCta: ["Owed money that isn't being paid?", "We can help you recover it."],
	// --- Bottom CTA ---
	cta: {
		title: "Owed money? Let us help you recover it",
		description:
			"The sooner you act on an unpaid debt, the better your prospects of recovery. Contact our Kilkenny solicitors to discuss your situation and find out the most effective way forward.",
	},
	// --- Trust strip ---
	trustStrip: {
		title: "Efficient, proportionate debt recovery in Kilkenny",
		paragraphs: [
			"Chasing unpaid debts consumes time and energy that most businesses cannot afford. We take that burden from you — managing correspondence, drafting demand letters, handling court filings, and advising on enforcement while you focus on running your business.",
			"A solicitor's letter of demand carries significantly more weight than a phone call or a final invoice. In many cases, it is enough to prompt payment without any further action. Where it is not, we move promptly through the court process to secure judgment.",
			"We handle debt recovery for businesses and individuals across all court jurisdictions — from small District Court claims to significant High Court proceedings. Our approach is always proportionate to the size and complexity of the debt involved.",
			"We give clear, upfront cost advice so you can make an informed decision about whether and how to pursue a debt. Our aim is to recover what you are owed as efficiently as possible, with costs that are justified by the amount at stake.",
		],
		stats: [
			{ label: "Years in practice", value: "46+" },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Debt Recovery" },
		],
	},
	// --- Article ---
	article: {
		eyebrow: "Debt Recovery",
		title: "Recovering what you are owed",
		intro:
			"Unpaid invoices and outstanding debts are a serious problem — financially and operationally — for businesses and individuals alike. Our Kilkenny solicitors take a structured, prompt approach to debt recovery: formal demand letters, court proceedings where necessary, and enforcement of judgments to achieve actual payment.",
		quote: {
			text: "A solicitor's letter changes the dynamic immediately. Most people who have been ignoring invoices take it seriously — and in many cases that is all it takes to get paid without any court involvement.",
			attribution: "Richard O'Shea, Solicitor",
			image: richardImage,
		},
		blocks: [
			{
				type: "paragraph" as const,
				text: "A solicitor's letter of demand carries significantly more weight than a final invoice or a direct phone call. It formally puts the debtor on notice that legal proceedings will follow if payment is not made within a specified period, and it signals clearly that the creditor is serious about pursuing what is owed. In many cases, a well-drafted demand letter from a solicitor is all that is needed to prompt payment without any further action.",
			},
			{
				type: "paragraph" as const,
				text: "Where payment is not made following a demand, we advise on the appropriate court based on the amount of the debt. The District Court deals with claims up to €15,000; the Circuit Court with claims up to €75,000; and the High Court with larger amounts. For undisputed debts, it is often possible to obtain judgment through a summary procedure — without the need for a contested hearing — which significantly reduces the time and cost involved. Once judgment is obtained, a range of enforcement options becomes available.",
			},
			{
				type: "heading" as const,
				text: "Enforcement options after judgment",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Judgment mortgage",
						text: "A court judgment can be registered as a mortgage against any property owned by the debtor in Ireland. This secures the debt against the property, meaning the debtor cannot sell or refinance without discharging what they owe you. It is one of the most effective enforcement tools available where the debtor owns property.",
					},
					{
						label: "Sheriff enforcement",
						text: "A County Registrar or Sheriff can be instructed to seize goods belonging to the debtor to the value of the judgment. This is a practical enforcement option where the debtor has moveable assets but is unwilling to pay voluntarily.",
					},
					{
						label: "Instalment orders",
						text: "Where a debtor has limited means, the court can order payment by instalments over a period of time. Failure to comply with an instalment order is a serious matter and can lead to further enforcement action.",
					},
					{
						label: "Examination of the debtor",
						text: "The court can compel a debtor to attend and be examined about their financial circumstances and assets. This is useful where you are unsure what assets the debtor holds and want to identify what enforcement options are available.",
					},
					{
						label: "Insolvency proceedings",
						text: "Where a debtor — whether an individual or a company — is genuinely unable to pay, we advise on whether bankruptcy proceedings (for individuals) or winding-up proceedings (for companies) are appropriate, and what this means for the realistic prospect of recovery.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "Commercial debt recovery",
			},
			{
				type: "paragraph" as const,
				text: "For businesses pursuing commercial debts, the Late Payment in Commercial Transactions Regulations 2002 (implementing the EU Late Payment Directive) give creditors the right to claim statutory interest on overdue invoices in business-to-business transactions, without needing a specific contractual provision. The rate is 8% above the ECB reference rate, and you are also entitled to claim a fixed sum to cover recovery costs. We advise businesses on these entitlements as part of the debt recovery process.",
			},
			{
				type: "paragraph" as const,
				text: "We are conscious of the cost of legal action relative to the amount of the debt. For smaller debts, a demand letter and a prompt District Court application is often the most proportionate approach. For larger or more complex commercial debts, we develop a considered strategy — advising on the best route to recovery given the size of the debt, the nature of the dispute, and the financial position of the debtor.",
			},
		],
	},
	// --- Process steps ---
	process: [
		{
			title: "Letter of demand",
			description:
				"We issue a formal solicitor's letter to the debtor, setting out the amount owed and giving a clear deadline for payment. This often prompts payment without further action and establishes a written record that legal proceedings will follow if payment is not made.",
		},
		{
			title: "Court proceedings",
			description:
				"If payment is not forthcoming, we issue proceedings in the appropriate court based on the amount of the debt. For undisputed debts, we seek judgment by summary procedure — avoiding the need for a full hearing and reducing the time to judgment.",
		},
		{
			title: "Judgment",
			description:
				"Once judgment is obtained, it is a formal court order confirming that the debt is owed. Judgment opens up a range of enforcement options and can be registered as a judgment mortgage against any property the debtor owns.",
		},
		{
			title: "Enforcement",
			description:
				"We advise on the most effective means of enforcement given the debtor's circumstances and take the necessary steps to achieve actual payment — whether through sheriff enforcement, judgment mortgage registration, instalment orders, or other available routes.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "How much does it cost to pursue a debt through the courts in Ireland?",
			answer:
				"Court fees vary depending on the amount of the debt and the court involved. We will advise you on the likely costs at the outset and discuss the most cost-effective approach given the size of the debt. In many cases where judgment is obtained, the court will order the debtor to pay your legal costs — though recovering costs from a debtor with limited means can be difficult in practice.",
		},
		{
			question: "What if the debtor says they cannot pay?",
			answer:
				"Even where a debtor claims to have no money, it is worth taking legal advice. Assets may exist that are not immediately apparent — property, vehicles, or business interests. An instalment arrangement may be achievable. If a debtor is genuinely insolvent, we advise on whether bankruptcy or company winding-up proceedings are appropriate and what this means for the prospect of recovery.",
		},
		{
			question: "Is there a time limit for pursuing a debt in Ireland?",
			answer:
				"Yes. The general limitation period for contract debts in Ireland is six years from the date the debt became due. After this period, the debt may become statute-barred and unenforceable through the courts. The clock can be reset in certain circumstances — for example, by a written acknowledgement of the debt by the debtor. It is important to act promptly.",
		},
		{
			question: "Can I recover interest on an unpaid debt?",
			answer:
				"Possibly. If your contract includes a term providing for interest on late payments, you can claim that interest. For business-to-business debts, the Late Payment in Commercial Transactions Regulations entitle you to statutory interest at 8% above the ECB reference rate without needing a specific contract clause, as well as a fixed sum for recovery costs. We will advise you on what interest is recoverable in your specific situation.",
		},
		{
			question: "What is the difference between the District Court, Circuit Court, and High Court for debt claims?",
			answer:
				"In Ireland, the court in which you bring a debt claim depends on the amount owed. The District Court handles claims up to €15,000; the Circuit Court handles claims between €15,000 and €75,000; and the High Court handles claims above €75,000. The choice of court affects court fees, the speed of the process, and the procedural rules that apply. We advise you on the most appropriate court for your claim.",
		},
	],
} as const;
