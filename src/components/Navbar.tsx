"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CLINIC, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blush/40">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="group">
          <span className="font-serif text-lg md:text-xl text-charcoal tracking-wide block leading-none">
            Irvine Thread
          </span>
          <span className="block text-[9px] tracking-[0.2em] uppercase text-rose-gold leading-none mt-1">
            Aesthetics
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm tracking-wide transition-colors hover:text-rose-gold ${
                  pathname === link.href ? "text-rose-gold" : "text-charcoal/80"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={CLINIC.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex text-sm border border-rose-gold text-rose-gold px-5 py-2 hover:bg-rose-gold hover:text-white transition-all"
        >
          WhatsApp
        </a>

        <button
          type="button"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-charcoal transition ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-charcoal transition ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-charcoal transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-blush/40"
          >
            <ul className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block text-lg font-serif ${
                      pathname === link.href ? "text-rose-gold" : "text-charcoal"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={CLINIC.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 border border-rose-gold text-rose-gold px-6 py-2"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
