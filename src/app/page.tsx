import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import { CLINIC } from "@/lib/constants";
import {
  FEATURED_SERVICES,
  BEFORE_AFTER,
  INSTAGRAM_POSTS,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/stocks/svc-consultation-01.png"
          alt="OC Aesthetics Institute"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <FadeIn>
            <p className="text-rose-gold-light tracking-[0.35em] uppercase text-sm mb-4">
              {CLINIC.subtitle}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
              Enhance Your Natural Beauty
            </h1>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Experience luxury aesthetic medicine with Dr Assif in the heart of Orange County.
            </p>
            <Link
              href="/services"
              className="inline-block border-2 border-white px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-charcoal transition-all"
            >
              Explore Services
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle subtitle="Our Expertise" title="Featured Treatments" />
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURED_SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <Link href={s.href} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden mb-4">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="400px"
                    />
                  </div>
                  <h3 className="font-serif text-2xl mb-2 group-hover:text-rose-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm">{s.description}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-24 px-6 bg-blush/40">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle subtitle="Real Results" title="Before & After" />
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BEFORE_AFTER.map((item) => (
              <FadeIn key={item.id}>
                <BeforeAfterCard label={item.label} before={item.before} after={item.after} />
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="text-sm tracking-[0.2em] uppercase text-rose-gold border-b border-rose-gold pb-1 hover:text-charcoal hover:border-charcoal transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle subtitle="Client Love" title="Testimonials" light />
          </FadeIn>
          <FadeIn>
            <TestimonialCarousel />
          </FadeIn>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle subtitle="Follow Us" title="Instagram" />
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {INSTAGRAM_POSTS.map((src, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <a
                  href={CLINIC.instagram[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-square overflow-hidden group"
                >
                  <Image
                    src={src}
                    alt="Instagram post"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="200px"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 text-2xl">♥</span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
          <div className="flex justify-center gap-8 mt-8">
            {CLINIC.instagram.map((ig) => (
              <a
                key={ig.handle}
                href={ig.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-gold tracking-wide hover:text-charcoal transition-colors"
              >
                {ig.handle}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-24 px-6 bg-blush/30">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <SectionTitle subtitle="Visit Us" title="Get in Touch" />
            <p className="text-charcoal/70 mb-2">
              <a href={`tel:${CLINIC.phoneRaw}`} className="hover:text-rose-gold transition-colors text-lg">
                {CLINIC.phone}
              </a>
            </p>
            <p className="text-charcoal/70 mb-8">
              {CLINIC.address}<br />
              {CLINIC.city}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-charcoal text-white px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-rose-gold transition-colors"
            >
              Contact Details
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
