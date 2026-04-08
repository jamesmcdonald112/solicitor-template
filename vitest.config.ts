import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "node",
	},
	resolve: {
		alias: {
			"astro:env/server": new URL(
				"./src/__mocks__/astro-env-server.ts",
				import.meta.url,
			).pathname,
			"astro:actions": new URL(
				"./src/__mocks__/astro-actions.ts",
				import.meta.url,
			).pathname,
		},
	},
});
