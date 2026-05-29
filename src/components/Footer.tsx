import Link from "next/link";
import { CLINIC, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-serif text-2xl mb-2">{CLINIC.name}</h3>
          <p className="text-rose-gold text-sm tracking-widest uppercase mb-4">
            {CLINIC.subtitle}
          </p>
          <p className="text-white/70 text-sm leading-relaxed">
            Luxury aesthetic medicine in Tustin, California. Enhancing your natural beauty with expertise and care.
          </p>
        </div>

        <div>
          <h4 className="text-sm tracking-widest uppercase text-rose-gold mb-4">Navigation</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/70 hover:text-rose-gold text-sm transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm tracking-widest uppercase text-rose-gold mb-4">Contact</h4>
          <p className="text-white/70 text-sm mb-2">
            <a href={`tel:${CLINIC.phoneRaw}`} className="hover:text-rose-gold transition-colors">
              {CLINIC.phone}
            </a>
          </p>
          <p className="text-white/70 text-sm mb-4">
            {CLINIC.address}<br />
            {CLINIC.city}
          </p>
          <div className="flex gap-4">
            {CLINIC.instagram.map((ig) => (
              <a
                key={ig.handle}
                href={ig.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-rose-gold text-sm transition-colors"
              >
                {ig.handle}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-white/50 text-xs tracking-wide">
        © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
      </div>
    </footer>
  );
}
