"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "../../../components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Textarea } from "../../../components/ui/textarea"
import { Badge } from "../../../components/ui/badge"
import { CheckCircle, User, MapPin, BookOpen, Star } from "lucide-react"

export default function RegisterPage() {
  const { t } = useLanguage()
  const [selectedCourse, setSelectedCourse] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    course: "",
    preferredLanguage: "english",
    previousEducation: "",
    parentName: "",
    parentPhone: "",
    emergencyContact: "",
    medicalConditions: "",
    expectations: "",
  })

  const courses = [
    {
      id: "iit-jee-2year",
      name: "IIT-JEE Complete (2 Years)",
      price: "₹1,20,000",
      originalPrice: "₹1,50,000",
      discount: "20% OFF",
      duration: "2 Years",
      features: ["Complete syllabus coverage", "Regular mock tests", "Study materials", "Doubt clearing sessions"],
      popular: true,
    },
    {
      id: "neet-2year",
      name: "NEET Foundation (2 Years)",
      price: "₹1,00,000",
      originalPrice: "₹1,25,000",
      discount: "20% OFF",
      duration: "2 Years",
      features: ["NCERT-based teaching", "Biology focus", "Regular assessments", "Lab sessions"],
      popular: false,
    },
    {
      id: "aieee-1year",
      name: "AIEEE Preparation (1 Year)",
      price: "₹65,000",
      originalPrice: "₹80,000",
      discount: "19% OFF",
      duration: "1 Year",
      features: ["Engineering mathematics", "Physics & Chemistry", "Problem solving", "Mock exams"],
      popular: false,
    },
    {
      id: "class-11-12",
      name: "Class 11th & 12th",
      price: "₹45,000",
      originalPrice: "₹55,000",
      discount: "18% OFF",
      duration: "1 Year",
      features: ["Board preparation", "Competitive foundation", "Regular tests", "Personal attention"],
      popular: false,
    },
  ]

  const trustSignals = [
    { icon: Star, text: "25+ Years Experience" },
    { icon: CheckCircle, text: "15,000+ Students Trained" },
    { icon: Star, text: "95% Success Rate" },
    { icon: CheckCircle, text: "Expert Faculty" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 gradient-text">Register With Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of successful students and start your journey towards academic excellence.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 glassmorphism p-4 rounded-lg">
                <signal.icon className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">{signal.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Selection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Choose Your Course</h2>
            <p className="text-xl text-gray-300">Select the program that best fits your goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {courses.map((course) => (
              <Card
                key={course.id}
                className={`glassmorphism hover-glow cursor-pointer transition-all ${
                  selectedCourse === course.id ? "ring-2 ring-blue-500" : ""
                } ${course.popular ? "relative" : ""}`}
                onClick={() => {
                  setSelectedCourse(course.id)
                  setFormData((prev) => ({ ...prev, course: course.name }))
                }}
              >
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-600">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 mb-2 w-fit mx-auto">
                    {course.discount}
                  </Badge>
                  <CardTitle className="text-lg gradient-text">{course.name}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-400 line-through">{course.originalPrice}</div>
                    <div className="text-2xl font-bold text-white">{course.price}</div>
                    <div className="text-sm text-gray-400">{course.duration}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span className="text-gray-300 text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glassmorphism">
            <CardHeader>
              <CardTitle className="text-3xl gradient-text text-center">Registration Form</CardTitle>
              <CardDescription className="text-center text-gray-400">
                Fill in your details to complete the registration process
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-blue-400" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Date of Birth *</label>
                      <Input
                        name="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Language</label>
                      <select
                        name="preferredLanguage"
                        value={formData.preferredLanguage}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 neon-border bg-gray-800/50 text-white rounded-md"
                      >
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                        <option value="both">Both English & Hindi</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                    Address Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Address *</label>
                      <Input
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder="Enter your full address"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">City *</label>
                      <Input
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder="Enter your city"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">State *</label>
                      <Input
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder="Enter your state"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">PIN Code *</label>
                      <Input
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder="Enter PIN code"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
                    Academic Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Selected Course</label>
                      <Input
                        value={formData.course}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder="Please select a course above"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Previous Education</label>
                      <select
                        name="previousEducation"
                        value={formData.previousEducation}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 neon-border bg-gray-800/50 text-white rounded-md"
                      >
                        <option value="">Select your current class</option>
                        <option value="class-8">Class 8th</option>
                        <option value="class-9">Class 9th</option>
                        <option value="class-10">Class 10th</option>
                        <option value="class-11">Class 11th</option>
                        <option value="class-12">Class 12th</option>
                        <option value="12th-passed">12th Passed</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Parent/Guardian Information */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-blue-400" />
                    Parent/Guardian Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Parent/Guardian Name *</label>
                      <Input
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder="Enter parent/guardian name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Parent Phone Number *</label>
                      <Input
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder="Enter parent phone number"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Emergency Contact</label>
                      <Input
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder="Emergency contact number"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Additional Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Medical Conditions (if any)
                      </label>
                      <Textarea
                        name="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        rows={3}
                        placeholder="Please mention any medical conditions or allergies"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Expectations from the Course
                      </label>
                      <Textarea
                        name="expectations"
                        value={formData.expectations}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        rows={3}
                        placeholder="What do you hope to achieve from this course?"
                      />
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="terms" className="mt-1" required />
                    <label htmlFor="terms" className="text-sm text-gray-300">
                      I agree to the{" "}
                      <a href="#" className="text-blue-400 hover:underline">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-400 hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="updates" className="mt-1" />
                    <label htmlFor="updates" className="text-sm text-gray-300">
                      I would like to receive updates about courses, offers, and educational content via email and SMS
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="neon-glow hover-glow bg-gradient-to-r from-blue-500 to-purple-600 px-12 py-4 text-lg"
                    disabled={!selectedCourse}
                  >
                    Complete Registration
                  </Button>
                  <p className="text-sm text-gray-400 mt-4">
                    *Our team will contact you within 24 hours to confirm your registration
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
