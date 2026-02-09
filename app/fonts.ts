import localFont from "next/font/local"

export const goldman = localFont({
  src: [
    {
      path: "../public/fonts/goldman/Goldman-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/goldman/Goldman-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-goldman",
  display: "swap",
})

export const lato = localFont({
  src: [
    {
      path: "../public/fonts/lato/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/lato/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lato",
  display: "swap",
})
