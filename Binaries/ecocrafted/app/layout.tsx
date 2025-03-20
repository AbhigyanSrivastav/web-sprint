import type { Metadata } from "next"
import NextTopLoader from "nextjs-toploader"
import { Toaster } from "sonner"
import { fontPrimary, fontSecondary } from "@/lib/fonts"
import { ThemeProvider } from "@/lib/provider/theme-provider"
import { cn } from "@/lib/utils"
import { SiteData } from "@/data/site-data"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: SiteData.name,
    template: `%s | ${SiteData.name}`,
  },
  description: SiteData.description,
  keywords: SiteData.keywords,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "flex min-h-svh flex-col items-center font-sans antialiased",
          fontPrimary.variable,
          fontSecondary.variable
        )}
      >
        <NextTopLoader color="#009688" showSpinner={false} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
