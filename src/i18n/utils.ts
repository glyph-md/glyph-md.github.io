import { defaultLang, languages, rtlLangs, ui, type Lang } from "./ui";

export function isLang(value: string | undefined): value is Lang {
  return value !== undefined && value in languages;
}

/** Returns a translator bound to the given locale, falling back to English. */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)["en"]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function dirFor(lang: Lang): "ltr" | "rtl" {
  return rtlLangs.includes(lang) ? "rtl" : "ltr";
}

/** Builds an href for a path within a given locale (default locale is unprefixed). */
export function localizedPath(lang: Lang, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === "/" ? "/" : clean}`;
}

export { defaultLang, languages, type Lang };
