import bridal1 from "@/assets/gallery-bridal-1.jpg";
import bridal2 from "@/assets/gallery-bridal-2.jpg";
import bridal3 from "@/assets/gallery-bridal-3.jpg";
import event1 from "@/assets/gallery-event-1.jpg";
import event2 from "@/assets/gallery-event-2.jpg";
import event3 from "@/assets/gallery-event-3.jpg";
import editorial1 from "@/assets/gallery-editorial-1.jpg";
import editorial2 from "@/assets/gallery-editorial-2.jpg";
import editorial3 from "@/assets/gallery-editorial-3.jpg";

export type GalleryCategory = "Bridal" | "Special Events" | "Editorial";

export interface GalleryItem {
  src: string;
  alt: string;
  category: GalleryCategory;
}

/** Full portfolio gallery — 9 looks, three categories. */
export const galleryItems: GalleryItem[] = [
  { src: bridal1, alt: "Soft romantic bridal glam with rose tones and a delicate veil", category: "Bridal" },
  { src: bridal2, alt: "Luminous bridal glam with glowing skin and a pearl drop earring", category: "Bridal" },
  { src: bridal3, alt: "Polished bridal look with champagne tones against white florals", category: "Bridal" },
  { src: event1, alt: "Bold evening glam with smoky eyes and deep berry lips", category: "Special Events" },
  { src: event2, alt: "Festive celebratory glam with copper and gold eyeshadow", category: "Special Events" },
  { src: event3, alt: "Radiant evening glam with soft rose lip and pearl earrings", category: "Special Events" },
  { src: editorial1, alt: "Editorial look with graphic gold liner and sculpted blush", category: "Editorial" },
  { src: editorial2, alt: "High-fashion editorial look with oxblood lips on terracotta", category: "Editorial" },
  { src: editorial3, alt: "Creative editorial look with gold leaf accents and glossy lips", category: "Editorial" },
];

export const categories: GalleryCategory[] = ["Bridal", "Special Events", "Editorial"];

const item = (index: number): GalleryItem => {
  const found = galleryItems[index];
  if (!found) throw new Error(`Gallery index ${index} out of range`);
  return found;
};

/** Six looks featured on the home page. */
export const homeGallery: GalleryItem[] = [
  item(0),
  item(3),
  item(6),
  item(1),
  item(4),
  item(8),
];
