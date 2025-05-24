import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, BarChart3, Smartphone, MapPin } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "معاك - AI Emergency Aid Tracker",
  description: "AI-powered Emergency Aid Tracker ensuring every affected family receives help",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                معاك
              </Link>

              <div className="hidden md:flex items-center gap-6">
                <Link href="/">
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Home
                  </Button>
                </Link>
                <Link href="/map">
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Map
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
                <Link href="/mobile">
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4" />
                    Mobile
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
