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
		counter.classList.toggle("text-destructive", count >= max * 0.9);
		counter.classList.toggle("text-text-subtle", count < max * 0.9);
	};

	textarea.addEventListener("input", update);
	update();
}

// astro:after-swap fires after transition:persist has restored element values
document.addEventListener("astro:after-swap", initCounter);
initCounter();
