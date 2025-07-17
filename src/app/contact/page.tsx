"use client"

import { useLanguage } from "../../../components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Textarea } from "../../../components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function ContactPage() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 98765 43210", "+91 87654 32109", "+91 76543 21098"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@aakashinstitute.com", "admissions@aakashinstitute.com", "support@aakashinstitute.com"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Our Locations",
      details: ["Main Campus: Connaught Place, Delhi", "Branch: Karol Bagh, Delhi", "Branch: Lajpat Nagar, Delhi"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 8:00 PM", "Saturday: 9:00 AM - 6:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
      color: "from-orange-500 to-red-500",
    },
  ]

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#", color: "text-blue-400" },
    { icon: Twitter, name: "Twitter", url: "#", color: "text-blue-400" },
    { icon: Instagram, name: "Instagram", url: "#", color: "text-pink-400" },
    { icon: Youtube, name: "YouTube", url: "#", color: "text-red-400" },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 gradient-text">{t("contactUs")}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with us today. We're here to help you achieve your academic goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glassmorphism hover-glow text-center">
                <CardHeader>
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center `}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl gradient-text">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-300 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glassmorphism">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Send us a Message</CardTitle>
                <p className="text-gray-400">Fill out the form below and we'll get back to you soon.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                      <Input className="neon-border bg-gray-800/50 text-white" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                      <Input
                        type="email"
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                      <Input className="neon-border bg-gray-800/50 text-white" placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Course Interest</label>
                      <select className="w-full px-3 py-2 neon-border bg-gray-800/50 text-white rounded-md">
                        <option value="">Select a course</option>
                        <option value="iit-jee">IIT-JEE Preparation</option>
                        <option value="neet">NEET Preparation</option>
                        <option value="aieee">AIEEE Preparation</option>
                        <option value="class-9">Class 9th</option>
                        <option value="class-10">Class 10th</option>
                        <option value="class-11">Class 11th</option>
                        <option value="class-12">Class 12th</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Language</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input type="radio" name="language" value="english" className="mr-2" />
                        <span className="text-gray-300">English</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="language" value="hindi" className="mr-2" />
                        <span className="text-gray-300">Hindi</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="language" value="both" className="mr-2" />
                        <span className="text-gray-300">Both</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                    <Textarea
                      className="neon-border bg-gray-800/50 text-white"
                      rows={5}
                      placeholder="Tell us about your requirements, questions, or how we can help you..."
                    />
                  </div>

                  <Button className="w-full  hover-glow bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Google Map Placeholder */}
              <Card className="glassmorphism">
                <CardHeader>
                  <CardTitle className="gradient-text">Find Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center neon-border">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                      <p className="text-gray-300">Interactive Map</p>
                      <p className="text-sm text-gray-400">Connaught Place, New Delhi</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="glassmorphism">
                <CardHeader>
                  <CardTitle className="gradient-text">Follow Us</CardTitle>
                  <p className="text-gray-400">Stay connected with us on social media</p>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className={`w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover-glow transition-all ${social.color}`}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="glassmorphism">
                <CardHeader>
                  <CardTitle className="gradient-text">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">info@aakashinstitute.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-green-400 mt-1" />
                    <span className="text-gray-300">
                      Aakash Institute
                      <br />
                      Connaught Place
                      <br />
                      New Delhi - 110001
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What are your admission requirements?",
                answer:
                  "We welcome students from class 9th to 12th and those preparing for competitive exams. Basic eligibility criteria vary by course.",
              },
              {
                question: "Do you provide study materials?",
                answer:
                  "Yes, we provide comprehensive study materials, practice tests, and online resources for all our courses.",
              },
              {
                question: "What is your fee structure?",
                answer:
                  "Our fees vary by course and duration. Please contact us for detailed fee information and available payment plans.",
              },
              {
                question: "Do you offer online classes?",
                answer:
                  "Yes, we offer both online and offline classes to accommodate different learning preferences and schedules.",
              },
            ].map((faq, index) => (
              <Card key={index} className="glassmorphism hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
