# Glyph website

Marketing website and landing page for [Glyph](https://github.com/hamidfzm/glyph) — a modern, cross-platform markdown viewer and editor.

Built with [Astro](https://astro.build) and deployed to GitHub Pages. Tracks [hamidfzm/glyph#115](https://github.com/hamidfzm/glyph/issues/115).

- **Live (default):** https://glyph-md.github.io
- **Custom domain (pending DNS):** https://glyph.md — see [Custom domain](#custom-domain)

## Internationalization

The site ships in five languages via Astro's built-in i18n routing:

| Locale | Language | URL | Direction |
|--------|----------|-----|-----------|
| `en` | English (default) | `/` | LTR |
| `fa` | فارسی (Persian) | `/fa/` | **RTL** |
| `es` | Español | `/es/` | LTR |
| `zh` | 中文 | `/zh/` | LTR |
| `de` | Deutsch | `/de/` | LTR |

All copy lives in [`src/i18n/ui.ts`](src/i18n/ui.ts), keyed by locale. `en` is the source of truth; add a key there first, then translate it across the other locales. To add a new language, extend `languages` in `ui.ts`, add its strings, and (if RTL) add it to `rtlLangs`.

## Development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in ./dist
npm run preview    # serve the build locally
```

## Structure

```
src/
  i18n/        ui.ts (strings) + utils.ts (translator, dir, paths)
  layouts/     Base.astro (html shell, <head>, dir/lang)
  components/  Header, Hero, Features, Download, Footer, LangPicker, Logo, Landing
  pages/       index.astro (en) + [lang]/index.astro (fa/es/zh/de)
public/        assets/ (hero, demo), favicon, robots.txt, CNAME
```

## Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages. The Pages source must be set to **GitHub Actions** in the repo settings (Settings → Pages → Source).

## Custom domain

`public/CNAME` is set to `glyph.md`. Until DNS for that domain points at GitHub Pages, the site stays reachable at `glyph-md.github.io`. To activate the custom domain, add these DNS records at the `glyph.md` registrar:

```
A     @   185.199.108.153
A     @   185.199.109.153
A     @   185.199.110.153
A     @   185.199.111.153
CNAME www glyph-md.github.io.
```

If you are not using `glyph.md` yet, delete `public/CNAME` to keep the site on `glyph-md.github.io` without a redirect.

## Assets

`hero.png` and `demo.gif` are copied from the main Glyph repo (`docs/assets/`). Refresh them there and re-copy when the app UI changes.
