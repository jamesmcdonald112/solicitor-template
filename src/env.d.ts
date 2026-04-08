import type { SerializedActionResult } from "astro:actions";

declare namespace App {
	interface SessionData {
		"action-result"?: {
			actionName: string;
			actionResult: SerializedActionResult;
		};
	}
}
