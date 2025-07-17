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
      name:  t("rajeshKumar"),
      subject:t("rajeshKumarText1"),
      experience: t("rajeshKumarText2"),
      qualification: t("rajeshKumarText3"),
      image: "/teacher2-img.avif?height=200&width=200",
      specialization: t("rajeshKumarText4"),
    },
    {
      name:t("sunitaSharma"),
      subject:  t("sunitaSharmaText1"),
      experience:   t("sunitaSharmaText2"),
      qualification: t("sunitaSharmaText3"),
      image: "/teacher1-img.webp?height=200&width=200",
      specialization:  t("sunitaSharmaText2"),
    },
    {
      name: t("anasJaved"),
      subject: t( "anasJavedText1"),
      experience: t( "anasJavedText2"),
      qualification:t( "anasJavedText3"),
      image: "/teacher3-img.avif?height=200&width=200",
      specialization: t( "anasJavedText4"),
    },
    {
      name: t("priyaPatel"),
      subject:  t("priyaPatelText1"),
      experience:t("priyaPatelText2"),
      qualification:t("priyaPatelText3"),
      image: "/teacher4-img.avif?height=200&width=200",
      specialization: t("priyaPatelText4"),
    },
  ]

  const values = [
    {
      icon: Target,
      title: t("excellence"),
      description: t("excellenceText"),
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Heart,
      title: t("care"),
      description: t("careText"),
      color: "from-red-500 to-rose-500",
    },
    {
      icon: Lightbulb,
      title:t( "innovation"),
      description: t("innovationText"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: t("community"),
      description: t("communityText"),
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 gradient-text">{t("aboutAakash")}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
             {t("aboutText")}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">{t("ourStory")}</h2>
              <div className="space-y-4 text-gray-300">
               <p>{t("storyText1")}</p>
                <p>
                  {t("storyText2")}
                </p>
                <p>
                {t("storyText3")}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="glassmorphism p-8 rounded-2xl">
                <Image
                  src="/ourstory-img.avif"
                  alt="Aakash Institute Building"
                  width={500}
                  height={400}
                  className="rounded-lg hover:transition-transform hover:scale-105"
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
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl gradient-text">{t("Mission")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  {t("Text")}
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism hover-glow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center  mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl gradient-text">{t("Vision")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  {t("Text1")}
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
            <h2 className="text-4xl font-bold mb-4 gradient-text"> {t("expertFaculty")}</h2>
            <p className="text-xl text-gray-300">{t("facultyText")}</p>
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
            <h2 className="text-4xl font-bold mb-4 gradient-text"> {t("coreValue")}</h2>
            <p className="text-xl text-gray-300">{t("coreValueText")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glassmorphism hover-glow text-center">
                <CardHeader>
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center `}
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
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t("teachingMethods")}</h2>
            <p className="text-xl text-gray-300">{t("teachingMethodsText")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glassmorphism hover-glow">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-blue-400 mb-4" />
                <CardTitle className="gradient-text">{t("conceptualLearning")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  {t("conceptualLearningText")}
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism hover-glow">
              <CardHeader>
                <Target className="w-12 h-12 text-purple-400 mb-4" />
                <CardTitle className="gradient-text">{t("regularAssesments")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  {t("regularAssesmentsText")}
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism hover-glow">
              <CardHeader>
                <Users className="w-12 h-12 text-pink-400 mb-4" />
                <CardTitle className="gradient-text">{t("personalizedAttention")}</CardTitle>
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
