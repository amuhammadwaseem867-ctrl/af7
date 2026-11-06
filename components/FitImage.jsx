import Image from "next/image";

/**
 * Shows the whole photo, never cropped: the image is contained in its
 * frame, and a soft blurred copy of the same photo fills any space left
 * around it so the frame never shows empty bars.
 * Accepts the usual next/image props; `fill`, `width` and `height` are
 * ignored because the image always fills its positioned parent.
 */
export default function FitImage({
  src,
  alt,
  sizes = "100vw",
  preload,
  className = "",
  fill,
  width,
  height,
  ...rest
}) {
  return (
    <span className={`fit-image ${className}`}>
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        fill
        sizes="20vw"
        className="fit-image-backdrop"
      />
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        className="fit-image-main"
        {...rest}
      />
    </span>
  );
}
