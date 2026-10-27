// app/sitemap.ts

import type { MetadataRoute } from "next";

const BASE_URL = "https://www.gyarchi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Pages ban jaane par yahan add karna, jaise:
    // { url: `${BASE_URL}/shop`, ... },
    // { url: `${BASE_URL}/about`, ... },
    // { url: `${BASE_URL}/contact`, ... },
    // { url: `${BASE_URL}/privacy-policy`, ... },
    // { url: `${BASE_URL}/terms-and-conditions`, ... },
  ];
}