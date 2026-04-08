import shieldExclamationIcon from "../../assets/icons/shieldExclamationIcon.svg?raw";
import image from "../../assets/images/new/lady-justice-and-gavel-on-desk.webp";
import richardImage from "../../assets/team/richard.webp";
import { firm } from "../firm";

export const personalInjuryLitigation = {
	// --- Identity ---
	title: "Personal Injury / Litigation",
	tag: "Personal Injury",
	slug: "personal-injury-litigation",
	href: "/services/personal-injury-litigation",
	icon: shieldExclamationIcon,
	image,
	imageClass: "object-[right_25%]",
	description:
		"If you have been injured through no fault of your own, we can advise you on your rights and pursue a claim on your behalf. We handle personal injury claims and civil litigation from initial assessment through to settlement or trial.",
	// --- SEO ---
	seo: {
		title: `Personal Injury Solicitors Kilkenny | ${firm.companyName}`,
		description:
			"Personal injury solicitors in Kilkenny. We advise on workplace accidents, public liability claims, and road traffic injuries — from PIAB application to settlement or court. Call (056) 776 5829.",
		canonicalPath: "/services/personal-injury-litigation",
	},
	// --- Hero ---
	hero: {
		title: "Personal Injury & Litigation in Kilkenny",
		subtitle:
			"If you have been injured through no fault of your own, you may be entitled to compensation for your pain, suffering, and financial losses. Our solicitors will assess your case honestly, explain the process clearly, and represent your interests throughout — from the initial PIAB application through to settlement or trial.",
	},
	// --- Mid-page CTA ---
	midCta: ["Unsure whether you have a claim?", "Get an honest assessment."],
	// --- Bottom CTA ---
	cta: {
		title: "Get an honest assessment of your claim",
		description:
			"If you have been injured or are involved in a civil dispute, early legal advice is essential. Contact our Kilkenny litigation team to discuss your situation and find out where you stand.",
	},
	// --- Trust strip ---
	trustStrip: {
		title: "Straightforward advice on personal injury claims in Kilkenny",
		paragraphs: [
			"Personal injury claims can feel daunting if you have never been through one before. We explain how the process works in plain, straightforward terms and give you a realistic view of your claim from the very first meeting.",
			"We handle all aspects of your claim — gathering medical evidence, dealing with PIAB, negotiating with insurers, and, where necessary, issuing and pursuing court proceedings. You focus on your recovery; we take care of the legal side.",
			"We approach every case with honesty. If we do not believe a claim is strong enough to pursue, we will say so clearly rather than give you false hope. That approach means our clients always know where they stand.",
			"Our litigation team advises on all types of personal injury claims — workplace accidents, public liability, road traffic injuries, and general civil disputes. We bring the same care and thoroughness to every case, regardless of its size.",
		],
		stats: [
			{ label: "Years in practice", value: "46+" },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Litigation" },
		],
	},
	// --- Article ---
	article: {
		eyebrow: "Personal Injury",
		title: "Understanding your right to compensation",
		intro:
			"If you have been injured through the negligence of another person or organisation, Irish law entitles you to seek compensation. Understanding what you can claim for, how the process works, and what to expect at each stage makes a real difference to how a claim progresses. Our Kilkenny solicitors handle personal injury claims from initial assessment through to settlement or trial.",
		quote: {
			text: "We always give clients an honest assessment from the start — including if we think a claim is unlikely to succeed. People deserve straight answers, not false hope.",
			attribution: "Richard O'Shea, Solicitor",
			image: richardImage,
		},
		blocks: [
			{
				type: "heading" as const,
				text: "What you can claim for",
			},
			{
				type: "paragraph" as const,
				text: "A personal injury claim in Ireland covers two main categories of loss. General damages compensate for the pain, suffering, and loss of enjoyment of life caused by your injuries. Special damages cover your actual out-of-pocket losses — medical expenses, physiotherapy and rehabilitation costs, loss of earnings while you were unable to work, and travel costs associated with medical appointments. In serious cases, future losses — including future medical treatment and the long-term impact on your earning capacity — are also recoverable.",
			},
			{
				type: "paragraph" as const,
				text: "The level of general damages for common injury types is guided by the Personal Injuries Guidelines published by the Judicial Council, which replaced the Book of Quantum in 2021. These guidelines set out the range of damages appropriate for particular injuries, and courts and PIAB use them as a starting point when assessing claims. We advise you on where your injuries are likely to fall within these ranges and what a fair settlement looks like.",
			},
			{
				type: "heading" as const,
				text: "The Personal Injuries Assessment Board (PIAB)",
			},
			{
				type: "paragraph" as const,
				text: "In Ireland, most personal injury claims must go through the Personal Injuries Assessment Board (PIAB) before court proceedings can be issued. PIAB is an independent body that assesses personal injury claims and makes an award without the need for litigation. If both parties accept the PIAB award, the matter is resolved without the cost and delay of court proceedings. If either party rejects the award, PIAB issues an authorisation allowing the claimant to bring court proceedings.",
			},
			{
				type: "paragraph" as const,
				text: "We manage the PIAB process on your behalf from start to finish — gathering the medical evidence, completing the application, responding to correspondence, and advising you on whether any award made is fair given the nature and extent of your injuries. We never advise you to accept an offer without fully explaining what we think it is worth and why.",
			},
			{
				type: "heading" as const,
				text: "Types of personal injury claims we handle",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Workplace accidents",
						text: "Employers in Ireland have a statutory duty to provide a safe place and system of work. If you were injured at work due to inadequate training, faulty equipment, unsafe premises, or a failure to follow health and safety regulations, you may have a claim. We advise on both the personal injury claim and any related employment law rights.",
					},
					{
						label: "Public liability",
						text: "Occupiers of premises — shops, restaurants, public buildings, and private properties — owe a duty of care to visitors under the Occupiers' Liability Act 1995. If you slipped, tripped, or were otherwise injured on someone else's property due to a hazard they failed to address, you may be entitled to compensation.",
					},
					{
						label: "Road traffic accidents",
						text: "If you were injured in a road traffic accident that was not your fault, you may be entitled to compensation for your injuries and related losses. Road traffic accident claims are subject to specific procedural rules and must go through PIAB before proceedings can issue. See our separate road traffic accidents page for more detail.",
					},
					{
						label: "Civil litigation",
						text: "Where a dispute cannot be resolved by negotiation — whether it involves a breach of contract, a property dispute, or another civil wrong — court proceedings may be necessary. We advise on the merits of bringing or defending civil proceedings and represent clients through all stages of litigation up to and including trial.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "Time limits for personal injury claims",
			},
			{
				type: "paragraph" as const,
				text: "In Ireland, the general time limit for making a personal injury claim is two years from the date of the accident or from the date you first became aware of the injury (known as the 'date of knowledge'). This is known as the statute of limitations. Where the injured person is a minor, time does not begin to run until they turn 18. Missing the time limit is generally fatal to a claim — it is one of the most important reasons to take legal advice as soon as possible after an accident.",
			},
		],
	},
	// --- Process steps ---
	process: [
		{
			title: "Initial assessment",
			description:
				"We review the circumstances of your injury and give you an honest assessment of the strength of your claim, the likely process, and what you can realistically expect in terms of outcome and timeline.",
		},
		{
			title: "Medical evidence",
			description:
				"We advise on what medical evidence you will need to support your claim and help you gather reports from your treating doctors and, where appropriate, from independent medical experts.",
		},
		{
			title: "PIAB application",
			description:
				"We submit your application to the Personal Injuries Assessment Board, manage all correspondence with PIAB and the respondent, and advise you on any assessment made.",
		},
		{
			title: "Negotiation and settlement",
			description:
				"Many claims are resolved by agreement before trial. We negotiate with the other side's insurers or solicitors to achieve the best possible outcome, and we advise you clearly and honestly on any offers made.",
		},
		{
			title: "Court proceedings",
			description:
				"If a fair settlement cannot be reached, we issue court proceedings and represent you through all stages of the litigation, up to and including trial. We prepare you fully for every step and keep you informed throughout.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "How long do I have to make a personal injury claim in Ireland?",
			answer:
				"The general time limit is two years from the date of the accident or from the date you became aware of the injury. There are limited exceptions — for example, where the injured person is under 18, time does not begin to run until they reach adulthood. The two-year limit is strictly applied and missing it will generally prevent you from bringing a claim, so it is important to take advice as soon as possible.",
		},
		{
			question: "Do I have to go through PIAB before going to court?",
			answer:
				"In most personal injury cases, yes. The Personal Injuries Assessment Board must be given the opportunity to assess your claim before you can issue court proceedings. PIAB will make an assessment of your damages. If both parties accept it, the matter is resolved without litigation. If either party rejects it, PIAB issues an authorisation and you can then proceed to court. We manage the entire PIAB process on your behalf.",
		},
		{
			question: "How much compensation will I receive?",
			answer:
				"The amount of compensation depends on the nature and severity of your injuries, their impact on your daily life and ability to work, and the financial losses you have suffered. We will give you a realistic estimate based on your specific circumstances and the Personal Injuries Guidelines, which courts use as a guide to appropriate levels of general damages. We do not make promises about outcomes, but we do give you our honest assessment.",
		},
		{
			question: "What if I was partly at fault for the accident?",
			answer:
				"You may still be entitled to compensation even if you were partly responsible for the accident. Under Irish law, the concept of contributory negligence allows courts to reduce a damages award by the percentage attributed to the claimant's own fault. For example, if you were 20% at fault, your award would be reduced by 20%. We will advise you on how contributory negligence might apply in your case.",
		},
		{
			question: "Does it cost anything to make a personal injury claim?",
			answer:
				"We will discuss our fees with you at the outset. In personal injury cases, costs are a legitimate element of a claim and can be recovered from the other side in many circumstances where proceedings are successful. We will explain the costs position clearly before you make any decisions.",
		},
	],
} as const;
