import type React from "react"
import type { Metadata } from "next"
import { Poppins, Orbitron } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "../../components/language-provider"
import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "Aakash Institute - Premier Coaching for IIT-JEE, NEET & Competitive Exams",
  description:
    "Join Aakash Institute for expert coaching in IIT-JEE, NEET, AIEEE and school subjects. Proven track record with top results and experienced faculty.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${orbitron.variable} font-sans bg-gray-900 text-white`}>
        <LanguageProvider>
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
