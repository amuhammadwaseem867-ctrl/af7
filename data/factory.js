// Photos from the AF7 factory in Lahore. Width and height are the files'
// real dimensions, so layouts can show each photo at its natural shape.
export const factoryPhotos = [
  { src: "/images/factory/assembly-line.webp", width: 2000, height: 1550, alt: "AF7 automated zipper assembly line", caption: "Automated assembly line" },
  { src: "/images/factory/tape-weaving.webp", width: 1333, height: 2000, alt: "Zipper tape weaving at AF7", caption: "Tape weaving" },
  { src: "/images/factory/factory-floor.webp", width: 1080, height: 1080, alt: "AF7 factory floor in Lahore", caption: "Factory floor, Lahore" },
  { src: "/images/factory/brass-sliders.webp", width: 1548, height: 2000, alt: "Brass sliders in a feeder bowl", caption: "Slider feeding" },
  { src: "/images/factory/assembly-machines.webp", width: 1080, height: 1080, alt: "Row of AF7 zipper assembly machines", caption: "Assembly machines" },
  { src: "/images/factory/tape-looms.webp", width: 1080, height: 1080, alt: "Tape looms with yarn at AF7", caption: "Tape looms" },
  { src: "/images/factory/forming-machine.webp", width: 1080, height: 1080, alt: "AF7 production machine", caption: "Production machinery" },
  { src: "/images/factory/chain-assembly.webp", width: 1333, height: 2000, alt: "Zipper chain running through an AF7 machine", caption: "Chain processing" },
  { src: "/images/factory/slider-feeder.webp", width: 1080, height: 1080, alt: "Slider feeder bowl at AF7", caption: "Slider feeder" },
  { src: "/images/factory/press-operation.webp", width: 1080, height: 1350, alt: "Operator working at a press at AF7", caption: "Press operation" },
  { src: "/images/factory/assembly-row.webp", width: 1080, height: 1080, alt: "AF7 assembly area", caption: "Assembly area" },
  { src: "/images/factory/chain-guide.webp", width: 1080, height: 1080, alt: "Zipper chain guide on an AF7 machine", caption: "Chain guide" },
  { src: "/images/factory/production-line.webp", width: 1080, height: 1195, alt: "AF7 production line", caption: "Production line" },
  { src: "/images/factory/chain-machine.webp", width: 1080, height: 1350, alt: "AF7 zipper chain machine", caption: "Chain machine" },
  { src: "/images/factory/production-machinery.webp", width: 1080, height: 1080, alt: "AF7 production machinery", caption: "Production machinery" },
];

export const getFactoryPhoto = (name) =>
  factoryPhotos.find((photo) => photo.src.endsWith(`/${name}.webp`));
