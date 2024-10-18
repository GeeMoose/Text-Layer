import { Gallery } from "next-gallery";

const images = [
  { src: "/images/TextLayer-3.png", aspect_ratio: 16 / 9 },
  { src: "/images/TextLayer-1.png", aspect_ratio: 1 / 1 },
  { src: "/images/TextLayer-2.png", aspect_ratio: 4 / 3 },
  { src: "/images/TextLayer-4.png", aspect_ratio: 16 / 9 },
  { src: "/images/TextLayer-0.png", aspect_ratio: 16 / 9 },
  { src: "/images/TextLayer-5.png", aspect_ratio: 1 / 1 },
];
const widths = [1000, 1600, 2000];
const ratios = [2.2, 4, 6, 8];
const lastRowBehavior = "fill";
const gap = "10px";

const MyGallery = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Gallery {...{ images, widths, ratios, gap, lastRowBehavior }} />
    </div>
  );
}

export default MyGallery;