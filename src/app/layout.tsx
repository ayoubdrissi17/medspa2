import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CLINIC } from "@/lib/constants";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Irvine Thread Aesthetics | Luxury Aesthetic Medicine in Tustin, CA",
    template: "%s | Irvine Thread Aesthetics",
  },
  description:
    "Irvine Thread Aesthetics — Centre de médecine esthétique. PDO threads, Botox, dermal fillers, skin rejuvenation & facial contouring in Tustin, California.",
  keywords: [
    "med spa",
    "aesthetic medicine",
    "Botox Tustin",
    "Irvine Thread Aesthetics",
    "luxury med spa California",
    "HydraFacial",
    "lip fillers",
  ],
  openGraph: {
    title: "Irvine Thread Aesthetics",
    description: CLINIC.subtitle,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
