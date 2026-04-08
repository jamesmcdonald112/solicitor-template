const headers = document.querySelectorAll<HTMLElement>("header[data-header]");

headers.forEach((header) => {
	if (header.dataset.bound === "true") return;

	const openBtn = header.querySelector<HTMLButtonElement>(
		"[data-action='open']",
	);
	const dialog = header.querySelector<HTMLDialogElement>("[data-mobile-menu]");

	if (!openBtn || !dialog) return;

	header.dataset.bound = "true";

	const closeBtn = dialog.querySelector<HTMLButtonElement>(
		"[data-action='close']",
	);

	const overlay = dialog.querySelector<HTMLElement>("[data-overlay]");

	openBtn.addEventListener("click", () => dialog.showModal());
	closeBtn?.addEventListener("click", () => dialog.close());
	overlay?.addEventListener("click", () => dialog.close());
});
