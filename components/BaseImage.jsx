import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * next/image does not add `basePath` to `src` on its own, so local paths
 * like "/images/x.webp" are prefixed here. Use this instead of next/image.
 */
export function withBasePath(src) {
  if (typeof src !== "string" || !src.startsWith("/") || src.startsWith("//")) return src;
  if (!basePath || src === basePath || src.startsWith(`${basePath}/`)) return src;
  return `${basePath}${src}`;
}

export default function BaseImage({ src, ...props }) {
  return <Image src={withBasePath(src)} {...props} />;
}
