// @ts-check
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
  build: {
    inlineStylesheets: "auto",
  },
});
