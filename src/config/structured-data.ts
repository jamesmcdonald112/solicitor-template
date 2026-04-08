import { firm } from "./firm";

function getOpeningHoursSpecification() {
	return firm.officeHours.weekly.map((entry) => ({
		"@type": "OpeningHoursSpecification" as const,
		dayOfWeek: entry.day,
		opens: entry.opens,
		closes: entry.closes,
	}));
}

export function getLawFirmStructuredData() {
	const siteUrl = new URL("/", firm.siteUrl).toString();
	const imageUrl = new URL(firm.seo.defaultOgImage, firm.siteUrl).toString();
	const openingHoursSpecification = getOpeningHoursSpecification();
	const sameAs = firm.socialLinks?.filter(Boolean);

	const baseEntity = {
		name: firm.companyName,
		url: siteUrl,
		telephone: firm.phone.phoneHref,
		image: imageUrl,
		address: {
			"@type": "PostalAddress",
			streetAddress: firm.address.line1,
			addressLocality: firm.address.city,
			postalCode: firm.address.eircode,
			addressCountry: firm.address.country,
		},
		areaServed: [
			{
				"@type": "Country",
				name: "Ireland",
			},
			{
				"@type": "AdministrativeArea",
				name: firm.county,
			},
		],
		openingHoursSpecification,
		...(sameAs && sameAs.length > 0 ? { sameAs } : {}),
	};

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "LegalService",
				"@id": `${siteUrl}#legalservice`,
				...baseEntity,
			},
			{
				"@type": "LocalBusiness",
				"@id": `${siteUrl}#localbusiness`,
				...baseEntity,
			},
		],
	};
}
