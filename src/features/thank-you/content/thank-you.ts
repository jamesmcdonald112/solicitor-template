export const thankYouContent = {
	seo: {
		title: "Thank you",
		description: "Thank you for your enquiry.",
	},
	heading: "Message received",
	body: "Thank you for getting in touch. We'll review your message and get back to you as soon as possible.",
	href: "/",
} as const;

export type ThankYouContent = typeof thankYouContent;
