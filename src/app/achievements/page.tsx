"use client"

import { useLanguage } from "../../../components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { Trophy, Star, Award, Users, TrendingUp, Medal, Crown, Target } from "lucide-react"
import Image from "next/image"

export default function AchievementsPage() {
  const { t } = useLanguage()

  const toppers = [
    {
      name: t("arjunMehta"),
      exam: t("arjunMehtaText1"),
      // rank: "AIR 12",
      year: "2024",
      college: t("arjunMehtaText2"),
      branch: t("arjunMehtaText3"),
      image: "/boy1.jpg",
      quote: t("arjunMehtaText4"),
    },
    {
      name: t("snehaSharma"),
      exam: t("snehaSharmaText1"),
      // rank: "AIR 45",
      year: "2024",
      college: t("snehaSharmaText2"),
      branch: t("snehaSharmaText3"),
      image: "/girl1.avif",
      quote: t("snehaSharmaText4"),
    },
    {
      name: t("rohitKumar"),
      exam: t("rohitKumarText1"),
      // rank: "AIR 78",
      year: "2024",
      college:  t("rohitKumarText2"),
      branch: t("rohitKumarText3"),
      image: "/boy2.jpg",
      quote:  t("rohitKumarText4"),
    },
    {
      name: t("priyaPatel1"),
      exam: t("priyaPatel2"),
      // rank: "AIR 156",
      year: "2024",
      college:  t("priyaPatel3"),
      branch:  t("priyaPatel4"),
      image: "/girl2.webp",
      quote:  t("priyaPatel5"),
    },
    {
      name: t("vikasSingh"),
      exam: t("vikasSinghText1"),
      // rank: "AIR 234",
      year: "2024",
      college: t("vikasSinghText2"),
      branch:  t("vikasSinghText3"),
      image: "/boy3.jpg",
      quote: t("vikasSinghText4"),
    },
    {
      name: t("ananyaGupta"),
      exam: t("ananyaGuptaText1"),
      // rank: "AIR 289",
      year: "2024",
      college: t("ananyaGuptaText2"),
      branch: t("ananyaGuptaText3"),
      image: "/girl3.webp",
      quote:t("ananyaGuptaText4"),
    },
  ]

  const yearlyResults = [
    {
      year: "2024",
      iitSelections: 156,
      neetSelections: 234,
      totalStudents: 1200,
      successRate: "95%",
    },
    {
      year: "2023",
      iitSelections: 142,
      neetSelections: 198,
      totalStudents: 1100,
      successRate: "93%",
    },
    {
      year: "2022",
      iitSelections: 128,
      neetSelections: 176,
      totalStudents: 1000,
      successRate: "91%",
    },
    {
      year: "2021",
      iitSelections: 115,
      neetSelections: 165,
      totalStudents: 950,
      successRate: "89%",
    },
  ]

  const awards = [
    {
      title: "Best Coaching Institute 2024",
      organization: "Education Excellence Awards",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Outstanding Faculty Award",
      organization: "National Education Board",
      icon: Award,
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Student Success Recognition",
      organization: "Delhi Education Ministry",
      icon: Medal,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Innovation in Teaching",
      organization: "EdTech India Awards",
      icon: Crown,
      color: "from-purple-500 to-pink-500",
    },
  ]

  const statistics = [
    {
      number: "15,000+",
      label:t ("studentsTrained"),
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "95%",
      label: t("successRate"),
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "500+",
      label: t("iitSelections"),
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
    },
    {
      number: "25+",
      label: t("yearsExperience"),
      icon: Target,
      color: "from-purple-500 to-pink-500",
    },
  ]

  const mediaFeatures = [
    {
      title: "Times of India Features Aakash Institute",
      description: "Recognized for exceptional results in competitive exams",
      date: "March 2024",
      type: "Newspaper",
    },
    {
      title: "NDTV Education Special",
      description: "Interview with our top faculty on modern teaching methods",
      date: "February 2024",
      type: "TV",
    },
    {
      title: "Hindustan Times Success Story",
      description: "Feature on our students' remarkable achievements",
      date: "January 2024",
      type: "Newspaper",
    },
    {
      title: "Education Today Magazine",
      description: "Cover story on innovative coaching techniques",
      date: "December 2023",
      type: "Magazine",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 gradient-text">{t("ourAchievements")}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
             {t("ourAchievementsText1")}
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {statistics.map((stat, index) => (
              <Card key={index} className="glassmorphism hover-glow text-center">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center `}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Performers */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t("ourTOp")}</h2>
            <p className="text-xl text-gray-300">{t("ourTopPerformers")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toppers.map((topper, index) => (
              <Card key={index} className="glassmorphism hover-glow group">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="relative inline-block">
                      <Image
                        src={topper.image || "/placeholder.svg"}
                        alt={topper.name}
                        width={150}
                        height={150}
                        className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute -top-2 -right-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center ">
                          <Crown className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-white mb-1">{topper.name}</h3>
                    <Badge className="mb-2 bg-gradient-to-r from-blue-500 to-purple-600">
                      {topper.exam} {topper.rank}
                    </Badge>
                    <p className="text-sm text-gray-400">{topper.college}</p>
                    <p className="text-sm text-gray-400">{topper.branch}</p>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                    <p className="text-gray-300 text-sm italic">"{topper.quote}"</p>
                  </div>

                  <div className="flex justify-center">
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

      {/* Yearly Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t("yearWiseResults")}</h2>
            <p className="text-xl text-gray-300">{t("yearWiseResultsText")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {yearlyResults.map((result, index) => (
              <Card key={index} className="glassmorphism hover-glow">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text text-center">{result.year}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">{result.iitSelections}</div>
                    <div className="text-sm text-gray-400">{t("iitSelection1")}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">{result.neetSelections}</div>
                    <div className="text-sm text-gray-400">{t("neetSelection2")}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{result.successRate}</div>
                    <div className="text-sm text-gray-400"> {t("successRate1")}</div>
                  </div>
                  <div className="text-center pt-2 border-t border-gray-700">
                    <div className="text-lg text-gray-300">{result.totalStudents} {t("students")}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t("award")}</h2>
            <p className="text-xl text-gray-300">{t("awardText")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="glassmorphism hover-glow text-center">
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${award.color} flex items-center justify-center `}
                  >
                    <award.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold gradient-text mb-2">{award.title}</h3>
                  <p className="text-gray-400 text-sm">{award.organization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Media Coverage</h2>
            <p className="text-xl text-gray-300">Featured in leading publications and media</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaFeatures.map((feature, index) => (
              <Card key={index} className="glassmorphism hover-glow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center  flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-sm mb-2">{feature.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="text-xs">
                          {feature.type}
                        </Badge>
                        <span className="text-xs text-gray-400">{feature.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Success Stories</h2>
            <p className="text-xl text-gray-300">Inspiring journeys of our students</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "From Average to AIR 45",
                student: "Rahul Sharma",
                story:
                  "Started with average grades, achieved NEET AIR 45 through dedicated preparation and expert guidance.",
                improvement: "+85% Score Improvement",
              },
              {
                title: "Dream College Achievement",
                student: "Priya Patel",
                story: "Overcame initial struggles in Physics to secure admission in IIT Delhi Computer Science.",
                improvement: "IIT Delhi Admission",
              },
              {
                title: "Consistent Excellence",
                student: "Amit Kumar",
                story: "Maintained top performance throughout the course and achieved IIT-JEE AIR 78.",
                improvement: "Top 100 Rank",
              },
            ].map((story, index) => (
              <Card key={index} className="glassmorphism hover-glow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold gradient-text mb-2">{story.title}</h3>
                    <p className="text-blue-400 font-medium">{story.student}</p>
                  </div>
                  <p className="text-gray-300 mb-4">{story.story}</p>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-600">{story.improvement}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
