/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath:
    process.env.NODE_ENV === "production" ? "/code-and-sorcery-website" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
