"use client";

import type React from "react";

import { useState } from "react";
import { useLanguage } from "../../../components/language-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Badge } from "../../../components/ui/badge";
import { CheckCircle, User, MapPin, BookOpen, Star } from "lucide-react";

export default function RegisterPage() {
  const { t } = useLanguage();
  const [selectedCourse, setSelectedCourse] = useState("");
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
  });

  const courses = [
    {
      id: t("iitJee1"),
      name: t("iitJee1"),
      price: "₹1,20,000",
      originalPrice: "₹1,50,000",
      discount: t("off"),
      duration: t("years"),
      features: [
        "Complete syllabus coverage",
        "Regular mock tests",
        "Study materials",
        "Doubt clearing sessions",
      ],
      popular: true,
    },
    {
      id: "neet-2year",
      name: t("neetFoundation"),
      price: "₹1,00,000",
      originalPrice: "₹1,25,000",
      discount: t("off2"),
      duration: t("years"),
      features: [
        "NCERT-based teaching",
        "Biology focus",
        "Regular assessments",
        "Lab sessions",
      ],
      popular: false,
    },
    {
      id: "aieee-1year",
      name: t("aieeePreparation"),
      price: "₹65,000",
      originalPrice: "₹80,000",
      discount: t("off3"),
      duration: t("years2"),
      features: [
        "Engineering mathematics",
        "Physics & Chemistry",
        "Problem solving",
        "Mock exams",
      ],
      popular: false,
    },
    {
      id: "class-11-12",
      name: t("class11And12"),
      price: "₹45,000",
      originalPrice: "₹55,000",
      discount: t("off4"),
      duration: t("year3"),
      features: [
        "Board preparation",
        "Competitive foundation",
        "Regular tests",
        "Personal attention",
      ],
      popular: false,
      registrationForm: "पंजीकरण फॉर्म",
      registeration1: "पंजीकरण प्रक्रिया पूरी करने के लिए अपनी जानकारी भरें",

      personalInformation: "व्यक्तिगत जानकारी",
      firstName: "पहला नाम *",
      enterFirstName: "अपना पहला नाम दर्ज करें",
      lastName: "अंतिम नाम *",
      enterLastName: "अपना अंतिम नाम दर्ज करें",
      emailAddress: "ईमेल पता *",
      enterEmail: "अपना ईमेल दर्ज करें",
      phoneNumber: "फ़ोन नंबर *",
      enterPhoneNumber: "अपना फ़ोन नंबर दर्ज करें",
      dateOfBirth: "जन्म तिथि *",
      dobFormat: "माह/दिन/वर्ष",
      preferredLanguage: "पसंदीदा भाषा",

      addressInformation: "पता जानकारी",
      address1: "पता *",
      enterAddress: "अपना पूरा पता दर्ज करें",
      city: "शहर *",
      enterCity: "अपना शहर दर्ज करें",
      state: "राज्य *",
      enterState: "अपना राज्य दर्ज करें",
      pinCode: "पिन कोड *",
      enterPinCode: "पिन कोड दर्ज करें",

      academicInformation: "शैक्षणिक जानकारी",
      selectedCourse: "चयनित कोर्स",
      pleaseSelectCourse: "कृपया ऊपर कोई कोर्स चुनें",
      previousEducation: "पिछली शिक्षा",
      selectCurrentClass: "अपनी वर्तमान कक्षा चुनें",

      parentGuardianInformation: "अभिभावक की जानकारी",
      parentGuardianName: "अभिभावक का नाम *",
      enterParentName: "अभिभावक का नाम दर्ज करें",
      parentPhoneNumber: "अभिभावक का फ़ोन नंबर *",
      enterParentPhoneNumber: "अभिभावक का फ़ोन नंबर दर्ज करें",

      emergencyContact: "आपातकालीन संपर्क",
      emergencyContactNumber: "आपातकालीन संपर्क नंबर",

      additionalInformation: "अतिरिक्त जानकारी",
      medicalConditions: "चिकित्सीय स्थितियां (यदि कोई हों)",
      mentionMedicalConditions:
        "कृपया किसी भी चिकित्सीय स्थिति या एलर्जी का उल्लेख करें",
      courseExpectations: "कोर्स से आपकी क्या अपेक्षाएं हैं?",
      enterExpectations: "आप इस कोर्स से क्या हासिल करना चाहते हैं?",

      termsAgreement: "मैं नियम और शर्तों तथा गोपनीयता नीति से सहमत हूं",
      receiveUpdates:
        "मैं ईमेल और एसएमएस के माध्यम से कोर्स, ऑफ़र और शैक्षिक सामग्री के अपडेट प्राप्त करना चाहता/चाहती हूं",
      completeRegistration: "पंजीकरण पूर्ण करें",
      registrationNote:
        "*हमारी टीम 24 घंटों के भीतर आपसे संपर्क करेगी ताकि आपके पंजीकरण की पुष्टि की जा सके।",
    },
  ];

  const trustSignals = [
    { icon: Star, text: t("yearsExperience1") },
    { icon: CheckCircle, text: t("studentsTrained1") },
    { icon: Star, text: t("successRate2") },
    { icon: CheckCircle, text: t("expertFaculty2") },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 gradient-text">
              {t("registerWithUs")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("regiterWithUsText1")}
            </p>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {trustSignals.map((signal, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-2 glassmorphism p-4 rounded-lg"
              >
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
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              {t("chooseYourCourse")}
            </h2>
            <p className="text-xl text-gray-300">
              {t("chooseYourCourseText1")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {courses.map((course) => (
              <Card
                key={course.id}
                className={`glassmorphism hover-glow cursor-pointer transition-all ${
                  selectedCourse === course.id ? "ring-2 ring-blue-500" : ""
                } ${course.popular ? "relative" : ""}`}
                onClick={() => {
                  setSelectedCourse(course.id);
                  setFormData((prev) => ({ ...prev, course: course.name }));
                }}
              >
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-600">
                      {t("mostPopular")}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 mb-2 w-fit mx-auto">
                    {course.discount}
                  </Badge>
                  <CardTitle className="text-lg gradient-text">
                    {course.name}
                  </CardTitle>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-400 line-through">
                      {course.originalPrice}
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {course.price}
                    </div>
                    <div className="text-sm text-gray-400">
                      {course.duration}
                    </div>
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
              <CardTitle className="text-3xl gradient-text text-center">
                {t("registrationForm")}
              </CardTitle>
              <CardDescription className="text-center text-gray-400">
                {t("registration1")}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-blue-400" />
                    {t("personalInformation")}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("firstName")}
                      </label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder={t("enterFirstName")}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("lastName")}
                      </label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder={t("enterLastName")}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("emailAddress")}
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder={t("enterEmail")}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("phoneNumber")}
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder={t("enterPhoneNumber")}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("dateOfBirth")}
                      </label>
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
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("preferredLanguage")}
                      </label>
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
                    {t("addressInformation")}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("address1")}
                      </label>
                      <Input
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder={t("enterAddress")}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("city")}
                      </label>
                      <Input
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder={t("enterCity")}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("state")}
                      </label>
                      <Input
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder={t("enterState")}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("pinCode")}
                      </label>
                      <Input
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder={t("enterPinCode")}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
                    {t("academicInformation")}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("selectedCourse")}
                      </label>
                      <Input
                        value={formData.course}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder={t("pleaseSelectCourse")}
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("previousEducation")}
                      </label>
                      <select
                        name="previousEducation"
                        value={formData.previousEducation}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 neon-border bg-gray-800/50 text-white rounded-md"
                      >
                        <option value="">{t("selectCurrentClass")}</option>
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
                    {t("parentGuardianInformation")}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("parentGuardianName")}
                      </label>
                      <Input
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder={t("enterParentName")}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("parentPhoneNumber")}
                      </label>
                      <Input
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder={t("enterParentPhoneNumber")}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("emergencyContact")}
                      </label>
                      <Input
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        placeholder={t("emergencyContactNumber")}
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {t("additionalInformation")}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("medicalConditions")} (if any)
                      </label>
                      <Textarea
                        name="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        rows={3}
                        placeholder={t("mentionMedicalConditions")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("courseExpectations")}
                      </label>
                      <Textarea
                        name="expectations"
                        value={formData.expectations}
                        onChange={handleInputChange}
                        className="neon-border bg-gray-800/50 text-white"
                        rows={3}
                        placeholder={t("enterExpectations")}
                      />
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-gray-300">
                      {" "}
                      <a href="#" className="text-blue-400 hover:underline">
                        {t("termsAgreement")}
                      </a>{" "}
                      {" "}
                      <a href="#" className="text-blue-400 hover:underline">
                        {/* {t("privacypolicy")} */}
                      </a>
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="updates" className="mt-1" />
                    <label htmlFor="updates" className="text-sm text-gray-300">
                      {t("receiveUpdates")}
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className=" hover-glow bg-gradient-to-r from-blue-500 to-purple-600 px-12 py-4 text-lg"
                    disabled={!selectedCourse}
                  >
                    {t("completeRegistration")}
                  </Button>
                  <p className="text-sm text-gray-400 mt-4">
                    {t("registrationNote")}
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
