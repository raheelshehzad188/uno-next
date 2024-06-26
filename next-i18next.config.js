module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    // locales: ["en", "ar", "fr", "de", "ru", "se"],
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
