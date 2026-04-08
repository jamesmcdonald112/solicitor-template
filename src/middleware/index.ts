import { getActionContext, type SerializedActionResult } from "astro:actions";
import { defineMiddleware } from "astro:middleware";

// Session key used to carry one action result across a redirect (POST -> GET).
const ACTION_RESULT_KEY = "action-result";
// Keep flash data short-lived; enough time for immediate redirect round-trip.
const ACTION_RESULT_TTL_SECONDS = 60;

type StoredActionResult = {
	actionName: string;
	actionResult: SerializedActionResult;
};

export const onRequest = defineMiddleware(async (context, next) => {
	// No middleware state handling is needed when rendering prerendered routes.
	if (context.isPrerendered) {
		return next();
	}

	// Action context gives access to incoming form action calls and helpers
	// to serialize/restore results for Astro.getActionResult(...).
	const { action, setActionResult, serializeActionResult } =
		getActionContext(context);
	// Session storage is the transport layer for PRG flash data.
	const session = context.session;
	if (!session) {
		// Sessions can be unavailable depending on adapter/runtime (e.g. edge middleware).
		return next();
	}

	// validation errors/success message via Astro.getActionResult(...).
	const stored = await session.get<StoredActionResult>(ACTION_RESULT_KEY);
	if (stored) {
		setActionResult(stored.actionName, stored.actionResult);
		// Flash semantics: use once, then remove.
		session.delete(ACTION_RESULT_KEY);
	}

	// Intercept HTML form action POSTs and convert flow to PRG.
	if (action?.calledFrom === "form") {
		const actionResult = await action.handler();
		// Save serialized result so it can be shown after redirect on GET.
		session.set(
			ACTION_RESULT_KEY,
			{
				actionName: action.name,
				actionResult: serializeActionResult(actionResult),
			},
			{ ttl: ACTION_RESULT_TTL_SECONDS },
		);

		// Redirect back to form page on validation/server errors.
		if (actionResult.error) {
			const referer = context.request.headers.get("referer");
			if (referer) {
				return context.redirect(referer);
			}
		}

		// Success path: redirect to the same route as a clean GET.
		return context.redirect(context.originPathname);
	}

	// Non-action requests continue normally.
	return next();
});
