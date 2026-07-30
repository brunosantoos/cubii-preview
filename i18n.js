export const LOCALES = ["en", "pt", "es", "fr"];
export const LOCALE_LABELS = { en: "EN", pt: "PT", es: "ES", fr: "FR" };
export const LOCALE_NAMES = { en: "English", pt: "Português", es: "Español", fr: "Français" };

export function getLocale() {
  try {
    const l = window.localStorage.getItem("cubii-locale");
    return LOCALES.includes(l) ? l : "en";
  } catch (e) {
    return "en";
  }
}

export function setLocale(locale) {
  if (!LOCALES.includes(locale)) return;
  try { window.localStorage.setItem("cubii-locale", locale); } catch (e) {}
  window.dispatchEvent(new CustomEvent("cubii-locale-change", { detail: locale }));
}

export function onLocaleChange(handler) {
  window.addEventListener("cubii-locale-change", handler);
  return () => window.removeEventListener("cubii-locale-change", handler);
}
