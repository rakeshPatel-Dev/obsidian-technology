import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "next-themes"

import { seoMetadata } from "./seo"
import { goldman, lato } from "./fonts"
import BrandHeader from "@/components/layout/Header"
import BrandFooter from "@/components/layout/Footer"

export const metadata: Metadata = seoMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${goldman.variable} ${lato.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased pt-18 font-body">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BrandHeader />
          {children}
          <BrandFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
