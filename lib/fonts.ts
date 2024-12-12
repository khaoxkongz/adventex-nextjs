import "server-only"

import { Geist, Geist_Mono, Krub } from "next/font/google"

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const krubSans = Krub({
  variable: "--font-krub-sans",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
})
