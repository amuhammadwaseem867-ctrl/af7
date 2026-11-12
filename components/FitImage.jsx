import Image from "@/components/BaseImage";
import BrandMark, { brandMarkFor } from "@/components/BrandMark";

/**
 * Fills its frame edge to edge (object-fit: cover), so the frame never
 * shows empty bars. Use `position` (any CSS object-position) to keep the
 * important part of a photo in view when the frame crops it. Factory
 * photos default to their top edge.
 * Clean factory photos get the AF7 logo drawn on top (see BrandMark); pass
 * `mark={false}` to leave it off.
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
  mark,
  style,
  fill,
  width,
  height,
  ...rest
}) {
  const brand = mark === false ? null : brandMarkFor(src);
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
      {brand && <BrandMark {...brand} />}
    </span>
  );
}

function defaultPosition(src) {
  const brand = brandMarkFor(src);
  // corner-logo factory photos keep their top edge; the centred-logo photo is
  // cropped so the logo sits at its exact centre, so it stays centred
  return brand && brand.placement === "corner" ? "center top" : "center";
}
