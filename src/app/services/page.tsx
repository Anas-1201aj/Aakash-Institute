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
      title: t("iitJee"),
      description: t("iitJeeText"),
      icon: Trophy,
      color: "from-blue-500 to-cyan-500",
      duration: "2 Years",
      batchSize: "25-30 Students",
      features: [
        t("iitJeeText3"),
        t("iitJeeText4"),
        t("iitJeeText5"),
        t("iitJeeText6"),
      ],
      price: t("iitJeeText7"),
    },
    {
      title: t("neet"),
      description: t("neetText1"),
      icon: Brain,
      color: "from-green-500 to-emerald-500",
      duration: t("neetText2"),
      batchSize: t("neetText3"),
      features: [
        t("neetText4"),
        t("neetText5"),
        t("neetText6"),
        t("neetText7"),
        t("neetText8"),
      ],
      price: t("neetText9"),
    },
    {
      title: t("aieee"),
      description: t("aieeeText1"),
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      duration: t("aieeeText2"),
      batchSize: t("aieeeText3"),
      features: [
        t("aieeeText4"),
        t("aieeeText5"),
        t("aieeeText6"),
        t("aieeeText7"),
        t("aieeeText8"),
      ],
      price: t("aieeeText9"),
    },
  ]

  const classServices = [
    {
      class: t("class9th"),
      subjects: ["Mathematics", "Science", "English", "Social Studies"],
      description: t("class9thText1"),
      color: "from-orange-500 to-red-500",
      price: t("class9thText7"),
    },
    {
      class: t("class10th"),
      subjects: ["Mathematics", "Science", "English", "Social Studies"],
      description: t("class10thText1"),
      color: "from-pink-500 to-purple-500",
      price: t("class10thText7"),
    },
    {
      class: t("class11th"),
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
      description: t("class11thText1"),
      color: "from-blue-500 to-purple-500",
      price: t("class11thText7"),
    },
    {
      class: t("class12th"),
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
      description: t("class12thText1"),
      color: "from-green-500 to-blue-500",
      price: t("class12thText7"),
    },
  ]

  const additionalServices = [
    {
      title: t("doubtClearingSeesions"),
      description: t("doubtClearingSeesionsText1"),
      icon: Users,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: t("testSeries"),
      description: t("testSeriesText1"),
      icon: Target,
      color: "from-red-500 to-pink-500",
    },
    {
      title: t("studyMaterials"),
      description: t("studyMaterialsText1"),
      icon: BookOpen,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: t("carrerCounseling"),
      description: t("carrerCounselingText1"),
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
            <h1 className="text-5xl font-bold mb-6 gradient-text">{t("ourServices")}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("servicesText")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Competitive Exam Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t("competitiveExams")}</h2>
            <p className="text-xl text-gray-300">{t("competitiveExamsText")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="glassmorphism hover-glow group">
                <CardHeader className="max-h-[30vh]">
                  <div
                    className={`w-16 h-20 mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="w-8   h-8 text-white" />
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
                    <Button className="w-full hover-glow bg-gradient-to-r from-blue-500 to-purple-600">
                      {t("iitJeeText8")}
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
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t("schoolClasses")}</h2>
            <p className="text-xl text-gray-300">{t("schoolClassesText1")}</p>
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
                      {t("class9thText8")}
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
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t("additionalServices")}</h2>
            <p className="text-xl text-gray-300">{t("additionalServicesText1")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="glassmorphism hover-glow text-center">
                <CardHeader>
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center neon-border`}
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
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t("whyChooseAakashInstitute")}</h2>
            <p className="text-xl text-gray-300">{t("whyChooseAakashInstituteText1")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glassmorphism hover-glow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center ">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold gradient-text mb-4">{t("provenTrackRecord")}</h3>
                <p className="text-gray-300">
                  {t("provenTrackRecordText1")}
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism hover-glow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center ">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold gradient-text mb-4">{t("expertFaculty1")}</h3>
                <p className="text-gray-300">
                 {t("expertFacultyText1")}
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism hover-glow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center ">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold gradient-text mb-4">{t("personalizedAttention1")}</h3>
                <p className="text-gray-300">
                 {t ("personalizedAttentionText1")}
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
              <h2 className="text-4xl font-bold mb-4 gradient-text">{t("startJourney")}</h2>
              <p className="text-xl text-gray-300 mb-8">
               {t("startJourneyText1")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="hover-glow bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg"
                  >
                  {t("startJourneyText2")}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="neon-border hover-glow px-8 py-4 text-lg bg-transparent"
                  >
                    {t("startJourneyText3")}
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
