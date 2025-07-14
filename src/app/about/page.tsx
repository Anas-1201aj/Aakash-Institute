"use client"

import { useLanguage } from "../../../components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { Users, Target, Award, BookOpen, Heart, Lightbulb } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const { t } = useLanguage()

  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      subject: "Physics",
      experience: "15 Years",
      qualification: "Ph.D. IIT Delhi",
      image: "/placeholder.svg?height=200&width=200",
      specialization: "Mechanics & Thermodynamics",
    },
    {
      name: "Prof. Sunita Sharma",
      subject: "Chemistry",
      experience: "12 Years",
      qualification: "M.Sc. Chemistry",
      image: "/placeholder.svg?height=200&width=200",
      specialization: "Organic & Inorganic Chemistry",
    },
    {
      name: "Mr. Amit Verma",
      subject: "Mathematics",
      experience: "18 Years",
      qualification: "M.Tech. IIT Bombay",
      image: "/placeholder.svg?height=200&width=200",
      specialization: "Calculus & Algebra",
    },
    {
      name: "Dr. Priya Patel",
      subject: "Biology",
      experience: "10 Years",
      qualification: "Ph.D. Botany",
      image: "/placeholder.svg?height=200&width=200",
      specialization: "Genetics & Ecology",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from teaching to student support.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      title: "Care",
      description: "We care deeply about each student's success and provide personalized attention.",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously innovate our teaching methods to make learning more effective.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Community",
      description: "We build a supportive community where students can learn and grow together.",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 gradient-text">About Aakash Institute</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empowering students to achieve their dreams through quality education and unwavering support since 1999.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 1999 with a vision to provide world-class education, Aakash Institute has been at the
                  forefront of competitive exam preparation in India. What started as a small coaching center has now
                  grown into one of the most trusted names in education.
                </p>
                <p>
                  Our journey began with a simple belief: every student deserves the best guidance to achieve their
                  dreams. Over the years, we have helped thousands of students crack prestigious examinations like
                  IIT-JEE, NEET, and various other competitive exams.
                </p>
                <p>
                  Today, we stand proud with a legacy of excellence, innovation, and student success. Our commitment to
                  quality education and personalized attention has made us the preferred choice for students and parents
                  across the country.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="glassmorphism p-8 rounded-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Aakash Institute Building"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glassmorphism hover-glow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center neon-glow mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl gradient-text">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  To provide world-class education and comprehensive guidance that empowers students to excel in
                  competitive examinations and achieve their career aspirations with confidence and competence..
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism hover-glow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center neon-glow mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl gradient-text">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  To be the leading educational institution that transforms lives through innovative teaching
                  methodologies, creating future leaders and professionals who contribute meaningfully to society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Our Expert Faculty</h2>
            <p className="text-xl text-gray-300">Meet our experienced and dedicated teachers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((teacher, index) => (
              <Card key={index} className="glassmorphism hover-glow group">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <Image
                      src={teacher.image || "/placeholder.svg"}
                      alt={teacher.name}
                      width={200}
                      height={200}
                      className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-all"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{teacher.name}</h3>
                  <Badge className="mb-2 bg-gradient-to-r from-blue-500 to-purple-600">{teacher.subject}</Badge>
                  <p className="text-sm text-gray-400 mb-1">{teacher.qualification}</p>
                  <p className="text-sm text-gray-400 mb-2">{teacher.experience} Experience</p>
                  <p className="text-xs text-gray-500">{teacher.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Our Core Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glassmorphism hover-glow text-center">
                <CardHeader>
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center neon-glow`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl gradient-text">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pedagogy Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Our Teaching Methodology</h2>
            <p className="text-xl text-gray-300">Proven methods that deliver results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glassmorphism hover-glow">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-blue-400 mb-4" />
                <CardTitle className="gradient-text">Conceptual Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We focus on building strong conceptual foundations rather than rote learning, ensuring students
                  understand the 'why' behind every concept.
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism hover-glow">
              <CardHeader>
                <Target className="w-12 h-12 text-purple-400 mb-4" />
                <CardTitle className="gradient-text">Regular Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Continuous evaluation through tests and assignments helps track progress and identify areas that need
                  improvement.
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism hover-glow">
              <CardHeader>
                <Users className="w-12 h-12 text-pink-400 mb-4" />
                <CardTitle className="gradient-text">Personal Attention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Small batch sizes ensure that every student receives individual attention and personalized guidance
                  from our faculty.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
