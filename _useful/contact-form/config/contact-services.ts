import { SERVICES } from "../../../src/config/service-areas";

export const CONTACT_SERVICES = [...SERVICES, "Other"] as const;

export type ContactService = (typeof CONTACT_SERVICES)[number];
