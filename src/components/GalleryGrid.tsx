"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import BeforeAfterCard from "./BeforeAfterCard";
import { BEFORE_AFTER, GALLERY_IMAGES, GALLERY_FILTERS } from "@/lib/data";

export default function GalleryGrid() {
  const [filter, setFilter] = useState<string>("all");

  const images =
    filter === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === filter);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {GALLERY_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`px-5 py-2 text-xs tracking-[0.15em] uppercase transition-all ${
              filter === f
                ? "bg-charcoal text-white"
                : "border border-charcoal/20 text-charcoal/70 hover:border-rose-gold hover:text-rose-gold"
            }`}
          >
            {f === "before-after" ? "Before / After" : f}
          </button>
        ))}
      </div>

      {filter === "before-after" ? (
        <div className="grid sm:grid-cols-2 gap-6">
          {BEFORE_AFTER.map((item) => (
            <motion.div key={item.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <BeforeAfterCard label={item.label} before={item.before} after={item.after} />
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors flex items-end p-4">
                <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity font-serif">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}
