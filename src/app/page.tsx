"use client"

import { useLanguage } from "../../components/language-provider"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { BookOpen, Star, ChevronRight, Play, Award, Target, Zap, CheckCircle } from "lucide-react"
import Image from "next/image"
import { Badge } from "../../components/ui/badge"

export default function HomePage() {
  const { t } = useLanguage()

  const subjects = [
    { name: "Physics", icon: Zap, color: "from-blue-500 to-cyan-500" },
    { name: "Chemistry", icon: Target, color: "from-green-500 to-emerald-500" },
    { name: "Mathematics", icon: BookOpen, color: "from-purple-500 to-pink-500" },
    { name: "Biology", icon: Award, color: "from-orange-500 to-red-500" },
  ]

  const achievements = [
    { number: "15000+", label: "Students Enrolled" },
    { number: "95%", label: "Success Rate" },
    { number: "500+", label: "IIT Selections" },
    { number: "25+", label: "Years Experience" },
  ]

  const testimonials = [
    {
      name: "Rahul Sharma",
      exam: "IIT-JEE AIR 45",
      text: "Aakash Institute transformed my approach to problem-solving. The faculty here is exceptional!",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Priya Patel",
      exam: "NEET AIR 120",
      text: "The systematic teaching methodology and regular tests helped me achieve my dream of becoming a doctor.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Amit Kumar",
      exam: "IIT-JEE AIR 78",
      text: "Best coaching institute in Delhi! The teachers are very supportive and knowledgeable.",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>

        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Students studying"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl floating-animation"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating-animation"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl floating-animation"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">{t("heroTitle")}</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">{t("heroSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="neon-glow hover-glow bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                {t("getStarted")}
              </Button>
              <Button variant="outline" size="lg" className="neon-border hover-glow px-8 py-4 text-lg bg-transparent">
                {t("learnMore")}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t("ourMission")}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("missionText")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="glassmorphism hover-glow text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold gradient-text mb-2">{achievement.number}</div>
                  <div className="text-gray-300">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Our Coaching Programs</h2>
            <p className="text-xl text-gray-300">Expert guidance in all major subjects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subjects.map((subject, index) => (
              <Card key={index} className="glassmorphism hover-glow group cursor-pointer">
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${subject.color} flex items-center justify-center neon-glow group-hover:scale-110 transition-transform`}
                  >
                    <subject.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl gradient-text">{subject.name}</CardTitle>
                  <CardDescription className="text-gray-400">
                    Comprehensive coaching with expert faculty and proven methodologies
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Packages Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Coaching Packages & Offers</h2>
            <p className="text-xl text-gray-300">Limited time offers for early registrations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "IIT-JEE Complete",
                originalPrice: "₹1,50,000",
                discountPrice: "₹1,20,000",
                discount: "20% OFF",
                duration: "2 Years",
                features: ["Complete syllabus", "Mock tests", "Study materials", "Doubt sessions"],
                popular: true,
              },
              {
                name: "NEET Foundation",
                originalPrice: "₹1,25,000",
                discountPrice: "₹1,00,000",
                discount: "20% OFF",
                duration: "2 Years",
                features: ["NCERT based", "Biology focus", "Regular tests", "Lab sessions"],
                popular: false,
              },
              {
                name: "School + Competitive",
                originalPrice: "₹80,000",
                discountPrice: "₹65,000",
                discount: "19% OFF",
                duration: "1 Year",
                features: ["Board preparation", "Competitive edge", "Flexible timing", "Personal attention"],
                popular: false,
              },
            ].map((pkg, index) => (
              <Card
                key={index}
                className={`glassmorphism hover-glow relative ${pkg.popular ? "ring-2 ring-blue-500" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="mb-4">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 mb-2">{pkg.discount}</Badge>
                  </div>
                  <CardTitle className="text-2xl gradient-text">{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-400 line-through">{pkg.originalPrice}</div>
                    <div className="text-3xl font-bold text-white">{pkg.discountPrice}</div>
                    <div className="text-sm text-gray-400">{pkg.duration}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full neon-glow hover-glow bg-gradient-to-r from-blue-500 to-purple-600">
                    Enroll Now
                  </Button>
                  <p className="text-xs text-center text-gray-400">*Offer valid till 31st March</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t("testimonials")}</h2>
            <p className="text-xl text-gray-300">Success stories from our students</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glassmorphism hover-glow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-blue-400">{testimonial.exam}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.text}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t("contactUs")}</h2>
            <p className="text-xl text-gray-300">Get in touch with us today</p>
          </div>

          <Card className="glassmorphism">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <Input className="neon-border bg-gray-800/50 text-white" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <Input
                      type="email"
                      className="neon-border bg-gray-800/50 text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <Input className="neon-border bg-gray-800/50 text-white" placeholder="Enter your phone" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Course Interest</label>
                    <select className="w-full px-3 py-2 neon-border bg-gray-800/50 text-white rounded-md">
                      <option>IIT-JEE</option>
                      <option>NEET</option>
                      <option>AIEEE</option>
                      <option>Class 9-12</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <Textarea className="neon-border bg-gray-800/50 text-white" rows={4} placeholder="Your message..." />
                </div>
                <Button className="w-full neon-glow hover-glow bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
