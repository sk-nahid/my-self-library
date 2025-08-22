/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
      webpack: (config) => config, // force webpack (optional)
  images: {
    domains: ["covers.openlibrary.org", 'i.ibb.co.com'], // add all external domains here
  },
};

export default nextConfig;
