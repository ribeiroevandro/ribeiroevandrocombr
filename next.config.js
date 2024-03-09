// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: false,
//   output: "export",
//   compress: false,
//   images: {
//     unoptimized: true
//   }
// };
//
// module.exports = nextConfig;
// @ts-check
const { PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = (phase) => {
  let nextConfig;
  if (phase && phase === PHASE_PRODUCTION_BUILD) {
    return {}
  }

  return nextConfig = {
    reactStrictMode: true,
    swcMinify: false,
    output: "export",
    compress: false,
    images: {
      unoptimized: true
    }
  }
}
