/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  i18n: {
    // providing the locales supported by your application
   locales: ["en-US", "ar-AR"],
   //  default locale used when the non-locale paths are visited
   defaultLocale: "en-US",
 },
  images: {
    domains: [
      'images.unsplash.com'
    ]
  }
}
