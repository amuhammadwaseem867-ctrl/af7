import { withBasePath } from "@/components/BaseImage";

/*
 * Factory photos used to carry the AF7 logo burned into a different corner
 * of each picture, so the logo landed in a different place (or got cropped)
 * from frame to frame. The photos in /images/factory-v2/ are clean; the logo
 * is drawn on top instead, always in the same spot of the visible frame.
 */
const FACTORY = "/images/factory-v2/";

// photos whose top edge is bright: the navy logo reads, the white one would not
const DARK_MARK = new Set([
  "assembly-row",
  "press-operation",
  "production-machinery",
  "slider-feeder",
]);

// photos whose logo is the subject, in the middle of the picture: the photo
// keeps its own logo and is cropped so that logo sits at the exact centre,
// so a centred crop (object-position: center) keeps it centred in any frame
const CENTERED_LOGO = new Set(["factory-floor"]);

export function brandMarkFor(src) {
  if (typeof src !== "string" || !src.includes(FACTORY)) return null;
  const name = src.slice(src.lastIndexOf("/") + 1).replace(/\.\w+$/, "");
  return {
    placement: CENTERED_LOGO.has(name) ? "center" : "corner",
    tone: DARK_MARK.has(name) ? "dark" : "light",
  };
}

export default function BrandMark({ placement = "corner", tone = "light" }) {
  if (placement !== "corner") return null; // the centred logo is in the photo itself
  const file = tone === "dark" ? "/logos/af7forwhitebg.svg" : "/logos/af7logofornavybg.svg";
  return (
    <span className={`brand-mark brand-mark-${placement}`} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={withBasePath(file)} alt="" width={390} height={234} draggable={false} />
    </span>
  );
}
