/* ── SERVICE: Email Delivery ───────────────────────────────────────────────────
   Sends contact form submissions via Resend.
   FROM/TO: Must be updated per client. FROM must use a verified Resend domain.
   TEMPLATE SETUP: Replace FROM and TO before launch. See README for Resend setup.
   CONNECTED TO: contact action handler, RESEND_API_KEY env variable.
   ────────────────────────────────────────────────────────────────────────────── */
import { RESEND_API_KEY } from "astro:env/server";
import { Resend } from "resend";
import type { ContactInput } from "../schema/contact.schema";

const resend = new Resend(RESEND_API_KEY);

// TEMPLATE: Replace with a verified Resend sender domain before deployment
const FROM = "onboarding@resend.dev";
// TEMPLATE: Replace with client email address before deployment
const TO = "YOUR_EMAIL@YOURDOMAIN.ie";

export async function deliverContact(input: ContactInput): Promise<void> {
	await resend.emails.send({
		from: FROM,
		to: TO,
		subject: `New contact form submission — ${input.service}`,
		html: [
			`<p><strong>Name:</strong> ${input.name}</p>`,
			`<p><strong>Email:</strong> ${input.email}</p>`,
			`<p><strong>Phone:</strong> ${input.phone}</p>`,
			`<p><strong>Service:</strong> ${input.service}</p>`,
			`<p><strong>Message:</strong><br>${(input.message || "(none)").replace(/\n/g, "<br>")}</p>`,
		].join("\n"),
	});
}
