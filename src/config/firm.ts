export const firm = {
	siteUrl: "https://test-mary-m.netlify.app/",
	companyName: "Mary Molloy Solicitor",
	county: "Kilkenny",
	established: 1979,

	phone: {
		display: "(056) 776 5829",
		phoneHref: "+353567765829",
	},
	// TODO: Replace with the real firm email address.
	email: "info@YOURDOMAIN.ie",

	address: {
		line1: "2 Rose Inn St",
		city: "Kilkenny",
		eircode: "R95 W58D",
		country: "Ireland",
		googleMapDirectionsHref:
			"https://www.google.com/maps/dir/?api=1&destination=2+Rose+Inn+St,+Kilkenny,+R95+W58D",
		googleMapsProfileHref:
			"https://www.google.com/maps/place/Mary+Molloy+Solicitors/@52.6515721,-7.2510081,17z/data=!3m1!4b1!4m6!3m5!1s0x485d309e31433479:0x7dfb1c8650009ac1!8m2!3d52.6515721!4d-7.2510081!16s%2Fg%2F1q62dzkxm?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D",
	},

	officeHours: {
		display: "Mon-Fri 9:00-17:30",
		weekly: [
			{ day: "Monday", opens: "09:00", closes: "17:30" },
			{ day: "Tuesday", opens: "09:00", closes: "17:30" },
			{ day: "Wednesday", opens: "09:00", closes: "17:30" },
			{ day: "Thursday", opens: "09:00", closes: "17:30" },
			{ day: "Friday", opens: "09:00", closes: "17:30" },
		],
	},

	googlePlaceId: "ChIJeTRDMZ4wXUgRwZoAUIYc-30",

	socialLinks: [],

	seo: {
		defaultTitle: "Mary Molloy Solicitor | Kilkenny",
		defaultDescription:
			"Mary Molloy Solicitor is a solicitor's practice based in Kilkenny, providing legal services including conveyancing, probate, family law and litigation. Contact us to arrange an appointment.",
		defaultOgImage: "/images/open-graph/og-default.webp",
		defaultOgImageAlt: "Mary Molloy Solicitor - Legal Services in Kilkenny",
	},
} as const;
