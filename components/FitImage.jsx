import Image from "@/components/BaseImage";

/**
 * Fills its frame edge to edge (object-fit: cover), so the frame never
 * shows empty bars. Use `position` (any CSS object-position) to keep the
 * important part of a photo in view when the frame crops it. Factory
 * photos default to their top edge, where the AF7 logo sits.
 * Accepts the usual next/image props; `fill`, `width` and `height` are
 * ignored because the image always fills its positioned parent.
 */
export default function FitImage({
  src,
  alt,
  sizes = "100vw",
  preload,
  className = "",
  position,
  style,
  fill,
  width,
  height,
  ...rest
}) {
  return (
    <span className={`fit-image ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        className="fit-image-main"
        style={{ objectPosition: position ?? defaultPosition(src), ...style }}
        {...rest}
      />
    </span>
  );
}

function defaultPosition(src) {
  return typeof src === "string" && src.includes("/images/factory/") ? "center top" : "center";
}
