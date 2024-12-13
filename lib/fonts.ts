import "server-only"

import { Prompt } from "next/font/google"

export const promptSans = Prompt({
  variable: "--font-prompt-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "thai"],
})
