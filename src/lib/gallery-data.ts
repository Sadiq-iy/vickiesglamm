import bridalGlam from "@/assets/work-bridal-glam.jpg.asset.json";
import softGlam from "@/assets/work-soft-glam.jpg.asset.json";
import traditionalGlam from "@/assets/work-traditional-glam.jpg.asset.json";

export type GalleryCategory = "Bridal" | "Special Events";

export interface GalleryItem {
  src: string;
  alt: string;
  category: GalleryCategory;
}

/** Full portfolio gallery — real client work. */
export const galleryItems: GalleryItem[] = [
  {
    src: bridalGlam.url,
    alt: "Elegant bridal glam with a soft red lip and gold floral earrings",
    category: "Bridal",
  },
  {
    src: traditionalGlam.url,
    alt: "Traditional bridal glam with copper shimmer eyes and coral bead jewellery",
    category: "Bridal",
  },
  {
    src: softGlam.url,
    alt: "Soft glam with warm coral eyeshadow, flutter lashes and glossy lips",
    category: "Special Events",
  },
];

export const categories: GalleryCategory[] = ["Bridal", "Special Events"];

/** Looks featured on the home page. */
export const homeGallery: GalleryItem[] = galleryItems;
