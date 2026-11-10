import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/data";

// One-page site, so one URL. Add entries here if routes are ever added.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, changeFrequency: "monthly", priority: 1 }];
}
