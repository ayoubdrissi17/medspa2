"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import Stars from "./Stars";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  return (
    <div className="max-w-3xl mx-auto text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Stars rating={t.rating} />
          <p className="font-serif text-xl md:text-2xl text-charcoal mt-6 mb-6 leading-relaxed italic">
            &ldquo;{t.text}&rdquo;
          </p>
          <p className="text-rose-gold tracking-widest uppercase text-sm">{t.name}</p>
          <p className="text-charcoal/50 text-xs mt-1">{t.date}</p>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-3 mt-8">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === index ? "bg-rose-gold w-6" : "bg-blush"
            }`}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
