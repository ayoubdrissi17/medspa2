"use client";

import Image from "next/image";
import { useState } from "react";

export default function BeforeAfterCard({
  label,
  before,
  after,
}: {
  label: string;
  before: string;
  after?: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="group relative overflow-hidden bg-blush/30"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {after ? (
          <div className="grid grid-cols-2 h-full w-full relative">
            <div className="relative h-full w-full">
              <Image src={before} alt={`${label} before`} fill className="object-cover" sizes="300px" />
              <span className="absolute bottom-2 left-2 bg-charcoal/70 text-white text-xs px-2 py-1">Before</span>
            </div>
            <div className="relative h-full w-full">
              <Image src={after} alt={`${label} after`} fill className="object-cover" sizes="300px" />
              <span className="absolute bottom-2 left-2 bg-rose-gold text-white text-xs px-2 py-1">After</span>
            </div>
          </div>
        ) : (
          <div className="relative h-full w-full">
            <Image src={before} alt={label} fill className="object-cover" sizes="500px" />
          </div>
        )}
      </div>
      <div className={`p-4 transition-colors ${hover ? "bg-charcoal text-white" : "bg-white"}`}>
        <p className="font-serif text-lg">{label}</p>
      </div>
    </div>
  );
}
