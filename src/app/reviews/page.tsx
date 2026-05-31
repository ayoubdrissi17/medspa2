import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";
import Stars from "@/components/Stars";
import { REVIEWS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Read patient reviews and testimonials for Irvine Thread Aesthetics in Tustin, California.",
};

export default function ReviewsPage() {
  const avg = 5;

  return (
    <>
      <section className="py-24 px-6 bg-blush/30">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <SectionTitle subtitle="Patient Stories" title="Reviews" />
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="font-serif text-5xl">{avg}.0</span>
              <div>
                <Stars rating={5} />
                <p className="text-charcoal/50 text-sm mt-1">{REVIEWS.length} reviews</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {REVIEWS.map((review, i) => (
            <FadeIn key={review.name} delay={i * 0.05}>
              <article className="border border-blush p-8 bg-white hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center font-serif text-rose-gold">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{review.name}</p>
                      <p className="text-charcoal/40 text-xs">{review.date}</p>
                    </div>
                  </div>
                  {review.verified && (
                    <span className="text-[10px] tracking-wider uppercase text-rose-gold border border-rose-gold/30 px-2 py-0.5">
                      Verified
                    </span>
                  )}
                </div>
                <Stars rating={review.rating} />
                <p className="text-charcoal/70 text-sm mt-4 leading-relaxed">{review.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
