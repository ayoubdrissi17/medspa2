import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Laser Treatments",
  description:
    "Advanced laser & energy-based devices at Irvine Thread Aesthetics — diode laser, CO₂, Er:YAG, Nd:YAG, RF microneedling, Ultherapy, IPL & more.",
};

type TechItem = {
  name: string;
  wavelength?: string;
  indications?: string[];
  benefits: string[];
};

type TechCategory = {
  title: string;
  description: string;
  items: TechItem[];
};

const TECHNOLOGIES: TechCategory[] = [
  {
    title: "Hair Removal",
    description: "Advanced diode laser systems for long-term hair reduction across all skin types.",
    items: [
      {
        name: "Diode Laser (800–810 nm)",
        benefits: [
          "Suitable for most skin types",
          "Fast treatment sessions",
          "Long-lasting hair reduction",
          "Comfortable treatments with cooling systems",
        ],
      },
      {
        name: "Diode Laser (940 nm)",
        benefits: [
          "Effective for coarse hair",
          "Deep follicle targeting",
          "Improved treatment precision",
        ],
      },
      {
        name: "Diode Laser (1060 nm)",
        benefits: [
          "Suitable for deeper hair follicles",
          "Enhanced safety for darker skin tones",
          "Effective long-term hair reduction",
        ],
      },
    ],
  },
  {
    title: "Pigmented Lesions, Melasma & Tattoo Removal",
    description: "Q-Switched Nd:YAG laser technology for precise pigment and tattoo clearance.",
    items: [
      {
        name: "Q-Switched Nd:YAG Laser (1064 nm)",
        indications: ["Melasma", "Post-inflammatory hyperpigmentation", "Nevus of Ota", "Black and blue tattoos"],
        benefits: ["Selective pigment targeting", "Minimal downtime", "Suitable for various skin types"],
      },
      {
        name: "Q-Switched Nd:YAG Laser (532 nm)",
        indications: ["Freckles", "Sunspots", "Lentigines", "Red, orange, and some yellow tattoo pigments"],
        benefits: ["High precision", "Effective treatment of superficial lesions", "Improved skin tone uniformity"],
      },
    ],
  },
  {
    title: "Skin Resurfacing, Wrinkles & Scar Treatment",
    description: "Gold-standard laser resurfacing technologies for dramatic skin texture improvement.",
    items: [
      {
        name: "CO₂ Laser (10,600 nm)",
        indications: ["Deep wrinkles", "Acne scars", "Surgical scars", "Photoaging"],
        benefits: ["Significant collagen stimulation", "Skin texture improvement", "Long-lasting rejuvenation results"],
      },
      {
        name: "Er:YAG Laser (2940 nm)",
        benefits: ["Faster recovery", "Reduced downtime", "Effective treatment of superficial wrinkles"],
      },
      {
        name: "Fractional CO₂ Laser (10,600 nm)",
        benefits: ["Improved healing", "Reduced recovery time", "Treatment of scars, wrinkles, and texture irregularities"],
      },
      {
        name: "Fractional Er:YAG Laser (2940 nm)",
        benefits: ["Smoother skin texture", "Reduced fine lines", "Enhanced collagen production"],
      },
    ],
  },
  {
    title: "Vascular Lesions, Rosacea & Telangiectasias",
    description: "Precision laser treatment for visible blood vessels and diffuse redness.",
    items: [
      {
        name: "Nd:YAG Laser (1064 nm)",
        indications: ["Facial veins", "Spider veins", "Rosacea", "Telangiectasias"],
        benefits: ["Precise vessel targeting", "Minimal damage to surrounding tissue", "Effective vascular clearance"],
      },
    ],
  },
  {
    title: "Skin Tightening & Collagen Remodeling",
    description: "Non-invasive and minimally invasive technologies for firming and lifting.",
    items: [
      {
        name: "Nd:YAG Laser (1064 nm)",
        benefits: ["Firmer skin appearance", "Improved elasticity", "Minimal downtime"],
      },
      {
        name: "Radiofrequency Microneedling",
        indications: ["Skin laxity", "Acne scars", "Enlarged pores", "Fine lines"],
        benefits: ["Deep tissue remodeling", "Improved skin texture", "Minimal recovery period"],
      },
      {
        name: "Ultherapy®",
        indications: ["Face lifting", "Neck tightening", "Jawline definition", "Brow lifting"],
        benefits: ["Non-surgical lifting", "No downtime", "Long-lasting collagen stimulation"],
      },
    ],
  },
  {
    title: "Light-Based Treatments",
    description: "Broad-spectrum IPL technology for comprehensive skin rejuvenation.",
    items: [
      {
        name: "IPL (Intense Pulsed Light) – 500–1200 nm",
        indications: ["Sun damage", "Redness", "Pigmentation", "Photoaging"],
        benefits: ["Improved skin tone", "Reduced pigmentation", "Brighter complexion", "Minimal downtime"],
      },
    ],
  },
];

export default function TechnologiesPage() {
  return (
    <>
      <section className="py-24 px-6 bg-blush/30">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <SectionTitle subtitle="Advanced Devices" title="Laser & Aesthetic Technologies" />
            <p className="text-charcoal/60 max-w-3xl mx-auto">
              Our clinic uses state-of-the-art laser and energy-based devices designed to address a wide range of aesthetic and dermatological concerns while prioritizing safety, comfort, and effectiveness.
            </p>
          </FadeIn>
        </div>
      </section>

      {TECHNOLOGIES.map((category, ci) => (
        <section key={category.title} className={`py-20 px-6 ${ci % 2 === 0 ? "bg-white" : "bg-blush/20"}`}>
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <SectionTitle subtitle={category.title} title={category.title} />
              <p className="text-charcoal/60 max-w-2xl mb-12">{category.description}</p>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, ii) => (
                <FadeIn key={item.name} delay={ii * 0.05}>
                  <div className="border border-blush bg-white p-8 h-full flex flex-col">
                    <h3 className="font-serif text-xl mb-4 text-charcoal">{item.name}</h3>
                    {item.indications && (
                      <div className="mb-4">
                        <p className="text-xs tracking-widest uppercase text-rose-gold mb-2">Indications</p>
                        <ul className="space-y-1">
                          {item.indications.map((ind) => (
                            <li key={ind} className="text-sm text-charcoal/60 flex items-start gap-2">
                              <span className="text-rose-gold mt-0.5">✦</span> {ind}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="mt-auto">
                      <p className="text-xs tracking-widest uppercase text-rose-gold mb-2">Benefits</p>
                      <ul className="space-y-1">
                        {item.benefits.map((b) => (
                          <li key={b} className="text-sm text-charcoal/60 flex items-start gap-2">
                            <span className="text-rose-gold mt-0.5">✦</span> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 px-6 bg-charcoal text-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <SectionTitle subtitle="Your Safety" title="Safety & Personalized Care" light />
            <p className="text-white/70 leading-relaxed mb-4">
              All treatments are performed after a comprehensive consultation to determine the most appropriate technology based on:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
              {["Skin type", "Medical history", "Treatment goals", "Safety considerations"].map((item) => (
                <div key={item} className="flex items-center gap-3 border border-white/20 p-4">
                  <span className="text-rose-gold">✦</span>
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-white/50 text-sm mt-8">
              Individual results may vary, and multiple sessions may be recommended for optimal outcomes.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
