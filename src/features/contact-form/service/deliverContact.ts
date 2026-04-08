import { RESEND_API_KEY } from "astro:env/server";
import { Resend } from "resend";
import type { ContactInput } from "../schema/contact.schema";

const resend = new Resend(RESEND_API_KEY);

const FROM = "onboarding@resend.dev";
const TO = "jamesmcdonald112@yahoo.ie";

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
