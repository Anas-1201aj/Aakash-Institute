"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "hi"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    achievements: "Achievements",
    blog: "Blog",
    register: "Register",
    quiz: "Quiz",
    announcements: "Announcements",
    contact: "Contact Us",
    heroTitle: "Shape Your Future with Excellence",
    heroSubtitle: "Premier coaching institute for IIT-JEE, NEET & competitive exams",
    getStarted: "Get Started",
    learnMore: "Learn More",
    ourMission: "Our Mission",
    missionText:
      "To provide world-class education and guidance to help students achieve their dreams in competitive examinations.",
    toppers: "Our Toppers",
    testimonials: "What Students Say",
    contactUs: "Contact Us",
    phone: "Phone",
    email: "Email",
    address: "Address",
    followUs: "Follow Us",
  },
  hi: {
    home: "होम",
    about: "हमारे बारे में",
    services: "सेवाएं",
    achievements: "उपलब्धियां",
    blog: "ब्लॉग",
    register: "पंजीकरण",
    quiz: "क्विज़",
    announcements: "घोषणाएं",
    contact: "संपर्क करें",
    heroTitle: "उत्कृष्टता के साथ अपना भविष्य बनाएं",
    heroSubtitle: "IIT-JEE, NEET और प्रतियोगी परीक्षाओं के लिए प्रमुख कोचिंग संस्थान",
    getStarted: "शुरू करें",
    learnMore: "और जानें",
    ourMission: "हमारा मिशन",
    missionText: "प्रतियोगी परीक्षाओं में छात्रों के सपनों को साकार करने के लिए विश्वस्तरीय शिक्षा और मार्गदर्शन प्रदान करना।",
    toppers: "हमारे टॉपर्स",
    testimonials: "छात्र क्या कहते हैं",
    contactUs: "संपर्क करें",
    phone: "फोन",
    email: "ईमेल",
    address: "पता",
    followUs: "हमें फॉलो करें",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
