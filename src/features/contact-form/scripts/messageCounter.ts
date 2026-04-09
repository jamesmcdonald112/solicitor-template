/* ── CLIENT SCRIPT: Message Counter ────────────────────────────────────────────
   Updates character count display for the message textarea.
   Toggles visual warning state at 90% capacity.
   CONNECTED TO: ContactForm.astro (textarea#message, #message-count).
   ASTRO TRANSITIONS: Re-initialises on astro:after-swap for persist support.
   STYLES: Uses plain CSS classes. Toggle .is-warning for colour change.
   Stage 2: Add CSS for .is-warning in blocks.css using --color-destructive token.
   ────────────────────────────────────────────────────────────────────────────── */
import { CONTACT_FIELD_LIMITS } from "../config/contact-field-limits";

const max = CONTACT_FIELD_LIMITS.message.max;

function initCounter() {
	const textarea = document.getElementById(
		"message",
	) as HTMLTextAreaElement | null;
	const counter = document.getElementById("message-count");

	if (!textarea || !counter) return;

	const update = () => {
		const count = textarea.value.length;
		counter.textContent = `${count} / ${max}`;
		counter.classList.toggle("is-warning", count >= max * 0.9);
	};

	textarea.addEventListener("input", update);
	update();
}

// astro:after-swap fires after transition:persist has restored element values
document.addEventListener("astro:after-swap", initCounter);
initCounter();
