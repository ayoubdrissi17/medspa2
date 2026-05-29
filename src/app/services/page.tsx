import Image from "next/image";
import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";
import { CLINIC_SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "PDO threads, dermal fillers, Botox, skin rejuvenation, facial contouring, lip enhancement & more at OC Aesthetics Institute, Tustin CA.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-24 px-6 bg-blush/30">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <SectionTitle subtitle="Treatments" title="Our Services" />
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Every treatment is performed with precision, artistry, and a commitment to natural, elegant results.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {CLINIC_SERVICES.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.05}>
              <article
                id={service.id}
                className="scroll-mt-28 border border-blush bg-white overflow-hidden flex flex-col sm:flex-row"
              >
                <div className="relative sm:w-2/5 aspect-[4/3] sm:aspect-auto min-h-[220px]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 320px"
                  />
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl mb-2">{service.name}</h3>
                  <p className="text-charcoal/60 text-sm mb-4">{service.description}</p>
                  <p className="text-rose-gold text-sm font-medium mb-4">{service.price}</p>
                  <ul className="space-y-1">
                    {service.benefits.map((b) => (
                      <li key={b} className="text-xs text-charcoal/50 flex items-center gap-2">
                        <span className="text-rose-gold">✦</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
