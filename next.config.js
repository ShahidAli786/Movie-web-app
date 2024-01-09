/** @type {import('next').NextConfig} */
// add host image.tmdb.org

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "youtube.com",
      },
    ],
  },
};

module.exports = nextConfig;
