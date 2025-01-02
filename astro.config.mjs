import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com", // ここは随時変更する必要がある。
	integrations: [
		react(),
		sitemap(),
		tailwind({
			// https://docs.astro.build/ja/guides/integrations-guide/tailwind/#nesting
			nesting: true,
			// https://docs.astro.build/ja/guides/integrations-guide/tailwind/#applybasestyles
			applyBaseStyles: false,
		}),
	],
});
