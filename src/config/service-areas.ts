export const SERVICES = [
	"Buying and Selling Property",
	"Wills and Estate Administration",
	"Family & Childcare Law",
	"Personal Injury / Litigation",
	"Road Traffic Accidents",
	"Leases and Tenancy Agreements",
	"Employment Law",
	"Debt Collection",
] as const;

export type Service = (typeof SERVICES)[number];
