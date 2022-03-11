/** @type {import('next').NextConfig} */

/* ORIGINAL DOC BELOW
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
*/
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};