import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://irvinethreadaesthetics.com";
  const pages = ["", "/about", "/ivwellness", "/lasertreatments", "/services", "/gallery", "/reviews", "/contact"];

  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
