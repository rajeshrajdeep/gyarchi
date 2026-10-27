// app/robots.ts

import type { MetadataRoute } from "next";

const BASE_URL = "https://www.gyarchi.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
        // Baad me add karna: "/cart", "/checkout", "/account"
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}