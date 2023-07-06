// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: true,
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
