import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View before & after results and our luxury clinic gallery at OC Aesthetics Institute.",
};

export default function GalleryPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionTitle subtitle="Portfolio" title="Gallery" />
        </FadeIn>
        <FadeIn>
          <GalleryGrid />
        </FadeIn>
      </div>
    </section>
  );
}
