export default function imageLoader({ src }: { src: string }) {
  if (src.startsWith("/")) {
    return `/code-and-sorcery-website${src}`;
  }
  return src;
}
