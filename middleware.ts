import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["ar", "en"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "ar",

  domains: [
    {
      domain: "localhost:3000",
      defaultLocale: "ar",
      locales: ["ar", "en"],
    },
    {
      domain: "localhost:3000",
      defaultLocale: "ar",
    },
  ],
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
