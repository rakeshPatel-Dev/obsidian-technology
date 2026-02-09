import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "next-themes"

import { seoMetadata } from "./seo"
import { goldman, lato } from "./fonts"

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
      <body className="antialiased pt-20 font-body">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
