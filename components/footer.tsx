"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center neon-glow">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold gradient-text">Aakash Institute</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Premier coaching institute dedicated to helping students achieve excellence in competitive examinations
              and academic success.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-blue-400 hover:text-blue-300 cursor-pointer hover-glow" />
              <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-300 cursor-pointer hover-glow" />
              <Instagram className="w-6 h-6 text-pink-400 hover:text-pink-300 cursor-pointer hover-glow" />
              <Youtube className="w-6 h-6 text-red-400 hover:text-red-300 cursor-pointer hover-glow" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-gray-400 hover:text-white transition-colors">
                  {t("achievements")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  {t("blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">{t("contactUs")}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">info@aakashinstitute.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Aakash Institute. All rights reserved. | Designed with ❤️ for student success
          </p>
        </div>
      </div>
    </footer>
  )
}
