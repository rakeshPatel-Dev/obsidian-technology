import type { Metadata } from "next"

const siteName = "Obsydean Technology Pvt. Ltd."
const siteUrl = "https://obsydean.com" // change later if needed
const siteDescription =
  "Obsydean Technology builds premium, high-performance websites and digital products for startups and growing businesses."

export const seoMetadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,

  metadataBase: new URL(siteUrl),

  applicationName: siteName,
  generator: "Next.js",
  category: "Technology",

  keywords: [
    "Obsydean Technology",
    "Web Development Company",
    "Startup Website Development",
    "Next.js Agency",
    "React Developers",
    "Premium Web Solutions",
    "Nepal IT Company",
  ],

  authors: [{ name: "Obsydean Technology" }],
  creator: "Obsydean Technology",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png", // add later
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@obsydean", // optional
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "GOOGLE_VERIFICATION_CODE", // later
  },
}
