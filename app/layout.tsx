// app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Poppins, Varela_Round } from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
  variable: "--font-poppins-font",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const varelaRoundFont = Varela_Round({
  variable: "--font-varela-round",
  weight: ["400"],
  subsets: ["latin"],
});

const SITE_URL = "https://www.gyarchi.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "GyArchi – Creator Commerce Platform",
    template: "%s | GyArchi",
  },
  description:
    "GyArchi is a creator commerce brand for stylish, quality clothing. Explore our latest collections and shop online.",

  keywords: [
    "GyArchi",
    "Clothing",
    "Fashion",
    "Streetwear",
    "T-Shirts",
    "Apparel",
    "Online Clothing Store",
    "Creator Commerce",
  ],

  authors: [{ name: "Vishal Rajdeep" }],
  creator: "Vishal Rajdeep",
  publisher: "GyArchi",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "GyArchi",
    title: "GyArchi – Creator Commerce Platform",
    description:
      "Stylish, quality clothing from GyArchi. Explore our latest collections.",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "GyArchi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GyArchi – Creator Commerce Platform",
    description:
      "Stylish, quality clothing from GyArchi. Explore our latest collections.",
    images: ["/Logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "GyArchi",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/Logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppinsFont.variable} ${varelaRoundFont.variable} min-h-svh antialiased`}
    >
      <body className="min-h-svh flex flex-col">{children}</body>
    </html>
  );
}