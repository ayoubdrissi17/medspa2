import Image from "next/image";
import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "IV Wellness & Infusions | Irvine Thread Aesthetics",
  description:
    "IV Wellness & Infusions at Irvine Thread Aesthetics — NAD+ Therapy, Peptide Therapy, GLP-1 Wellness Programs, and customized Vitamin IV Infusions for hydration, energy, and overall wellness.",
};

export default function IVWellnessPage() {
  return (
    <>
      <section className="grid md:grid-cols-2 min-h-[70vh]">
        <div className="bg-charcoal flex items-center px-8 md:px-16 py-16">
          <div className="max-w-lg">
            <FadeIn>
              <p className="text-rose-gold-light tracking-[0.3em] uppercase text-sm mb-2">Wellness</p>
              <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">IV Wellness & Infusions</h1>
              <p className="text-white/70 text-lg leading-relaxed">
                Treatments delivered through an intravenous (IV) drip directly into the bloodstream for faster absorption and hydration.
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="relative aspect-square">
          <Image
            src="/assets/stocks/ivhydration2.jpeg"
            alt="IV Wellness & Infusions"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-charcoal/70 leading-relaxed text-lg text-center">
              IV Wellness & Infusions are treatments delivered through an intravenous (IV) drip directly into the bloodstream for faster absorption and hydration.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6 bg-blush/20">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle subtitle="Services" title="Services Commonly Offered" />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <FadeIn>
              <div className="border border-blush bg-white p-8 h-full">
                <h3 className="font-serif text-2xl mb-4 text-charcoal">NAD+ Therapy</h3>
                <p className="text-charcoal/60 leading-relaxed">
                  Supports energy, mental clarity, recovery, and overall wellness.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <div className="border border-blush bg-white p-8 h-full">
                <h3 className="font-serif text-2xl mb-4 text-charcoal">Peptide Therapy</h3>
                <p className="text-charcoal/60 leading-relaxed mb-4">
                  Many of these peptides are used in wellness and longevity settings.
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {["Ipamorelin", "CJC-1295", "Sermorelin", "Tesamorelin", "Thymosin Alpha-1", "Selank", "BPC-157", "TB-500"].map((p) => (
                    <p key={p} className="text-sm text-charcoal/50 flex items-center gap-2">
                      <span className="text-rose-gold">✦</span> {p}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="border border-blush bg-white p-8 h-full">
                <h3 className="font-serif text-2xl mb-4 text-charcoal">GLP-1 Wellness Programs</h3>
                <p className="text-charcoal/60 leading-relaxed">
                  Weight management and appetite control support programs supervised by medical professionals.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="border border-blush bg-white p-8 h-full">
                <h3 className="font-serif text-2xl mb-4 text-charcoal">Vitamin IV Infusions</h3>
                <p className="text-charcoal/60 leading-relaxed mb-4">
                  Customized blends of vitamins, minerals, antioxidants, and hydration fluids.
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {["Vitamin C", "B Complex", "Magnesium", "Zinc", "Electrolytes", "Hydration fluids"].map((v) => (
                    <p key={v} className="text-sm text-charcoal/50 flex items-center gap-2">
                      <span className="text-rose-gold">✦</span> {v}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionTitle subtitle="Benefits" title="Potential Benefits" />
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-4 mt-12">
            {[
              "Hydration support",
              "Increased energy levels",
              "Immune system support",
              "Recovery and wellness support",
              "Weight management assistance",
              "Performance and vitality support",
              "Overall wellness optimization",
            ].map((b, i) => (
              <FadeIn key={b} delay={i * 0.05}>
                <div className="flex items-center gap-3 border border-blush bg-blush/20 p-4">
                  <span className="text-rose-gold">✦</span>
                  <span className="text-charcoal/70">{b}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
