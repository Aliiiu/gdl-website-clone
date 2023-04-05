/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        // You can add these as well
        // port: "",
        // pathname: "dbkiemdqb/image/upload/v1670425499",
      },
    ],
  },
};
// const nextConfig = {
//   images: {
//     loader: "cloudinary",
//     path: "https://res.cloudinary.com/your-unique-account-id/",
//   },
// };

module.exports = nextConfig;
const withVideos = require("next-videos");
// const withImages = require("next-images");

// module.exports = nextConfig;
module.exports = withVideos();
