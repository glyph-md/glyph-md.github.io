// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build
export default defineConfig({
  site: "https://glyph.md",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fa", "es", "zh", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    // Emits sitemap-index.xml + sitemap-0.xml listing all locale pages
    // (referenced by public/robots.txt). The i18n/hreflang option is
    // incompatible with prefixDefaultLocale:false, so we keep it plain.
    sitemap(),
  ],
  build: {
    inlineStylesheets: "auto",
  },
});
