"use client";

import { useLanguage } from "../../components/language-provider";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  BookOpen,
  Star,
  ChevronRight,
  Play,
  Award,
  Target,
  Zap,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "../../components/ui/badge";

export default function HomePage() {
  const { t } = useLanguage();

  const subjects = [
    { name: t("physics"), icon: Zap, color: "from-blue-500 to-cyan-500" },
    { name: t("chemistry"), icon: Target, color: "from-green-500 to-emerald-500" },
    {
      name:t("mathematics"),
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
    },
    { name: t("biology"), icon: Award, color: "from-orange-500 to-red-500" },
  ];

  const achievements = [
    { number: "15000+", label: t("studentsEnrolled") },
    { number: "95%", label: t("successRate")},
    { number: "500+", label:t("iitSelections")},
    { number: "25+", label: t("yearExperience")},
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      exam: "IIT-JEE AIR 45",
      text: "Aakash Institute transformed my approach to problem-solving. The faculty here is exceptional!",
      image: "/boy1.jpg?height=60&width=60",
    },
    {
      name: "Priya Patel",
      exam: "NEET AIR 120",
      text: "The systematic teaching methodology and regular tests helped me achieve my dream of becoming a doctor.",
      image: "/girl-motivation.jpg?height=60&width=60",
    },
    {
      name: "Amit Kumar",
      exam: "IIT-JEE AIR 78",
      text: "Best coaching institute in Delhi! The teachers are very supportive and knowledgeable.",
      image: "/boy3.jpg?height=60&width=60",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>

        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/hero-img.jpg"
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
          <div className="mb-8 ">
            <h1 className="text-5xl md:text-7xl text-box-auto font-bold mb-6 leading-[1.3] gradient-text">
              {t("heroTitle")}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {t("heroSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className=" hover-glow bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                {t("getStarted")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="neon-border  px-8 py-4 text-lg bg-transparent"
              >
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
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              {t("ourMission")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("missionText")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="glassmorphism hover-glow text-center"
              >
                <CardContent className="p-6">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {achievement.number}
                  </div>
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
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              {t("ourCoachingPrograms")}
            </h2>
            <p className="text-xl text-gray-300">
              {t("programsText")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className="glassmorphism hover-glow group cursor-pointer"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${subject.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <subject.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl gradient-text">
                    {subject.name}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {t("physicsText")}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* (rest of your code remains unchanged — Testimonials, Packages, Contact) */}
    </div>
  );
}
