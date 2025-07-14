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

  const featuredPost = {
    title: "Top 10 Study Strategies for IIT-JEE Success",
    excerpt: "Discover proven techniques that helped our students achieve top ranks in IIT-JEE examinations.",
    author: "Dr. Rajesh Kumar",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "Strategy",
    tags: ["IIT-JEE", "Study Tips", "Strategy"],
  }

  const blogPosts = [
    {
      title: "How to Master Physics Problem Solving",
      excerpt: "Step-by-step approach to tackle complex physics problems with confidence.",
      author: "Prof. Sunita Sharma",
      date: "March 12, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Physics",
      tags: ["Physics", "Problem Solving"],
    },
    {
      title: "NEET Biology: Key Topics to Focus On",
      excerpt: "Essential biology topics that frequently appear in NEET examinations.",
      author: "Dr. Priya Patel",
      date: "March 10, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Biology",
      tags: ["NEET", "Biology"],
    },
    {
      title: "Time Management During Competitive Exams",
      excerpt: "Effective strategies to manage time and maximize your exam performance.",
      author: "Mr. Amit Verma",
      date: "March 8, 2024",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Tips",
      tags: ["Time Management", "Exam Tips"],
    },
    {
      title: "Chemistry Formulas: Memory Techniques",
      excerpt: "Proven methods to memorize and recall chemistry formulas effectively.",
      author: "Dr. Rajesh Kumar",
      date: "March 5, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Chemistry",
      tags: ["Chemistry", "Memory"],
    },
    {
      title: "Motivation: Staying Focused During Preparation",
      excerpt: "Psychological strategies to maintain motivation throughout your preparation journey.",
      author: "Prof. Sunita Sharma",
      date: "March 3, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Motivation",
      tags: ["Motivation", "Mental Health"],
    },
    {
      title: "Mathematics: Calculus Made Simple",
      excerpt: "Breaking down complex calculus concepts into easy-to-understand steps.",
      author: "Mr. Amit Verma",
      date: "March 1, 2024",
      readTime: "9 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Mathematics",
      tags: ["Mathematics", "Calculus"],
    },
  ]

  const categories = [
    { name: "Strategy", count: 12, icon: Target, color: "from-blue-500 to-cyan-500" },
    { name: "Physics", count: 8, icon: Lightbulb, color: "from-yellow-500 to-orange-500" },
    { name: "Chemistry", count: 6, icon: BookOpen, color: "from-green-500 to-emerald-500" },
    { name: "Mathematics", count: 10, icon: TrendingUp, color: "from-purple-500 to-pink-500" },
    { name: "Biology", count: 7, icon: Target, color: "from-red-500 to-pink-500" },
    { name: "Motivation", count: 5, icon: Lightbulb, color: "from-indigo-500 to-purple-500" },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 gradient-text">Educational Blog</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert insights, study tips, and strategies to help you excel in your academic journey.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                className="pl-10 neon-border bg-gray-800/50 text-white"
                placeholder="Search articles, topics, or authors..."
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
                  <h3 className="font-semibold text-white text-sm">{category.name}</h3>
                  <p className="text-xs text-gray-400">{category.count} articles</p>
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
            <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Article</h2>
          </div>

          <Card className="glassmorphism hover-glow overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-600">{featuredPost.category}</Badge>
                  {featuredPost.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
                <Button className="neon-glow hover-glow bg-gradient-to-r from-blue-500 to-purple-600">
                  Read Full Article
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
            <h2 className="text-4xl font-bold mb-4 gradient-text">Latest Articles</h2>
            <p className="text-xl text-gray-300">Stay updated with our latest educational content</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="glassmorphism hover-glow overflow-hidden">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-600">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full neon-border hover-glow bg-transparent">
                    Read More
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
              <h2 className="text-4xl font-bold mb-4 gradient-text">Stay Updated</h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest study tips and educational insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email" className="neon-border bg-gray-800/50 text-white" />
                <Button className="neon-glow hover-glow bg-gradient-to-r from-blue-500 to-purple-600">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
