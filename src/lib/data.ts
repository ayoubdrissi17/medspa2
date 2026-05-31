export type Service = {
  id: string;
  name: string;
  description: string;
  price: string;
  benefits: string[];
  image: string;
};

export const CLINIC_SERVICES: Service[] = [
  {
    id: "pdo-threads",
    name: "PDO Threads",
    description: "Non-surgical lifting to enhance facial contours with natural-looking results.",
    price: "Consultation required",
    benefits: ["Natural lift", "Defined jawline", "Minimal downtime"],
    image: "/assets/stocks/svc-pdo-threads-01.png",
  },
  {
    id: "dermal-fillers",
    name: "Dermal Fillers",
    description: "Restore volume, define features, and create balanced facial harmony.",
    price: "Consultation required",
    benefits: ["Restored volume", "Balanced features", "Elegant results"],
    image: "/assets/stocks/svc-anti-aging-treatments-01.png",
  },
  {
    id: "botox",
    name: "Botox / Wrinkle Relaxer",
    description: "Smooth fine lines and refresh the face while keeping natural expressions.",
    price: "Consultation required",
    benefits: ["Smooth fine lines", "Natural expression", "Quick treatment"],
    image: "/assets/stocks/svc-botox-wrinkle-relaxer-01.png",
  },
  {
    id: "skin-rejuvenation",
    name: "Skin Rejuvenation",
    description: "Improve skin glow, texture, and overall radiance.",
    price: "Consultation required",
    benefits: ["Brighter glow", "Smoother texture", "Radiant skin"],
    image: "/assets/stocks/svc-skin-rejuvenation-01.png",
  },
  {
    id: "facial-contouring",
    name: "Facial Contouring",
    description: "Enhance facial definition for a more sculpted and refined look.",
    price: "Consultation required",
    benefits: ["Sculpted jawline", "Refined contours", "Harmonious profile"],
    image: "/assets/stocks/svc-facial-contouring-01.png",
  },
  {
    id: "under-eye",
    name: "Under-Eye Treatment",
    description: "Refresh tired eyes and soften the under-eye area.",
    price: "Consultation required",
    benefits: ["Brighter eyes", "Reduced shadows", "Refreshed appearance"],
    image: "/assets/stocks/svc-under-eye-treatment-01.png",
  },
  {
    id: "lip-enhancement",
    name: "Lip Enhancement",
    description: "Subtle lip volume and definition for a soft, elegant result.",
    price: "Consultation required",
    benefits: ["Soft volume", "Defined shape", "Natural elegance"],
    image: "/assets/stocks/svc-lip-enhancement-01.png",
  },
  {
    id: "non-surgical-facelift",
    name: "Non-Surgical Face Lift",
    description: "Lift and refresh the appearance without surgery.",
    price: "Consultation required",
    benefits: ["Visible lift", "No surgery", "Refreshed look"],
    image: "/assets/stocks/svc-non-surgical-face-lift-01.png",
  },
  {
    id: "anti-aging",
    name: "Anti-Aging Treatments",
    description: "Personalized treatments to maintain youthful, natural beauty.",
    price: "Consultation required",
    benefits: ["Youthful skin", "Personalized plan", "Long-term care"],
    image: "/assets/stocks/svc-anti-aging-treatments-01.png",
  },
  {
    id: "consultation",
    name: "Consultation",
    description: "Personalized aesthetic plan designed for your facial structure and goals.",
    price: "Complimentary inquiry",
    benefits: ["Custom treatment plan", "Expert guidance", "Clear expectations"],
    image: "/assets/stocks/svc-consultation-01.png",
  },
];

export const DR_ASSIF_IMAGE = "/assets/stocks/doctorassif2.jpeg";

export const FEATURED_SERVICES = CLINIC_SERVICES.filter((s) =>
  ["pdo-threads", "botox", "lip-enhancement"].includes(s.id)
).map((s) => ({
  title: s.name,
  description: s.description,
  image: s.image,
  href: `/services#${s.id}`,
}));

export type BeforeAfterItem = {
  id: number;
  category: string;
  label: string;
  before: string;
  after?: string;
};

export const BEFORE_AFTER: BeforeAfterItem[] = [
  {
    id: 1,
    category: "lifting",
    label: "Facelift Transformation",
    before: "/assets/stocks/Before - After1.jpeg",
  },
  {
    id: 2,
    category: "lifting",
    label: "Jawline Definition",
    before: "/assets/stocks/Before - After2.jpeg",
  },
  {
    id: 3,
    category: "lifting",
    label: "Cheek Enhancement",
    before: "/assets/stocks/Before - After3.jpeg",
  },
  {
    id: 4,
    category: "injectables",
    label: "Lip Enhancement Results",
    before: "/assets/stocks/Before - After4.jpeg",
  },
  {
    id: 5,
    category: "injectables",
    label: "Facial Harmony Treatment",
    before: "/assets/stocks/Before - After5(2).jpeg",
  },
  {
    id: 6,
    category: "injectables",
    label: "Under-Eye Correction",
    before: "/assets/stocks/Before - After6.jpeg",
  },
  {
    id: 7,
    category: "skin",
    label: "Skin Rejuvenation Results",
    before: "/assets/stocks/Before - After7.jpeg",
  },
  {
    id: 8,
    category: "skin",
    label: "Skin Texture Improvement",
    before: "/assets/stocks/Before - After8.jpeg",
  },
];

export const GALLERY_IMAGES = [
  // Lifting treatment photos
  {
    id: 1,
    category: "lifting" as const,
    src: "/assets/stocks/Lifting1.jpeg",
    alt: "Lifting Treatment",
  },
  {
    id: 2,
    category: "lifting" as const,
    src: "/assets/stocks/Lifting2.jpeg",
    alt: "Facial Lifting Procedure",
  },
  {
    id: 3,
    category: "lifting" as const,
    src: "/assets/stocks/Lifting3.jpeg",
    alt: "Lift & Contour Results",
  },
  {
    id: 4,
    category: "lifting" as const,
    src: "/assets/stocks/Lifting4.jpeg",
    alt: "Face Lift Consultation",
  },
  // Injectable treatment photos
  {
    id: 5,
    category: "injectables" as const,
    src: "/assets/stocks/Injectebales1.jpeg",
    alt: "Injectable Treatment",
  },
  {
    id: 6,
    category: "injectables" as const,
    src: "/assets/stocks/Injectebales2.jpeg",
    alt: "Dermal Filler Session",
  },
  {
    id: 7,
    category: "injectables" as const,
    src: "/assets/stocks/Injectebales3.jpeg",
    alt: "Lip Enhancement Procedure",
  },
  {
    id: 8,
    category: "injectables" as const,
    src: "/assets/stocks/Injectebales4.jpeg",
    alt: "Botox Treatment",
  },
  // Skin treatment photos
  {
    id: 9,
    category: "skin" as const,
    src: "/assets/stocks/Skin1.jpeg",
    alt: "Skin Rejuvenation Treatment",
  },
  {
    id: 10,
    category: "skin" as const,
    src: "/assets/stocks/Skin2.jpeg",
    alt: "Skin Care Procedure",
  },
  {
    id: 11,
    category: "skin" as const,
    src: "/assets/stocks/Skin3.jpeg",
    alt: "Facial Skin Treatment",
  },
  {
    id: 12,
    category: "skin" as const,
    src: "/assets/stocks/Skin4.jpeg",
    alt: "Skin Therapy Session",
  },
  {
    id: 13,
    category: "skin" as const,
    src: "/assets/stocks/Skin5.jpeg",
    alt: "Advanced Skin Care",
  },
  // Clinic environment photos
  {
    id: 14,
    category: "clinic" as const,
    src: "/assets/stocks/svc-consultation-01.png",
    alt: "Consultation Room",
  },
  {
    id: 15,
    category: "clinic" as const,
    src: "/assets/stocks/clinic1.jpeg",
    alt: "Clinic Environment",
  },
  {
    id: 16,
    category: "clinic" as const,
    src: "/assets/stocks/clinic2.jpeg",
    alt: "Clinic Interior View",
  },
  {
    id: 17,
    category: "clinic" as const,
    src: "/assets/stocks/Clinic.jpeg",
    alt: "Luxury Clinic Space",
  },
  {
    id: 18,
    category: "clinic" as const,
    src: "/assets/stocks/Clinic3.jpeg",
    alt: "Clinic Treatment Area",
  },
  {
    id: 19,
    category: "clinic" as const,
    src: "/assets/stocks/Clinic5.jpeg",
    alt: "Clinic Waiting Area",
  },
  {
    id: 20,
    category: "clinic" as const,
    src: "/assets/stocks/Clinic6.jpeg",
    alt: "Medical Suite",
  },
  {
    id: 21,
    category: "clinic" as const,
    src: "/assets/stocks/Clinic7.jpeg",
    alt: "Clinic Reception",
  },
  {
    id: 22,
    category: "clinic" as const,
    src: "/assets/stocks/Clinic8.jpeg",
    alt: "Treatment Room",
  },
  {
    id: 23,
    category: "clinic" as const,
    src: "/assets/stocks/Clinic9.jpeg",
    alt: "Clinic Detail",
  },
  {
    id: 24,
    category: "clinic" as const,
    src: "/assets/stocks/Clinic10.jpeg",
    alt: "Clinic Ambiance",
  },
];

export const GALLERY_FILTERS = ["all", "lifting", "injectables", "skin", "clinic", "before-after"] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Dr Assif transformed my skin with PDO threads. The clinic feels like a five-star spa and the results are incredible.",
    date: "2 weeks ago",
  },
  {
    name: "Jennifer L.",
    rating: 5,
    text: "Professional, caring, and truly skilled. My Botox looks so natural — exactly what I wanted.",
    date: "1 month ago",
  },
  {
    name: "Michelle R.",
    rating: 5,
    text: "The skin rejuvenation treatment gave me the glow I was looking for. Absolutely stunning environment.",
    date: "3 weeks ago",
  },
  {
    name: "Amanda K.",
    rating: 5,
    text: "I've been to many med spas in Orange County. Irvine Thread Aesthetics is in a league of its own.",
    date: "2 months ago",
  },
];

export const REVIEWS = [
  {
    name: "Elena V.",
    rating: 5,
    text: "Exceptional care from start to finish. Dr Assif listens carefully and delivers beautiful, subtle results.",
    date: "March 2026",
    verified: true,
  },
  {
    name: "Rachel T.",
    rating: 5,
    text: "The lip enhancement is perfection. No one can tell I had anything done — just that I look refreshed.",
    date: "February 2026",
    verified: true,
  },
  {
    name: "Diana H.",
    rating: 5,
    text: "My under-eye treatment made me look years younger. Highly recommend this clinic.",
    date: "January 2026",
    verified: true,
  },
  {
    name: "Christina P.",
    rating: 5,
    text: "Gorgeous facility, knowledgeable team, and outstanding facial contouring results. Will return!",
    date: "December 2025",
    verified: true,
  },
  {
    name: "Nicole B.",
    rating: 5,
    text: "Dr Assif is an artist. My dermal filler results look elegant and completely natural.",
    date: "November 2025",
    verified: true,
  },
  {
    name: "Laura S.",
    rating: 5,
    text: "The non-surgical face lift exceeded my expectations. I feel confident and refreshed.",
    date: "October 2025",
    verified: true,
  },
];

export const INSTAGRAM_POSTS = CLINIC_SERVICES.slice(0, 6).map((s) => s.image);
