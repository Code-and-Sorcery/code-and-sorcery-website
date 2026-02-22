/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/code-and-sorcery-website",
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
};

export default nextConfig;
