"use client"

import { useLanguage } from "../../../components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import { Badge } from "../../../components/ui/badge"
import { BookOpen, Users, Clock, Award, Target, Zap, Brain, Trophy, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const { t } = useLanguage()

  const mainServices = [
    {
      title: "IIT-JEE Preparation",
      description: "Comprehensive coaching for IIT-JEE Main & Advanced with expert faculty and proven methodology.",
      icon: Trophy,
      color: "from-blue-500 to-cyan-500",
      duration: "2 Years",
      batchSize: "25-30 Students",
      features: [
        "Complete syllabus coverage",
        "Regular mock tests",
        "Doubt clearing sessions",
        "Performance analysis",
        "Study materials included",
      ],
      price: "₹1,50,000/year",
    },
    {
      title: "NEET Preparation",
      description: "Specialized coaching for NEET with focus on Biology, Chemistry, and Physics.",
      icon: Brain,
      color: "from-green-500 to-emerald-500",
      duration: "2 Years",
      batchSize: "20-25 Students",
      features: [
        "NCERT-based teaching",
        "Medical entrance focus",
        "Regular assessments",
        "Biology lab sessions",
        "Previous year papers",
      ],
      price: "₹1,25,000/year",
    },
    {
      title: "AIEEE Preparation",
      description: "Targeted preparation for AIEEE with emphasis on engineering fundamentals.",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      duration: "1 Year",
      batchSize: "30-35 Students",
      features: [
        "Engineering mathematics",
        "Physics & Chemistry",
        "Problem-solving techniques",
        "Time management",
        "Mock examinations",
      ],
      price: "₹80,000/year",
    },
  ]

  const classServices = [
    {
      class: "Class 9th",
      subjects: ["Mathematics", "Science", "English", "Social Studies"],
      description: "Foundation building with conceptual clarity",
      color: "from-orange-500 to-red-500",
      price: "₹25,000/year",
    },
    {
      class: "Class 10th",
      subjects: ["Mathematics", "Science", "English", "Social Studies"],
      description: "Board exam preparation with competitive edge",
      color: "from-pink-500 to-purple-500",
      price: "₹30,000/year",
    },
    {
      class: "Class 11th",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
      description: "Advanced concepts with JEE/NEET foundation",
      color: "from-blue-500 to-purple-500",
      price: "₹45,000/year",
    },
    {
      class: "Class 12th",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
      description: "Board + competitive exam preparation",
      color: "from-green-500 to-blue-500",
      price: "₹50,000/year",
    },
  ]

  const additionalServices = [
    {
      title: "Doubt Clearing Sessions",
      description: "One-on-one sessions to clear individual doubts",
      icon: Users,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Test Series",
      description: "Regular mock tests and practice papers",
      icon: Target,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Study Materials",
      description: "Comprehensive books and digital resources",
      icon: BookOpen,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Career Counseling",
      description: "Guidance for career choices and college selection",
      icon: Award,
      color: "from-teal-500 to-green-500",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 gradient-text">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive coaching programs designed to help students excel in competitive exams and academic
              pursuits.
            </p>
          </div>
        </div>
      </section>

      {/* Main Competitive Exam Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Competitive Exam Preparation</h2>
            <p className="text-xl text-gray-300">Expert coaching for India's toughest entrance exams</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="glassmorphism hover-glow group">
                <CardHeader>
                  <div
                    className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center neon-glow group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl gradient-text">{service.title}</CardTitle>
                  <CardDescription className="text-gray-400">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="neon-border">
                      <Clock className="w-3 h-3 mr-1" />
                      {service.duration}
                    </Badge>
                    <Badge variant="outline" className="neon-border">
                      <Users className="w-3 h-3 mr-1" />
                      {service.batchSize}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold gradient-text">{service.price}</span>
                    </div>
                    <Button className="w-full neon-glow hover-glow bg-gradient-to-r from-blue-500 to-purple-600">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* School Classes Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">School Classes</h2>
            <p className="text-xl text-gray-300">Strong foundation for academic excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {classServices.map((classService, index) => (
              <Card key={index} className="glassmorphism hover-glow">
                <CardHeader>
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${classService.color} mb-4`}></div>
                  <CardTitle className="text-xl gradient-text">{classService.class}</CardTitle>
                  <CardDescription className="text-gray-400">{classService.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {classService.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold gradient-text">{classService.price}</span>
                    </div>
                    <Button variant="outline" className="w-full neon-border hover-glow bg-transparent">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Additional Services</h2>
            <p className="text-xl text-gray-300">Extra support to ensure your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="glassmorphism hover-glow text-center">
                <CardHeader>
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center neon-glow`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl gradient-text">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Why Choose Aakash Institute?</h2>
            <p className="text-xl text-gray-300">What makes us different from others</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glassmorphism hover-glow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center neon-glow">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold gradient-text mb-4">Proven Track Record</h3>
                <p className="text-gray-300">
                  25+ years of excellence with thousands of successful students in top colleges.
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism hover-glow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center neon-glow">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold gradient-text mb-4">Expert Faculty</h3>
                <p className="text-gray-300">
                  Highly qualified teachers with years of experience in competitive exam coaching.
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism hover-glow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center neon-glow">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold gradient-text mb-4">Personalized Attention</h3>
                <p className="text-gray-300">
                  Small batch sizes ensure individual attention and customized learning approach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="glassmorphism">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold mb-4 gradient-text">Ready to Start Your Journey?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of successful students who achieved their dreams with Aakash Institute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="neon-glow hover-glow bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg"
                  >
                    Register Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="neon-border hover-glow px-8 py-4 text-lg bg-transparent"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
