/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    /* The stylesheet is 10 kB; fetched as a file it costs a render-blocking
       round trip on every page, inlined it costs nothing. */
    inlineCss: true,
  },
};

export default nextConfig;
