export { buyingAndSellingProperty } from "./buying-and-selling-property";
export { debtCollection } from "./debt-collection";
export { employmentLaw } from "./employment-law";
export { familyAndChildcareLaw } from "./family-and-childcare-law";
export { leasesAndTenancyAgreements } from "./leases-and-tenancy-agreements";
export { personalInjuryLitigation } from "./personal-injury-litigation";
export { roadTrafficAccidents } from "./road-traffic-accidents";
export { willsAndEstateAdministration } from "./wills-and-estate-administration";

import { buyingAndSellingProperty } from "./buying-and-selling-property";
import { debtCollection } from "./debt-collection";
import { employmentLaw } from "./employment-law";
import { familyAndChildcareLaw } from "./family-and-childcare-law";
import { leasesAndTenancyAgreements } from "./leases-and-tenancy-agreements";
import { personalInjuryLitigation } from "./personal-injury-litigation";
import { roadTrafficAccidents } from "./road-traffic-accidents";
import { willsAndEstateAdministration } from "./wills-and-estate-administration";

// Master list — order here controls the order on the services index page
export const services = [
	buyingAndSellingProperty,
	willsAndEstateAdministration,
	familyAndChildcareLaw,
	personalInjuryLitigation,
	roadTrafficAccidents,
	leasesAndTenancyAgreements,
	employmentLaw,
	debtCollection,
] as const;
