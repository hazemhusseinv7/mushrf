import { defineRouting } from "next-intl/routing";

const LOCALES = ["en", "ar"] as const;
type Locale = (typeof LOCALES)[number];

const DEFAULT_LOCALE = (process.env.DEFAULT_LOCALE || "en") as Locale;

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  pathnames: {
    "/": "/",
  },
});
