"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "hi";

// ✅ Complete translations object with all keys
const translations = {
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    achievements: "Achievements",
    blog: "Blog",
    register: "Register",
    quiz: "Quiz",
    announcements: "Announcements",
    contact: "Contact Us",
    heroTitle: "Shape Your Future with Excellence",
    heroSubtitle:
      "Premier coaching institute for IIT-JEE, NEET & competitive exams",
    getStarted: "Get Started",
    learnMore: "Learn More",
    ourMission: "Our Mission",
    missionText:
      "To provide world-class education and guidance to help students achieve their dreams in competitive examinations.",
    toppers: "Our Toppers",
    testimonials: "What Students Say",
    contactUs: "Contact Us",
    studentsEnrolled: "Students Enrolled",
    ourCoachingPrograms: "Our Coaching Programs",
    programsText:
      "Comprehensive coaching programs designed to help students excel in competitive exams and academic pursuits.",

    phone: "Phone",
    email: "Email",
    address: "Address",
    followUs: "Follow Us",
    ourServices: "Our Services",
    servicesText:
      "Comprehensive coaching programs designed to help students excel in competitive exams and academic pursuits.",
    successRate: "Success Rate",
    iitSelections: "IIT Selections",
    yearExperience: "Years Experience",
    physics: "Physics",
    chemistry: "Chemistry",
    mathematics: "Mathematics",
    biology: "Biology",
    physicsText:
      "Comprehensive coaching with expert faculty and proven methodologies to help students",
    quickLinks: "Quick Links",
    aboutAakash: "About Aakash Institute",
    aboutText:
      "Empowering students to achieve their dreams through quality education and unwavering support since 1999.",
    ourStory: "Our Story",
    storyText1:
      "Founded in 1999 with a vision to provide world-class education, Aakash Institute has been at the forefront of competitive exam preparation in India. What started as a small coaching center has now grown into one of the most trusted names in education",
    storyText2:
      "Our journey has been marked by numerous milestones, including the establishment of our flagship program, the IIT-JEE coaching program, and the NEET coaching program, which have consistently led to the success of our students and their academic pursuits.",
    storyText3:
      "Today, Aakash Institute is a household name, synonymous with excellence in education. Our commitment to quality education and personalized attention has made us the preferred choice for students and parents across the country.",
    Mission: "Our Mission",
    Text: "To provide world-class education and guidance to help students achieve their dreams in competitive examinations",
    Vision: "Vision",
    Text1:
      "To be the leading coaching institute in India, dedicated to helping students excel in competitive examinations and academic pursuits.",
    expertFaculty: "Expert Faculty",
    facultyText: "Meet our experienced and dedicated teachers",
    rajeshKumar: "Rajesh Kumar",
    rajeshKumarText1: "Physics",
    rajeshKumarText2: "Ph.D. IIT Delhi",
    rajeshKumarText3: "15 Years Experience",
    rajeshKumarText4: "Mechanics & Thermodynamics",
    sunitaSharma: "Sunita Sharma",
    sunitaSharmaText1: "Chemistry",
    sunitaSharmaText2: "M.Sc. IIT Delhi",
    sunitaSharmaText3: "12 Years Experience",
    sunitaSharmaText4: "Organic Chemistry",
    anasJaved: "Anas Javed",
    anasJavedText1: "Mathematics",
    anasJavedText2: "M.Tech. IIT Bombay",
    anasJavedText3: "18 Years Experience",
    anasJavedText4: "Calculus & Algebra",
    priyaPatel: "Priya Patel",
    priyaPatelText1: "Biology",
    priyaPatelText2: "M.Sc. IIT Bombay",
    priyaPatelText3: "12 Years Experience",
    priyaPatelText4: "Organic Biology",
    coreValue: "Our Core Values",
    coreValueText: "The principles that guide everything we do",
    excellence: "Excellence",
    excellenceText:
      "We strive for excellence in everything we do, from our teaching methods to our commitment to student success.",
    care: "Care",
    careText:
      "We care deeply about our students and their families, providing personalized attention and support",
    innovation: "Innovation",
    innovationText:
      "We continuously innovate and improve our methods and programs to stay ahead of the curve of competitive examinations.",
    community: "Community",
    communityText:
      "We believe in building a strong community of students, teachers, and parents who work together to achieve their goals.",
    teachingMethods: "Our Teaching Methodology",
    teachingMethodsText: "Proven methods that deliver results",
    conceptualLearning: "Conceptual Learning",
    conceptualLearningText:
      "We focus on building strong conceptual foundations rather than rote learning, ensuring students understand the 'why' behind every concept.",
    regularAssesments: "Regular Assessments",
    regularAssesmentsText:
      "Continuous evaluation through tests and assignments helps track progress and identify areas that need improvement.",
    personalizedAttention: "Personal Attention",
    personalizedAttentionText:
      "Small batch sizes ensure that every student receives individual attention and personalized guidance from our faculty.",
    competitiveExams: "Competitive Exam Preparation",
    competitiveExamsText: "Expert coaching for India's toughest entrance exams",
    iitJee: "IIT-JEE Preparation",
    iitJeeText:
      "Comprehensive coaching for IIT-JEE Main & Advanced with expert faculty and proven methodology",
    // iitJeeText1:"2 Years",
    // iitJeeText2:"25-30 students",
    iitJeeText3: "Complete syllabus coverage",
    iitJeeText4: "Regular mock tests",
    iitJeeText5: "Performance analysis",
    iitJeeText6: "Study materials included",
    iitJeeText7: "₹1,50,000/year",
    iitJeeText8: "EnrollNow",

    neet: "NEET Preparation",
    neetText1:
      "Comprehensive coaching for NEET with expert faculty and proven methodology",
    neetText2: "2 Years",
    neetText3: "25-30 students",
    neetText4: "NCERT-based teaching",
    neetText5: "Medical entrance focus",
    neetText6: "Regular assessments",
    neetText7: "Biology lab sessions",
    neetText8: "Previous year papers",
    neetText9: "₹1,25,000/year",
    neetText10: "Enroll Now",
    aieee: "AIEEE Preparation",
    aieeeText1:
      "Targeted preparation for AIEEE with emphasis on engineering fundamentals.",
    aieeeText2: "2 Years",
    aieeeText3: "25-30 students",
    aieeeText4: "Engineering mathematics",
    aieeeText5: " Physics & Chemistry",
    aieeeText6: "Problem-solving techniques",
    aieeeText7: "Time management",
    aieeeText8: "Mock examinations",
    aieeeText9: "₹80,000/year",
    aieeeText10: "Enroll Now",
    schoolClasses: "School Classes",
    schoolClassesText1: "Strong foundation for academic excellence",
    class9th: "Class 9th",
    class9thText1: "Foundation building with conceptual clarity",
    class9thText2: "Subjects:",
    class9thText3: "Mathematics",
    class9thText4: "Science",
    class9thText5: "English",
    class9thText6: "Social Studies",
    class9thText7: "₹25,000/year",
    class9thText8: "Learn More",
    class10th: "Class 10th",
    class10thText1: "Board exam preparation with competitive edge",
    class10thText2: "Subjects",
    class10thText3: "Mathematics",
    class10thText4: "Science",
    class10thText5: "English",
    class10thText6: "Social Studies",
    class10thText7: "₹30,000/year",
    class10thText8: "Learn More",
    class11th: "Class 11th",
    class11thText1: "Advanced concepts with JEE/NEET foundation",
    class11thText2: "Subjects:",
    class11thText3: "Physics",
    class11thText4: "Chemistry",
    class11thText5: "Mathematics",
    class11thText6: "Biology",
    class11thText7: "₹45,000/year",
    class11thText8: "Learn More",
    class12th: "Class 12th",
    class12thText1: "Board + competitive exam preparation",
    class12thText2: "Subjects:",
    class12thText3: "Physics",
    class12thText4: "Chemistry",
    class12thText5: "Mathematics",
    class12thText6: "Biology",
    class12thText7: "₹50,000/year",
    class12thText8: "Learn More",
    additionalServices: "Additional Services",
    additionalServicesText1: "Extra support to ensure your success",
    doubtClearingSeesions: "Doubt Clearing Sessions",
    doubtClearingSeesionsText1:
      "One-on-one sessions to clear individual doubts",
    testSeries: "Test Series",
    testSeriesText1: "Regular mock tests and practice papers",
    studyMaterials: "Study Materials",
    studyMaterialsText1: "Comprehensive books and digital resources",
    carrerCounseling: "Career Counseling",
    carrerCounselingText1: "Guidance for career choices and college selection",
    whyChooseAakashInstitute: "Why Choose Aakash Institute?",
    whyChooseAakashInstituteText1: "What makes us different from others",
    provenTrackRecord: "Proven Track Record",
    provenTrackRecordText1:
      "25+ years of excellence with thousands of successful students in top colleges.",
    expertFaculty1: "Expert Faculty",
    expertFacultyText1:
      "Highly qualified teachers with years of experience in competitive exam coaching.",
    personalizedAttention1: "Personalized Attention",
    personalizedAttentionText1:
      "Small batch sizes ensure individual attention and customized learning approach.",

    startJourney: "Ready to Start Your Journey?",
    startJourneyText1:
      "Join thousands of successful students who achieved their dreams with Aakash Institute.",
    startJourneyText2: "Register Now",
    startJourneyText3: "Contact Us",
    ourAchievements: "Our Achievements",
    ourAchievementsText1:
      "Celebrating 25+ years of excellence in education with outstanding results and student success stories.",
    studentsTrained: "Students Trained",
    success: "Success Rate",
    iitSelection: "IIT Selection",
    yearsExperience: "Years Experience",
    ourTOp: "Our Top Performers 2024",
    ourTopPerformers: "Meet our star students who achieved remarkable success",
    arjunMehta: "Arjun Mehta",
    arjunMehtaText1: "IIT-JEE AIR 12",
    arjunMehtaText2: "IIT Delhi",
    arjunMehtaText3: "MBBS",
    arjunMehtaText4:
      "Aakash Institute made my IIT dream come true with their excellent guidance",
    snehaSharma: "Sneha Sharma",
    snehaSharmaText1: "NEET AIR 45",
    snehaSharmaText2: "AIIMS Delhi",
    snehaSharmaText3: "MBBS",
    snehaSharmaText4:
      "he systematic approach and regular tests helped me crack NEET",
    rohitKumar: "Rohit Kumar",
    rohitKumarText1: "IIT-JEE AIR 12",
    rohitKumarText2: "IIT Bombay",
    rohitKumarText3: "Machenical Engineering",
    rohitKumarText4: "Best faculty and study materials. Highly recommended",
    priyaPatel1: "Priya Patel",
    priyaPatel2: "NEET AIR 156",
    priyaPatel3: "JIPMER",
    priyaPatel4: "MBBS",
    priyaPatel5: "The doubt clearing sessions were extremely helpful.",
    vikasSingh: "Vikas Singh",
    vikasSinghText1: "IIT-JEE AIR 224",
    vikasSinghText2: "IIT Kanpur",
    vikasSinghText3: "Electrical Engineering",
    vikasSinghText4:
      "Excellent coaching with personal attention to each student.",
    ananyaGupta: "Ananya Gupta",
    ananyaGuptaText1: "NEET AIR 289",
    ananyaGuptaText2: "KGMU Lucknow",
    ananyaGuptaText3: "MBBS",
    ananyaGuptaText4: "The mock tests prepared me well for the actual exam.",
    yearWiseResults: "Year-wise Results",
    yearWiseResultsText:"Consistent excellence over the years",
    iitSelection1: "IIT Selection",
    neetSelection2: "NEET Selection",
    successRate1: "Success Rate",
    students:"Students",


  },
  hi: {
    home: "होम",
    about: "हमारे बारे में",
    services: "सेवाएं",
    achievements: "उपलब्धियां",
    blog: "ब्लॉग",
    register: "पंजीकरण",
    quiz: "क्विज़",
    announcements: "घोषणाएं",
    contact: "संपर्क करें",
    heroTitle: "उत्कृष्टता के साथ अपना भविष्य बनाएं",
    heroSubtitle:
      "IIT-JEE, NEET और प्रतियोगी परीक्षाओं के लिए प्रमुख कोचिंग संस्थान",
    getStarted: "शुरू करें",
    learnMore: "और जानें",
    ourMission: "हमारा मिशन",
    missionText:
      "प्रतियोगी परीक्षाओं में छात्रों के सपनों को साकार करने के लिए विश्वस्तरीय शिक्षा और मार्गदर्शन प्रदान करना।",
    toppers: "हमारे टॉपर्स",
    testimonials: "छात्र क्या कहते हैं",
    contactUs: "संपर्क करें",
    studentsEnrolled: "पंजीकृत छात्र",
    ourCoachingPrograms: "हमारे कोचिंग प्रोग्राम",
    programsText: "सभी प्रमुख विषयों में विशेषज्ञ मार्गदर्शन",
    phone: "फोन",
    email: "ईमेल",
    address: "पता",
    followUs: "हमें फॉलो करें",
    ourServices: "हमारे सेवाएं",
    servicesText:
      "उत्कृष्ट अपना भविष्य बनाने के लिए विश्वस्तरीय कोचिंग प्रोग्राम।",
    successRate: "सफलता दर",
    iitSelections: "IIT चुनाव",
    yearExperience: "वर्षों का अनुभव",
    physics: "भौतिकी",
    chemistry: "रसायन विज्ञान",
    mathematics: "गणित",
    biology: " जीवविज्ञान",
    physicsText:
      "उत्कृष्ट अपना भविष्य बनाने के लिए विश्वस्तरीय कोचिंग प्रोग्राम।",
    quickLinks: "क्विक लिंक्स",
    aboutAakash: " आकाश संस्थान के बारे में",
    aboutText:
      "छात्रों को अपने सपनों को साकार करने के लिए विश्वस्तरीय शिक्षा और मार्गदर्शन प्रदान करना।",
    ourStory: "हमारा इतिहास",
    storyText1:
      "1999 में विश्वस्तरीय शिक्षा प्रदान करने के दृष्टिकोण के साथ स्थापित, Aakash Institute भारत में प्रतियोगी परीक्षाओं की तैयारी के क्षेत्र में अग्रणी रहा है। एक छोटे से कोचिंग सेंटर के रूप में शुरू हुआ यह संस्थान आज शिक्षा के क्षेत्र में सबसे विश्वसनीय नामों में से एक बन गया है।",
    storyText2:
      "हमारी यात्रा एक सरल विश्वास के साथ शुरू हुई: हर छात्र अपने सपनों को पूरा करने के लिए सर्वोत्तम मार्गदर्शन का हकदार है। वर्षों से, हमने हजारों छात्रों को IIT-JEE, NEET और विभिन्न अन्य प्रतियोगी परीक्षाओं को सफलतापूर्वक उत्तीर्ण करने में मदद की है।",
    storyText3:
      "आज, हम उत्कृष्टता, नवाचार और छात्र सफलता की विरासत के साथ गर्व से खड़े हैं। गुणवत्तापूर्ण शिक्षा और व्यक्तिगत ध्यान के प्रति हमारी प्रतिबद्धता ने हमें देशभर के छात्रों और अभिभावकों की पहली पसंद बना दिया है।",
    Mission: "हमारा मिशन",
    Text: "प्रतियोगी परीक्षाओं में छात्रों के सपनों को साकार करने के लिए विश्वस्तरीय शिक्षा और मार्गदर्शन प्रदान करना।",
    Vision: "विश्वसनीयता",
    Text1:
      "छात्रों को अपने सपनों को पूरा करने के लिए सर्वोत्तम मार्गदर्शन का हकदार है।",
    expertFaculty: "विशेषज्ञ शिक्षक",
    facultyText: "हमारे अनुभवी और समर्पित शिक्षकों से मिलिए",
    rajeshKumar: "डॉक्टर.राजेश कुमार",
    rajeshKumarText1: "भौतिकी",
    rajeshKumarText2: "पीएच.डी., आईआईटी दिल्ली",
    rajeshKumarText3: "अध्यापन के 15+ वर्षों में विशेषज्ञ शिक्षक",
    rajeshKumarText4: "यांत्रिकी और ऊष्मागतिकी",
    sunitaSharma: "डॉक्टर. सुनिता शर्मा",
    sunitaSharmaText1: "कार्बनिक और अकार्बनिक रसायन",
    sunitaSharmaText2: "एम.एससी रसायन शास्त्र ",
    sunitaSharmaText3: "अध्यापन के 12+ वर्षों में विशेषज्ञ शिक्षक",
    sunitaSharmaText4: "कार्बनिक और अकार्बनिक रसायन",
    anasJaved: "डॉक्टर. अनस जावेद",
    anasJavedText1: "गणित",
    anasJavedText2: " एम.टेक., आईआईटी बॉम्बे",
    anasJavedText3: "अध्यापन के 18+ वर्षों में विशेषज्ञ शिक्षक",
    anasJavedText4: " कलन और बीजगणित",
    priyaPatel: "डॉक्टर. प्रिया पाटेल",
    priyaPatelText1: "जीवविज्ञान",
    priyaPatelText2: " पीएच.डी., वनस्पति विज्ञान",
    priyaPatelText3: "अध्यापन के 10+ वर्षों में विशेषज्ञ शिक्षक",
    priyaPatelText4: "अनुवांशिकी और पारिस्थितिकी",
    coreValue: "कोर वैल्यू",
    coreValueText: "सभी कार्यों की आधार को गुणवत्ता के निर्देश पर आधारित हैं",
    excellence: "उत्कृष्टि",
    excellenceText:
      "हम जो कुछ भी करते हैं — पढ़ाई से लेकर छात्र सहायता तक — उसमें उत्कृष्टता प्राप्त करने का प्रयास करते हैं।",
    care: "स्वास्थ्य",
    careText: "हम अपने छात्रों को स्वास्थ्य और विकास के लिए सहायक हैं।",
    innovation: "नवाचार",
    innovationText: "हम अपने शिक्षण और छात्र सहायता के लिए नवाचार करते हैं।",
    community: "समुदाय",
    communityText:
      "हम अपने छात्रों को समुदाय में जोड़ने और उनके लिए सहायक हैं।",
    teachingMethods: "हमारे शिक्षण विधि",
    teachingMethodsText: "सिद्ध तरीक़े जो परिणाम सुनिश्चित करते हैं",
    conceptualLearning: "कन्सेप्टुअल लर्निंग",
    conceptualLearningText:
      " हम रटने की बजाय मज़बूत वैचारिक नींव तैयार करने पर ज़ोर देते हैं, जिससे छात्र हर अवधारणा के पीछे का ‘क्यों’ समझ सकें।",
    regularAssesments: "सारी परीक्षा",
    regularAssesmentsText:
      "परीक्षणों और असाइनमेंट्स के माध्यम से निरंतर मूल्यांकन प्रगति को ट्रैक करने और सुधार की आवश्यकता वाले क्षेत्रों की पहचान करने में मदद करता है।",
    personalizedAttention: "व्यक्तिगत ध्यान",
    personalizedAttentionText:
      " छोटे बैच का आकार सुनिश्चित करता है कि हर छात्र को व्यक्तिगत ध्यान और हमारे फैकल्टी से व्यक्तिगत मार्गदर्शन मिले।",
    competitiveExams: "कंपेटिटिव एक्साम",
    competitiveExamsText:
      "भारत की सबसे कठिन प्रवेश परीक्षाओं के लिए विशेषज्ञ कोचिंग",
    iitJee: "आईआईटी-जेईई की तैयारी",
    iitJeeText:
      "आईआईटी-जेईई मेन और एडवांस्ड के लिए विशेषज्ञ फैकल्टी और सिद्ध पद्धति के साथ व्यापक कोचिंग",
    iitJeeText1: "2 वर्ष",
    iitJeeText2: "25-30 छात्र",
    iitJeeText3: "संपूर्ण सिल्बूल",
    iitJeeText4: "संपूर्ण प्रैक्टिस सेट्स",
    iitJeeText5: "प्रदर्शन विश्लेषण",
    iitJeeText6: "अध्ययन सामग्री सम्मिलित है",
    iitJeeText7: "₹1,50,000/वर्ष",
    iitJeeText8: "अभी नामांकन करें",
    neet: "नीट की तैयारी",
    neetText1:
      "नीट के लिए विशेषज्ञ फैकल्टी और सिद्ध पद्धति के साथ व्यापक कोचिंग",
    neetText2: "2 वर्ष",
    neetText3: "20-25 छात्र",
    neetText4: "एनसीईआरटी आधारित शिक्षण",
    neetText5: "मेडिकल प्रवेश पर केंद्रित",
    neetText6: "नियमित मूल्यांकन",
    neetText7: "जीवविज्ञान प्रयोगशाला सत्र",
    neetText8: "पिछले वर्षों की पेपर",
    neetText9: "₹1,00,000/वर्ष",
    neetText10: "अभी नामांकन करें",
    aieee: "AIEEE की तैयारी",
    aieeeText1:
      "AIEEE की लक्षित तैयारी, इंजीनियरिंग की मूल अवधारणाओं पर विशेष जोर के साथ।",
    aieeeText2: "2 वर्ष",
    aieeeText3: "20-25 छात्र",
    aieeeText4: "अभियांत्रिकी गणित",
    aieeeText5: "भौतिकी और रसायन",
    aieeeText6: "समस्या-समाधान की तकनीकें",
    aieeeText7: "समय प्रबंधन",
    aieeeText8: "प्रशिक्षण परीक्षाएँ",
    aieeeText9: "₹1,00,000/वर्ष",
    aieeeText10: "अभी नामांकन करें",
    schoolClasses: "स्कूल क्लासेस",
    schoolClassesText1: "शैक्षणिक उत्कृष्टता के लिए मजबूत आधार",
    class9th: "क्लास 9",
    class9thText1: "सैद्धांतिक स्पष्टता के साथ आधार निर्माण",
    class9thText2: "विषय",
    class9thText3: " गणित",
    class9thText4: "विज्ञान",
    class9thText5: "अंग्रेज़ी",
    class9thText6: "सामाजिक विज्ञान",
    class9thText7: "₹25,000 प्रति वर्ष",
    class9thText8: "अधिक जानें",
    class10th: "क्लास 10",
    class10thText1: "प्रतियोगी बढ़त के साथ बोर्ड परीक्षा की तैयारी",
    class10thText2: "विषय",
    class10thText3: " गणित",
    class10thText4: "विज्ञान",
    class10thText5: "अंग्रेज़ी",
    class10thText6: "सामाजिक विज्ञान",
    class10thText7: "₹30,000 प्रति वर्ष",
    class10thText8: "अधिक जानें",
    class11th: "क्लास 11",
    class11thText1: "Advanced concepts with JEE/NEET foundation",
    class11thText2: "विषय",
    class11thText3: "भौतिक विज्ञान",
    class11thText4: "रसायन विज्ञान",
    class11thText5: "गणित",
    class11thText6: "जीवविज्ञान",
    class11thText7: "₹45,000/प्रति वर्ष",
    class11thText8: "अधिक जानें",
    class12th: "क्लास 12",
    class12thText1: "बोर्ड तथा प्रतियोगी परीक्षाओं की संयुक्त तैयारी",
    class12thText2: "विषय",
    class12thText3: "भौतिक विज्ञान",
    class12thText4: "रसायन विज्ञान",
    class12thText5: "गणित",
    class12thText6: "जीवविज्ञान",
    class12thText7: "₹45,000/प्रति वर्ष",
    class12thText8: "अधिक जानें",
    additionalServices: "अतिरिक्त सेवाएं",
    additionalServicesText1: "आपकी सफलता सुनिश्चित करने के लिए अतिरिक्त सहायता",
    doubtClearingSeesions: "दोष क्लियरिंग सेशन",
    doubtClearingSeesionsText1: "व्यक्तिगत संदेह दूर करने के लिए एक-से-एक सत्र",
    testSeries: "परीक्षा सीरीज",
    testSeriesText1: "नियमित मॉक टेस्ट और अभ्यास पत्र",
    studyMaterials: "स्टडी मैटेरियल",
    studyMaterialsText1: "व्यापक पुस्तकें और डिजिटल संसाधन",
    carrerCounseling: "कैरियर काउंसलिंग",
    carrerCounselingText1: "करियर विकल्पों और कॉलेज चयन के लिए मार्गदर्शन",
    whyChooseAakashInstitute: "आकाश इंस्टीट्यूट क्यों चुनें",
    whyChooseAakashInstituteText1: "क्या चीज़ हमें दूसरों से अलग बनाती है",
    provenTrackRecord: "प्रमुख ट्रैक रिकॉर्ड",
    provenTrackRecordText1:
      "25 वर्षों से अधिक की उत्कृष्टता और हजारों सफल छात्र देश के प्रमुख कॉलेजों में सफल रही हैं",
    expertFaculty1: "विशेषज्ञ शिक्षक",
    expertFacultyText1:
      "प्रतियोगी परीक्षा कोचिंग में वर्षों का अनुभव रखने वाले उच्च योग्य शिक्षक",
    personalizedAttention1: "व्यक्तिगत संदेह",
    personalizedAttentionText1:
      "छोटी बैचों से प्रत्येक छात्र को व्यक्तिगत ध्यान और अनुकूलित शिक्षण पद्धति मिलती है",
    startJourney: "आप शुरू करना चाहते हैं?",
    startJourneyText1:
      "आकाश इंस्टीट्यूट के साथ अपने सपनों को साकार करने वाले हजारों सफल छात्रों में शामिल हों",
    startJourneyText2: "अभी पंजीकरण करें",
    startJourneyText3: " संपर्क करें",
    ourAchievements: "हमारी उत्कृष्टता",
    ourAchievementsText1:
      "शिक्षा के क्षेत्र में 25+ वर्षों की उत्कृष्टता का उत्सव, शानदार परिणामों और छात्र सफलता की कहानियों के साथ हमारी उत्कृष्टता का उत्सव",
    studentsTrained: "शिक्षित छात्र",
    success: "सफलता दर",
    iitSelection: "IIT चयन",
    yearsExperience: "वर्षों का अनुभव",
    ourTOp: "हमारी उत्कृष्टता 2024",
    ourTopPerformers:
      "हमारे स्टार छात्रों से मिलिए जिन्होंने शानदार सफलता हासिल की",
    arjunMehta: "अर्जुन मेहता",
    arjunMehtaText1: "आईआईटी-जेईई एआईआर 12",
    arjunMehtaText2: "आईआईटी दिल्ली",
    arjunMehtaText3: "कंप्यूटर साइंस",
    arjunMehtaText4:
      "आकाश इंस्टिट्यूट की बेहतरीन मार्गदर्शन ने मेरा आईआईटी का सपना सच कर दिया",
    snehaSharma: "स्नेहा शार्मा",

    snehaSharmaText1: "नीट एआईआर 45",
    snehaSharmaText2: "एम्स दिल्ली",
    snehaSharmaText3: "एमबीबीएस",
    snehaSharmaText4:
      "सुनियोजित योजना और नियमित टेस्ट ने मुझे नीट क्रैक करने में मदद की",
    rohitKumar: "रोहित कुमार",

    rohitKumarText1: "आईआईटी-जेईई एआईआर 12",
    rohitKumarText2: "आईआईटी बॉम्बे",
    rohitKumarText3: "मैकेनिकल इंजीनियरिंग",
    rohitKumarText4: "सर्वश्रेष्ठ शिक्षक और अध्ययन सामग्री। अत्यधिक अनुशंसित।",
    priyaPatel1: "प्रिया पाटेल",
    priyaPatel2: "नीट एआईआर 156",
    priyaPatel3: "जिपमर",
    priyaPatel4: "एमबीबीएस",
    priyaPatel5: "शंका समाधान सत्र बेहद सहायक रहे।",
    vikasSingh: "विकास सिंह",
    vikasSinghText1: "आईआईटी-जेईई एआईआर 224",
    vikasSinghText2: "आईआईटी कानपुर",
    vikasSinghText3: "इलेक्ट्रिकल इंजीनियरिंग",
    vikasSinghText4: "हर छात्र को व्यक्तिगत ध्यान देने वाली उत्कृष्ट कोचिंग।",
    ananyaGupta: "अनान्य गुप्ता",
    ananyaGuptaText1: "नीट एआईआर 289",
    ananyaGuptaText2: "केजीएमयू लखनऊ",
    ananyaGuptaText3: "एमबीबीएस",
    ananyaGuptaText4:
      "मॉक टेस्ट्स ने मुझे वास्तविक परीक्षा के लिए अच्छी तरह तैयार किया।",
      yearWiseResults: "वर्षवारी परिणाम",
      yearWiseResultsText:"",
       iitSelection1: "आईआईटी सेलेक्शन",
       neetSelection2: "नीट सेलेक्शन",
        successRate1: "सफलता दर",
         students:"छात्र",



  },
} as const;

// ✅ Type-safe translation keys
type TranslationKey = keyof (typeof translations)["en"];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
