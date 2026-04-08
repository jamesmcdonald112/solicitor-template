import truckIcon from "../../assets/icons/truckIcon.svg?raw";
import image from "../../assets/images/new/aerial-view-of-country-road.webp";
import nicholasImage from "../../assets/team/nicholas.webp";
import { firm } from "../firm";

export const roadTrafficAccidents = {
	// --- Identity ---
	title: "Road Traffic Accidents",
	tag: "Road Traffic Accidents",
	slug: "road-traffic-accidents",
	href: "/services/road-traffic-accidents",
	icon: truckIcon,
	image,
	imageClass: "",
	description:
		"We represent people injured in road traffic accidents across County Kilkenny and beyond — advising on liability, managing the PIAB process, negotiating with insurers, and pursuing claims to court where necessary.",
	// --- SEO ---
	seo: {
		title: `Road Traffic Accident Solicitors Kilkenny | ${firm.companyName}`,
		description:
			"Injured in a road traffic accident in Kilkenny? Our solicitors advise on liability, insurance claims, and compensation — from PIAB to court. Don't deal with insurers alone. Call (056) 776 5829.",
		canonicalPath: "/services/road-traffic-accidents",
	},
	// --- Hero ---
	hero: {
		title: "Road Traffic Accident Claims in Kilkenny",
		subtitle:
			"Being involved in a road traffic accident can be a frightening and disorienting experience. Insurers move quickly to protect their own position — you should too. Our solicitors advise injured parties on their rights, handle the PIAB process and insurer negotiations, and pursue claims to court where a fair settlement cannot be reached.",
	},
	// --- Mid-page CTA ---
	midCta: [
		"Injured in a road traffic accident?",
		"Don't deal with insurers alone.",
	],
	// --- Bottom CTA ---
	cta: {
		title: "Injured in a road traffic accident? Call us today",
		description:
			"Time limits apply to road traffic accident claims. Contact our Kilkenny team as soon as possible to protect your position and get clear advice on your next steps.",
	},
	// --- Trust strip ---
	trustStrip: {
		title: "On your side from the moment you call",
		paragraphs: [
			"After a road traffic accident, you are dealing with insurance companies that handle thousands of claims every year. They have experienced claims handlers and legal teams working to minimise their exposure. We level the playing field — giving you experienced legal representation from the start.",
			"Early settlement offers from insurers are rarely a true reflection of the full value of your claim. They are made quickly, before the full extent of your injuries is known and before you have had the benefit of legal advice. We advise you on what a fair outcome looks like before you consider accepting anything.",
			"We manage every aspect of your claim — from advising on what to do in the immediate aftermath of the accident, to gathering medical evidence, completing the PIAB application, negotiating with insurers, and issuing court proceedings if needed. You are kept informed at every stage.",
			"We give you a realistic view of your claim from the outset. If we think a settlement offer is fair, we will tell you. If we think it undervalues your case, we will tell you that too — and explain what we think you should do about it.",
		],
		stats: [
			{ label: "Years in practice", value: "46+" },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Road Traffic Claims" },
		],
	},
	// --- Article ---
	article: {
		eyebrow: "Road Traffic Accidents",
		title: "What to do after a road traffic accident",
		intro:
			"The steps you take in the hours and days after a road traffic accident can have a real impact on your ability to bring a successful claim. Our Kilkenny solicitors advise injured road users on their rights and manage the full claims process — from the initial PIAB application through to settlement or court proceedings.",
		quote: {
			text: "Insurance companies deal with claims every day — most people don't. Getting legal advice early levels the playing field and makes a real difference to how a claim progresses.",
			attribution: "Nicholas O'Shea, Solicitor",
			image: nicholasImage,
		},
		blocks: [
			{
				type: "heading" as const,
				text: "Steps to take at the scene",
			},
			{
				type: "paragraph" as const,
				text: "Your priority after any accident is your safety and the safety of others. Once you are safe, try to gather as much information as possible at the scene — the other driver's name, address, insurance details, and vehicle registration number. Take photographs of the vehicles, the road conditions, any skid marks, and any visible injuries. If there are witnesses, ask for their names and contact details. Report the accident to An Garda Síochána if anyone is injured, if property is damaged, or if the other driver fails to stop or provide their details.",
			},
			{
				type: "paragraph" as const,
				text: "Seek medical attention as soon as possible — even if you feel your injuries are minor. Some injuries, including whiplash, soft tissue damage, and concussion, take time to become apparent. Having a contemporaneous medical record of your injuries, made shortly after the accident, is important for your claim. Do not give a statement to the other driver's insurance company before taking legal advice — insurers are experienced at managing claims in their own interests, not yours.",
			},
			{
				type: "heading" as const,
				text: "How compensation is calculated",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "General damages",
						text: "Compensation for the pain, suffering, and impact on your quality of life caused by your injuries. The amount is assessed by reference to the Personal Injuries Guidelines published by the Judicial Council in 2021, which set out appropriate damages ranges for common injury types.",
					},
					{
						label: "Loss of earnings",
						text: "If your injuries prevented you from working — or have affected your future earning capacity — you are entitled to claim for that loss. We gather payslips, medical evidence, and where appropriate, reports from occupational or vocational experts to establish and value this element of your claim.",
					},
					{
						label: "Medical and rehabilitation costs",
						text: "The cost of your GP visits, hospital treatment, physiotherapy, specialist appointments, prescribed medication, and any aids or adaptations you required as a result of your injuries are all recoverable as special damages.",
					},
					{
						label: "Future losses",
						text: "In cases of serious injury, compensation can also include the cost of future medical treatment, ongoing care needs, and the long-term impact of the injury on your ability to earn. We engage appropriate experts to establish and quantify these losses.",
					},
					{
						label: "Out-of-pocket expenses",
						text: "Travel costs to and from medical appointments, care provided by a family member or friend, and other reasonably incurred expenses can be claimed as part of your case.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "The PIAB process for road traffic accident claims",
			},
			{
				type: "paragraph" as const,
				text: "Most road traffic accident claims in Ireland must go through the Personal Injuries Assessment Board (PIAB) before court proceedings can be issued. We submit the application to PIAB on your behalf, supported by medical reports and evidence of your financial losses. PIAB will assess the claim and make an award. If the award is accepted by both sides, the case is resolved. If either side rejects it, PIAB issues an authorisation and we can then issue court proceedings.",
			},
			{
				type: "paragraph" as const,
				text: "Insurance companies routinely make early settlement offers — sometimes before a PIAB assessment is made. These offers are almost always made before the full extent of your injuries is known and before you have had independent legal advice. We strongly advise against accepting any settlement offer, or signing any document from an insurer, without taking legal advice first.",
			},
			{
				type: "heading" as const,
				text: "Uninsured and untraced drivers",
			},
			{
				type: "paragraph" as const,
				text: "If you were injured by a driver who was uninsured, or who left the scene without stopping, you may still be entitled to compensation. The Motor Insurers' Bureau of Ireland (MIBI) operates a scheme to compensate victims of uninsured and untraced drivers. Claims under the MIBI scheme follow a different procedure and are subject to specific conditions. We advise on whether the MIBI scheme applies to your case and manage the claim on your behalf.",
			},
		],
	},
	// --- Process steps ---
	process: [
		{
			title: "Initial consultation",
			description:
				"We review the details of your accident, advise on liability, and explain the claims process. We also advise on what evidence to gather and what steps to take in the early stages.",
		},
		{
			title: "Medical evidence",
			description:
				"We advise on the medical evidence you will need to support your claim — GP records, consultant reports, and where appropriate, reports from independent medical experts. Thorough medical evidence is the foundation of a strong claim.",
		},
		{
			title: "PIAB application",
			description:
				"We submit your application to the Personal Injuries Assessment Board, supported by medical reports and evidence of your losses. We guide you through the assessment process and advise on any award made.",
		},
		{
			title: "Insurer negotiations",
			description:
				"If PIAB does not resolve the matter, we engage directly with the other party's insurer. We handle all correspondence and negotiate to achieve a settlement that properly reflects the full value of your claim.",
		},
		{
			title: "Court proceedings if needed",
			description:
				"Where a fair settlement cannot be achieved, we issue court proceedings and represent you through to trial. We prepare all necessary documentation and ensure you are fully supported at every hearing.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "What should I do immediately after a road traffic accident?",
			answer:
				"Ensure you are safe and call emergency services if anyone is injured. Exchange details with the other driver — name, address, insurance details, and vehicle registration. Take photographs of the scene, the vehicles, and any visible injuries. Report the accident to An Garda Síochána if required. Seek medical attention as soon as possible. Contact a solicitor before giving any statement to an insurance company.",
		},
		{
			question: "What if the other driver was uninsured or drove away?",
			answer:
				"If the driver responsible for your accident was uninsured, or if they left the scene without stopping, you may be entitled to compensation through the Motor Insurers' Bureau of Ireland (MIBI). The MIBI compensates victims of uninsured and untraced drivers in Ireland, subject to certain conditions. We can advise you on whether the MIBI scheme applies and manage the claim on your behalf.",
		},
		{
			question: "How long does a road traffic accident claim take in Ireland?",
			answer:
				"The timeline depends on the severity of your injuries, the complexity of the liability issues, and whether the matter is resolved through PIAB or goes to court. Claims involving clear liability and soft tissue injuries are often settled within twelve to eighteen months. Claims involving serious or long-term injuries take longer — it is important not to settle before the full extent of your injuries and future losses is established.",
		},
		{
			question: "Can I claim for damage to my vehicle as well?",
			answer:
				"Yes, but a property damage claim is separate from a personal injury claim. Your vehicle damage claim is made against the other driver's motor insurer (or your own insurer under your policy) and does not go through PIAB. We can advise you on both aspects of your situation.",
		},
		{
			question: "Should I accept the insurance company's first offer?",
			answer:
				"We strongly advise against accepting any offer from an insurance company without first taking legal advice. First offers from insurers are routinely made before the full extent of your injuries is known and before you have independent representation. An offer that seems reasonable on the surface may significantly undervalue your claim once all your losses — including future medical costs and loss of earnings — are taken into account.",
		},
		{
			question: "What is the time limit for making a road traffic accident claim?",
			answer:
				"The general time limit for personal injury claims in Ireland — including road traffic accidents — is two years from the date of the accident or from the date you became aware of the injury. Missing this deadline will generally prevent you from bringing a claim. It is important to take advice as soon as possible after an accident.",
		},
	],
} as const;
