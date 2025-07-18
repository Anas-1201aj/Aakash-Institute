import type { TranslationKey } from "../../../components/language-provider"

"use client"

import { useLanguage } from "../../../components/language-provider"
import { Card, CardContent } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import { Badge } from "../../../components/ui/badge"
import { Input } from "../../../components/ui/input"
import { Calendar, User, Clock, Search, BookOpen, TrendingUp, Target, Lightbulb } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  const { t } = useLanguage()

  const featuredPost: {
    titleKey: TranslationKey
    excerptKey: TranslationKey
    authorKey: TranslationKey
    dateKey: TranslationKey
    readTimeKey: TranslationKey
    image: string
    categoryKey: TranslationKey
    tagsKeys: TranslationKey[]
  } = {
    titleKey: "blogFeaturedTitle",
    excerptKey: "blogFeaturedExcerpt",
    authorKey: "blogFeaturedAuthor",
    dateKey: "blogFeaturedDate",
    readTimeKey: "blogFeaturedReadTime",
    image: "/jee-article.jpg?height=200&width=300",
    categoryKey: "blogCategoryStrategy",
    tagsKeys: ["blogTagIITJEE", "blogTagStudyTips", "blogTagStrategy"],
  }

  const blogPosts: {
    titleKey: TranslationKey
    excerptKey: TranslationKey
    authorKey: TranslationKey
    dateKey: TranslationKey
    readTimeKey: TranslationKey
    image: string
    categoryKey: TranslationKey
    tagsKeys: TranslationKey[]
  }[] = [
    {
      titleKey: "blogPost1Title",
      excerptKey: "blogPost1Excerpt",
      authorKey: "blogPost1Author",
      dateKey: "blogPost1Date",
      readTimeKey: "blogPost1ReadTime",
      image: "/physics.jpg?height=200&width=300",
      categoryKey: "blogCategoryPhysics",
      tagsKeys: ["blogTagPhysics", "blogTagProblemSolving"],
    },
    {
      titleKey: "blogPost2Title",
      excerptKey: "blogPost2Excerpt",
      authorKey: "blogPost2Author",
      dateKey: "blogPost2Date",
      readTimeKey: "blogPost2ReadTime",
      image: "/biology.png?height=200&width=300",
      categoryKey: "blogCategoryBiology",
      tagsKeys: ["blogTagNEET", "blogTagBiology"],
    },
    {
      titleKey: "blogPost3Title",
      excerptKey: "blogPost3Excerpt",
      authorKey: "blogPost3Author",
      dateKey: "blogPost3Date",
      readTimeKey: "blogPost3ReadTime",
      image: "/timemanage.jpeg?height=200&width=300",
      categoryKey: "blogCategoryTips",
      tagsKeys: ["blogTagTimeManagement", "blogTagExamTips"],
    },
    {
      titleKey: "blogPost4Title",
      excerptKey: "blogPost4Excerpt",
      authorKey: "blogPost4Author",
      dateKey: "blogPost4Date",
      readTimeKey: "blogPost4ReadTime",
      image: "/chemistry.jpg?height=200&width=300",
      categoryKey: "blogCategoryChemistry",
      tagsKeys: ["blogTagChemistry", "blogTagMemory"],
    },
    {
      titleKey: "blogPost5Title",
      excerptKey: "blogPost5Excerpt",
      authorKey: "blogPost5Author",
      dateKey: "blogPost5Date",
      readTimeKey: "blogPost5ReadTime",
      image: "/tips.jpg?height=200&width=300",
      categoryKey: "blogCategoryMotivation",
      tagsKeys: ["blogTagMotivation", "blogTagMentalHealth"],
    },
    {
      titleKey: "blogPost6Title",
      excerptKey: "blogPost6Excerpt",
      authorKey: "blogPost6Author",
      dateKey: "blogPost6Date",
      readTimeKey: "blogPost6ReadTime",
      image: "/calculus.png?height=200&width=300",
      categoryKey: "blogCategoryMathematics",
      tagsKeys: ["blogTagMathematics", "blogTagCalculus"],
    },
  ]

  const categories: {
    nameKey: TranslationKey
    count: number
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    color: string
  }[] = [
    { nameKey: "blogCategoryStrategy", count: 12, icon: Target, color: "from-blue-500 to-cyan-500" },
    { nameKey: "blogCategoryPhysics", count: 8, icon: Lightbulb, color: "from-yellow-500 to-orange-500" },
    { nameKey: "blogCategoryChemistry", count: 6, icon: BookOpen, color: "from-green-500 to-emerald-500" },
    { nameKey: "blogCategoryMathematics", count: 10, icon: TrendingUp, color: "from-purple-500 to-pink-500" },
    { nameKey: "blogCategoryBiology", count: 7, icon: Target, color: "from-red-500 to-pink-500" },
    { nameKey: "blogCategoryMotivation", count: 5, icon: Lightbulb, color: "from-indigo-500 to-purple-500" },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 gradient-text">{t("blog")}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("blogHeroSubtitle")}
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                className="pl-10 neon-border bg-gray-800/50 text-white"
                placeholder={t("blogSearchPlaceholder")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="glassmorphism hover-glow cursor-pointer text-center">
                <CardContent className="p-4">
                  <div
                    className={`w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-sm">{t(category.nameKey)}</h3>
                  <p className="text-xs text-gray-400">{category.count} {t("blogArticles")}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t("blogFeaturedArticle")}</h2>
          </div>

          <Card className="glassmorphism hover-glow overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={t(featuredPost.titleKey)}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-600">{t(featuredPost.categoryKey)}</Badge>
                  {featuredPost.tagsKeys.map((tagKey, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {t(tagKey)}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t(featuredPost.titleKey)}</h3>
                <p className="text-gray-300 mb-6">{t(featuredPost.excerptKey)}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{t(featuredPost.authorKey)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{t(featuredPost.dateKey)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{t(featuredPost.readTimeKey)}</span>
                    </div>
                  </div>
                </div>
                <Button className=" hover-glow bg-gradient-to-r from-blue-500 to-purple-600">
                  {t("blogReadFullArticle")}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t("blogLatestArticles")}</h2>
            <p className="text-xl text-gray-300">{t("blogLatestArticlesSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="glassmorphism hover-glow overflow-hidden">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={t(post.titleKey)} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-600">{t(post.categoryKey)}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{t(post.titleKey)}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{t(post.excerptKey)}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{t(post.authorKey)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{t(post.readTimeKey)}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tagsKeys.map((tagKey, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {t(tagKey)}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full neon-border hover-glow bg-transparent">
                    {t("blogReadMore")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glassmorphism text-center">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold mb-4 gradient-text">{t("blogStayUpdated")}</h2>
              <p className="text-xl text-gray-300 mb-8">
                {t("blogSubscribeText")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input type="email" placeholder={t("blogEmailPlaceholder")} className="neon-border bg-gray-800/50 text-white" />
                <Button className=" hover-glow bg-gradient-to-r from-blue-500 to-purple-600">{t("blogSubscribeButton")}</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
