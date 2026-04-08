export const contactPageContent = {
	seo: {
		title: "Contact",
		description:
			"Contact Mary Molloy Solicitor in Kilkenny to arrange a legal consultation.",
		canonicalPath: "/contact",
	},
	title: "Get in touch",
	intro:
		"We understand that seeking legal advice can feel overwhelming. Our team is here to provide clear, practical guidance from the outset. Contact us to arrange a consultation or to discuss your matter in confidence.",
} as const;

export type ContactPageContent = typeof contactPageContent;
