/**
 * @type {import('next').NextConfig}
 */

const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  reactStrictMode: false,
  i18n,
  env: {
    API_URL: "https://uno.yalladothis.com/",
    // API_URL: "https://api.unoestate.ae/",
    // API_URL: "http://localhost:8080/",
  },
});
