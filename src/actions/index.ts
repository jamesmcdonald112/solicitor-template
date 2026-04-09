/* ── ASTRO ACTIONS REGISTRY ────────────────────────────────────────────────────
   Exports all server actions. Astro reads this file automatically.
   Each action is defined in its own file and imported here.
   CONNECTED TO: src/middleware/index.ts (PRG handler), form components.
   ────────────────────────────────────────────────────────────────────────────── */
import { contact } from "../features/contact-form/actions/contact";

export const server = {
	contact,
};
