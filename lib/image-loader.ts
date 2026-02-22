const basePath =
  process.env.NODE_ENV === "production" ? "/code-and-sorcery-website" : "";

export default function imageLoader({ src }: { src: string }) {
  if (src.startsWith("/")) {
    return `${basePath}${src}`;
  }
  return src;
}
