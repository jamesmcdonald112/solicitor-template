// @ts-check
import netlify from "@astrojs/netlify";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
	adapter: netlify(),
	env: {
		schema: {
			RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
			GOOGLE_PLACES_API_KEY: envField.string({ context: "server", access: "secret" }),
		},
	},
	session: {
		driver: "memory",
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
