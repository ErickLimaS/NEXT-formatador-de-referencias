/** @type {import('next').NextConfig} */

/* ORIGINAL DOC BELOW
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
*/
module.exports = {
  images: {
    domains: ['www.referenciaemabnt.com'],
  },
  i18n: {
    locales: ["pt-br"],
    defaultLocale: "pt-br",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};