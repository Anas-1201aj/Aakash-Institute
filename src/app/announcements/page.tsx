"use client"

import { useState } from "react"
import { useLanguage } from "../../../components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import { Badge } from "../../../components/ui/badge"
import { Input } from "../../../components/ui/input"
import { Calendar, Clock, Search, Bell, BookOpen, Users, Award, AlertCircle, Info, CheckCircle } from "lucide-react"

export default function AnnouncementsPage() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { id: "all", name: "All", count: 15, icon: Bell },
    { id: "admissions", name: "Admissions", count: 5, icon: Users },
    { id: "exams", name: "Exams", count: 4, icon: BookOpen },
    { id: "results", name: "Results", count: 3, icon: Award },
    { id: "events", name: "Events", count: 3, icon: Calendar },
  ]

  const announcements = [
    {
      id: 1,
      title: "New Batch Admissions Open for IIT-JEE 2025",
      description: "Limited seats available for our comprehensive IIT-JEE preparation program starting April 2024.",
      category: "admissions",
      priority: "high",
      date: "2024-03-15",
      time: "10:00 AM",
      author: "Admissions Team",
      tags: ["IIT-JEE", "Admissions", "2025"],
      content:
        "We are excited to announce the opening of admissions for our IIT-JEE 2025 batch. This comprehensive 14-month program includes complete syllabus coverage, regular mock tests, and personalized doubt clearing sessions.",
      important: true,
    },
    {
      id: 2,
      title: "NEET Mock Test Series - Registration Now Open",
      description: "Comprehensive mock test series designed to simulate actual NEET exam conditions.",
      category: "exams",
      priority: "medium",
      date: "2024-03-12",
      time: "2:00 PM",
      author: "Academic Team",
      tags: ["NEET", "Mock Tests", "Registration"],
      content:
        "Our NEET mock test series includes 20 full-length tests, detailed performance analysis, and all-India ranking. Early bird discount of 20% available till March 31st.",
      important: false,
    },
    {
      id: 3,
      title: "Scholarship Results Announced",
      description: "Results for the Aakash Merit Scholarship Test are now available on the student portal.",
      category: "results",
      priority: "high",
      date: "2024-03-10",
      time: "11:30 AM",
      author: "Scholarship Committee",
      tags: ["Scholarship", "Results", "Merit"],
      content:
        "Congratulations to all scholarship winners! Selected students will receive up to 50% fee waiver. Check your results on the student portal using your registration number.",
      important: true,
    },
    {
      id: 4,
      title: "Parent-Teacher Meeting Scheduled",
      description: "Monthly parent-teacher meeting to discuss student progress and upcoming exam strategies.",
      category: "events",
      priority: "medium",
      date: "2024-03-08",
      time: "4:00 PM",
      author: "Academic Coordinator",
      tags: ["PTM", "Parents", "Progress"],
      content:
        "Join us for our monthly parent-teacher meeting on March 20th, 2024. Discuss your child's academic progress, upcoming exam strategies, and address any concerns.",
      important: false,
    },
    {
      id: 5,
      title: "Holiday Notice - Holi Celebration",
      description: "Institute will remain closed on March 25th for Holi celebrations.",
      category: "events",
      priority: "low",
      date: "2024-03-05",
      time: "9:00 AM",
      author: "Administration",
      tags: ["Holiday", "Holi", "Closure"],
      content:
        "The institute will remain closed on March 25th, 2024, for Holi celebrations. Regular classes will resume on March 26th. Wishing everyone a colorful and joyous Holi!",
      important: false,
    },
    {
      id: 6,
      title: "JEE Main 2024 Results - Counseling Guidance",
      description:
        "Free counseling session for JEE Main qualified students for college selection and admission process.",
      category: "results",
      priority: "high",
      date: "2024-03-03",
      time: "3:00 PM",
      author: "Counseling Team",
      tags: ["JEE Main", "Counseling", "Admissions"],
      content:
        "Congratulations to all JEE Main qualified students! Join our free counseling session to understand the admission process, college selection criteria, and document requirements.",
      important: true,
    },
    {
      id: 7,
      title: "New Faculty Joining - Dr. Priya Sharma",
      description: "Welcoming Dr. Priya Sharma, Ph.D. in Organic Chemistry, to our chemistry department.",
      category: "admissions",
      priority: "medium",
      date: "2024-03-01",
      time: "1:00 PM",
      author: "HR Department",
      tags: ["Faculty", "Chemistry", "New Joining"],
      content:
        "We are pleased to welcome Dr. Priya Sharma to our chemistry faculty. With 12 years of teaching experience and expertise in organic chemistry, she will be teaching our NEET and JEE batches.",
      important: false,
    },
    {
      id: 8,
      title: "Online Classes Schedule Update",
      description: "Updated schedule for online classes due to technical maintenance.",
      category: "exams",
      priority: "medium",
      date: "2024-02-28",
      time: "10:30 AM",
      author: "IT Department",
      tags: ["Online Classes", "Schedule", "Maintenance"],
      content:
        "Due to server maintenance on March 5th, online classes will be rescheduled. All affected students will receive individual notifications with the new timings.",
      important: false,
    },
  ]

  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesFilter = activeFilter === "all" || announcement.category === activeFilter
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="w-4 h-4 text-red-400" />
      case "medium":
        return <Info className="w-4 h-4 text-yellow-400" />
      case "low":
        return <CheckCircle className="w-4 h-4 text-green-400" />
      default:
        return <Info className="w-4 h-4 text-blue-400" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-red-500 bg-red-500/10"
      case "medium":
        return "border-yellow-500 bg-yellow-500/10"
      case "low":
        return "border-green-500 bg-green-500/10"
      default:
        return "border-blue-500 bg-blue-500/10"
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 gradient-text">Announcements & News</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest news, admission updates, exam schedules, and important announcements.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                className="pl-10 neon-border bg-gray-800/50 text-white"
                placeholder="Search announcements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 ${
                  activeFilter === category.id
                    ? " bg-gradient-to-r from-blue-500 to-purple-600"
                    : "neon-border bg-transparent hover-glow"
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Important Announcements */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 gradient-text flex items-center">
              <Bell className="w-8 h-8 mr-3 text-red-400" />
              Important Announcements
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {filteredAnnouncements
              .filter((announcement) => announcement.important)
              .slice(0, 2)
              .map((announcement) => (
                <Card key={announcement.id} className="glassmorphism hover-glow border-red-500/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {getPriorityIcon(announcement.priority)}
                          <Badge className="bg-red-500/20 text-red-400 border-red-500">Important</Badge>
                          <Badge variant="outline" className="text-xs">
                            {announcement.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl gradient-text mb-2">{announcement.title}</CardTitle>
                        <CardDescription className="text-gray-300">{announcement.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{announcement.content}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{announcement.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{announcement.time}</span>
                        </div>
                      </div>
                      <span>{announcement.author}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {announcement.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Announcements */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 gradient-text">All Announcements</h2>
            <p className="text-gray-300">
              Showing {filteredAnnouncements.length} announcement{filteredAnnouncements.length !== 1 ? "s" : ""}
              {activeFilter !== "all" && ` in ${categories.find((c) => c.id === activeFilter)?.name}`}
            </p>
          </div>

          <div className="space-y-6">
            {filteredAnnouncements.map((announcement) => (
              <Card
                key={announcement.id}
                className={`glassmorphism hover-glow ${getPriorityColor(announcement.priority)}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        {getPriorityIcon(announcement.priority)}
                        {announcement.important && (
                          <Badge className="bg-red-500/20 text-red-400 border-red-500">Important</Badge>
                        )}
                        <Badge variant="outline" className="text-xs capitalize">
                          {announcement.category}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`text-xs capitalize ${
                            announcement.priority === "high"
                              ? "border-red-500 text-red-400"
                              : announcement.priority === "medium"
                                ? "border-yellow-500 text-yellow-400"
                                : "border-green-500 text-green-400"
                          }`}
                        >
                          {announcement.priority} priority
                        </Badge>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2">{announcement.title}</h3>
                      <p className="text-gray-300 mb-3">{announcement.description}</p>
                      <p className="text-gray-400 text-sm mb-4">{announcement.content}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {announcement.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{announcement.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{announcement.time}</span>
                          </div>
                        </div>
                        <span>By {announcement.author}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAnnouncements.length === 0 && (
            <Card className="glassmorphism text-center">
              <CardContent className="p-12">
                <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No announcements found</h3>
                <p className="text-gray-400">
                  {searchTerm ? "Try adjusting your search terms" : "No announcements in this category"}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glassmorphism text-center">
            <CardContent className="p-12">
              <Bell className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4 gradient-text">Never Miss an Update</h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our notifications to get instant updates on admissions, exams, and important announcements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email" className="neon-border bg-gray-800/50 text-white" />
                <Button className=" hover-glow bg-gradient-to-r from-blue-500 to-purple-600">Subscribe</Button>
              </div>
              <p className="text-sm text-gray-400 mt-4">You can unsubscribe at any time. We respect your privacy.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
