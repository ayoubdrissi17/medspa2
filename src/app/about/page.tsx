import Image from "next/image";
import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";
import { DR_ASSIF_IMAGE, CLINIC_SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Dr Assif | OC Aesthetics Institute",
  description:
    "Meet Dr Assif at OC Aesthetics Institute — expert in luxury aesthetic medicine. PDO threads, fillers, Botox & more in Tustin, CA.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[50vh] flex items-end">
        <Image
          src="/assets/stocks/svc-consultation-01.png"
          alt="OC Aesthetics Institute"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <FadeIn>
            <p className="text-rose-gold-light tracking-[0.3em] uppercase text-sm mb-2">About</p>
            <h1 className="font-serif text-5xl md:text-6xl text-white">Dr Assif</h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative aspect-[4/5]">
              <Image
                src={DR_ASSIF_IMAGE}
                alt="Dr Assif"
                fill
                className="object-cover object-top"
                sizes="500px"
                priority
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <SectionTitle subtitle="The Physician" title="Dr Assif" />
            <p className="text-charcoal/70 leading-relaxed mb-6">
              Dr Assif is a distinguished aesthetic medicine physician dedicated to enhancing natural beauty through precision, artistry, and the highest standards of medical care. With expertise in PDO threads, injectables, facial contouring, and advanced skin rejuvenation, he has built a reputation for delivering subtle, elegant results that empower confidence.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              Every treatment is approached with a deep understanding of facial anatomy, individual goals, and the philosophy that true beauty lies in harmony — never excess. Patients trust Dr Assif for honest consultations, meticulous technique, and outcomes that look effortlessly refined.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-6 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <SectionTitle subtitle="Our Purpose" title="Mission & Philosophy" light />
            <p className="text-white/70 leading-relaxed text-lg mb-6">
              At OC Aesthetics Institute, we believe aesthetic medicine is an art form grounded in science. Our mission is to provide a sanctuary where patients receive world-class treatments in an environment of absolute luxury, privacy, and compassion.
            </p>
            <p className="text-white/70 leading-relaxed text-lg">
              We are committed to natural enhancement, patient education, and continuous innovation — ensuring every visit reflects the premium Beverly Hills standard our patients deserve, right here in Tustin, California.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle subtitle="What We Offer" title="Our Treatments" />
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CLINIC_SERVICES.map((s, i) => (
              <FadeIn key={s.id} delay={i * 0.05}>
                <div className="flex items-center gap-3 border border-blush p-4">
                  <span className="text-rose-gold">✦</span>
                  <span className="font-serif text-lg">{s.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-blush/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle subtitle="The Experience" title="Luxury Clinic Environment" />
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: "/assets/stocks/svc-consultation-01.png", title: "Personal Consultations", text: "Every journey begins with a tailored aesthetic plan." },
              { src: "/assets/stocks/svc-pdo-threads-01.png", title: "Advanced Treatments", text: "PDO threads, fillers, Botox, and skin rejuvenation." },
              { src: "/assets/stocks/svc-skin-rejuvenation-01.png", title: "Premium Care", text: "A serene environment designed for comfort and results." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                  <Image src={item.src} alt={item.title} fill className="object-cover" sizes="400px" />
                </div>
                <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                <p className="text-charcoal/60 text-sm">{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
