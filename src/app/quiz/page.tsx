"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "../../../components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import { Badge } from "../../../components/ui/badge"
import { Progress } from "../../../components/ui/progress"
import { Trophy, Clock, Star, Target, Zap, Award, CheckCircle } from "lucide-react"

export default function QuizPage() {
  const { t } = useLanguage()
  const [currentQuiz, setCurrentQuiz] = useState<string | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [answers, setAnswers] = useState<string[]>([])

  const quizzes = [
    {
      id: "physics-basics",
      title: "Physics Fundamentals",
      description: "Test your knowledge of basic physics concepts",
      questions: 5,
      timeLimit: 10,
      difficulty: "Easy",
      reward: "10% Discount",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "chemistry-organic",
      title: "Organic Chemistry",
      description: "Challenge yourself with organic chemistry problems",
      questions: 5,
      timeLimit: 12,
      difficulty: "Medium",
      reward: "15% Discount",
      icon: Target,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "math-calculus",
      title: "Calculus Mastery",
      description: "Advanced calculus problems for serious students",
      questions: 5,
      timeLimit: 15,
      difficulty: "Hard",
      reward: "20% Discount",
      icon: Trophy,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "biology-neet",
      title: "NEET Biology",
      description: "Comprehensive biology quiz for NEET preparation",
      questions: 5,
      timeLimit: 10,
      difficulty: "Medium",
      reward: "12% Discount",
      icon: Award,
      color: "from-orange-500 to-red-500",
    },
  ]

  const sampleQuestions: Record<string, Array<{ question: string; options: string[]; correct: number }>> = {
    "physics-basics": [
      {
        question: "What is the SI unit of force?",
        options: ["Newton", "Joule", "Watt", "Pascal"],
        correct: 0,
      },
      {
        question: "Which law states that every action has an equal and opposite reaction?",
        options: ["First Law", "Second Law", "Third Law", "Law of Gravitation"],
        correct: 2,
      },
      {
        question: "What is the acceleration due to gravity on Earth?",
        options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "11 m/s²"],
        correct: 0,
      },
      {
        question: "Which of the following is a vector quantity?",
        options: ["Speed", "Distance", "Velocity", "Time"],
        correct: 2,
      },
      {
        question: "What is the formula for kinetic energy?",
        options: ["mgh", "½mv²", "mv", "ma"],
        correct: 1,
      },
    ],
    "chemistry-organic": [
      {
        question: "What is the general formula for alkanes?",
        options: ["CnH2n", "CnH2n+2", "CnH2n-2", "CnHn"],
        correct: 1,
      },
      {
        question: "Which functional group is present in alcohols?",
        options: ["-COOH", "-OH", "-CHO", "-CO-"],
        correct: 1,
      },
      {
        question: "What type of reaction is the conversion of alkene to alkane?",
        options: ["Oxidation", "Reduction", "Substitution", "Elimination"],
        correct: 1,
      },
      {
        question: "Which compound is known as wood spirit?",
        options: ["Ethanol", "Methanol", "Propanol", "Butanol"],
        correct: 1,
      },
      {
        question: "What is the IUPAC name of acetone?",
        options: ["Propanone", "Butanone", "Ethanone", "Pentanone"],
        correct: 0,
      },
    ],
    "math-calculus": [
      {
        question: "What is the derivative of x²?",
        options: ["x", "2x", "x²", "2x²"],
        correct: 1,
      },
      {
        question: "What is ∫x dx?",
        options: ["x²/2 + C", "x + C", "x²", "2x + C"],
        correct: 0,
      },
      {
        question: "What is the limit of sin(x)/x as x approaches 0?",
        options: ["0", "1", "∞", "undefined"],
        correct: 1,
      },
      {
        question: "What is the derivative of sin(x)?",
        options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
        correct: 0,
      },
      {
        question: "What is the second derivative of x³?",
        options: ["3x²", "6x", "x²", "3x"],
        correct: 1,
      },
    ],
    "biology-neet": [
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        correct: 1,
      },
      {
        question: "Which blood group is called universal donor?",
        options: ["A", "B", "AB", "O"],
        correct: 3,
      },
      {
        question: "What is the basic unit of heredity?",
        options: ["Chromosome", "Gene", "DNA", "RNA"],
        correct: 1,
      },
      {
        question: "Which organ produces insulin?",
        options: ["Liver", "Kidney", "Pancreas", "Heart"],
        correct: 2,
      },
      {
        question: "What is the process of cell division called?",
        options: ["Mitosis", "Meiosis", "Both A and B", "Osmosis"],
        correct: 2,
      },
    ],
  }

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (currentQuiz && timeLeft > 0 && !quizCompleted) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
    } else if (timeLeft === 0 && currentQuiz && !quizCompleted) {
      handleQuizComplete()
    }
    return () => clearTimeout(timer)
  }, [timeLeft, currentQuiz, quizCompleted])

  const startQuiz = (quizId: string) => {
    const quiz = quizzes.find((q) => q.id === quizId)
    if (quiz) {
      setCurrentQuiz(quizId)
      setCurrentQuestion(0)
      setScore(0)
      setTimeLeft(quiz.timeLimit * 60)
      setQuizCompleted(false)
      setAnswers([])
      setSelectedAnswer(null)
    }
  }

  const handleAnswerSelect = (answerIndex: string) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    const questions = sampleQuestions[currentQuiz!] || []
    const currentQ = questions[currentQuestion]

    if (selectedAnswer !== null) {
      const newAnswers = [...answers, selectedAnswer]
      setAnswers(newAnswers)

      if (Number.parseInt(selectedAnswer) === currentQ.correct) {
        setScore(score + 1)
      }
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      handleQuizComplete()
    }
  }

  const handleQuizComplete = () => {
    setQuizCompleted(true)
  }

  const resetQuiz = () => {
    setCurrentQuiz(null)
    setCurrentQuestion(0)
    setScore(0)
    setTimeLeft(0)
    setQuizCompleted(false)
    setAnswers([])
    setSelectedAnswer(null)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const getScorePercentage = () => {
    const questions = sampleQuestions[currentQuiz!] || []
    return Math.round((score / questions.length) * 100)
  }

  const getRewardEligibility = () => {
    const percentage = getScorePercentage()
    if (percentage >= 80) return "Excellent! You've earned the full discount!"
    if (percentage >= 60) return "Good job! You've earned a partial discount!"
    return "Keep practicing! Try again to earn a discount."
  }

  if (currentQuiz && !quizCompleted) {
    const quiz = quizzes.find((q) => q.id === currentQuiz)
    const questions = sampleQuestions[currentQuiz] || []
    const currentQ = questions[currentQuestion]

    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="glassmorphism mb-8">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-2xl font-bold gradient-text">{quiz?.title}</h2>
                  <p className="text-gray-400">
                    Question {currentQuestion + 1} of {questions.length}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 text-lg font-bold text-white">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className={timeLeft < 60 ? "text-red-400" : ""}>{formatTime(timeLeft)}</span>
                  </div>
                  <p className="text-sm text-gray-400">Time Remaining</p>
                </div>
              </div>
              <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
            </CardContent>
          </Card>

          <Card className="glassmorphism mb-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white mb-6">{currentQ?.question}</h3>
              <div className="space-y-3">
                {currentQ?.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index.toString())}
                    className={`w-full p-4 text-left rounded-lg border transition-all ${
                      selectedAnswer === index.toString()
                        ? "border-blue-500 bg-blue-500/20 text-white"
                        : "border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500 hover:bg-gray-700/50"
                    }`}
                  >
                    <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={resetQuiz} className="neon-border bg-transparent">
              Exit Quiz
            </Button>
            <Button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className="neon-glow hover-glow bg-gradient-to-r from-blue-500 to-purple-600"
            >
              {currentQuestion < questions.length - 1 ? "Next Question" : "Complete Quiz"}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (quizCompleted) {
    const quiz = quizzes.find((q) => q.id === currentQuiz)
    const questions = sampleQuestions[currentQuiz!] || []
    const percentage = getScorePercentage()

    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="glassmorphism text-center">
            <CardContent className="p-12">
              <div className="mb-8">
                {percentage >= 80 ? (
                  <Trophy className="w-24 h-24 text-yellow-400 mx-auto mb-4" />
                ) : percentage >= 60 ? (
                  <Star className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                ) : (
                  <Target className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                )}
                <h2 className="text-4xl font-bold gradient-text mb-4">Quiz Completed!</h2>
                <p className="text-xl text-gray-300">{quiz?.title}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glassmorphism p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400">{score}</div>
                  <div className="text-gray-400">Correct Answers</div>
                </div>
                <div className="glassmorphism p-6 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400">{percentage}%</div>
                  <div className="text-gray-400">Score</div>
                </div>
                <div className="glassmorphism p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-400">{questions.length}</div>
                  <div className="text-gray-400">Total Questions</div>
                </div>
              </div>

              <div className="mb-8">
                <Badge
                  className={`text-lg px-6 py-2 ${
                    percentage >= 80
                      ? "bg-gradient-to-r from-green-500 to-emerald-600"
                      : percentage >= 60
                        ? "bg-gradient-to-r from-blue-500 to-purple-600"
                        : "bg-gradient-to-r from-gray-500 to-gray-600"
                  }`}
                >
                  {getRewardEligibility()}
                </Badge>
              </div>

              {percentage >= 60 && (
                <div className="mb-8 p-6 glassmorphism rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">🎉 Congratulations!</h3>
                  <p className="text-gray-300 mb-4">
                    You've earned a discount on our courses! Contact us with code: QUIZ{currentQuiz?.toUpperCase()}
                  </p>
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600">
                    Discount Code: QUIZ{currentQuiz?.toUpperCase()}
                  </Badge>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => startQuiz(currentQuiz!)}
                  className="neon-glow hover-glow bg-gradient-to-r from-blue-500 to-purple-600"
                >
                  Retake Quiz
                </Button>
                <Button variant="outline" onClick={resetQuiz} className="neon-border bg-transparent">
                  Try Another Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 gradient-text">Interactive Quiz Challenge</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Test your knowledge and earn exclusive discounts on our courses. Challenge yourself with our expertly
              crafted quizzes!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Choose Your Challenge</h2>
            <p className="text-xl text-gray-300">Select a quiz and start earning rewards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quizzes.map((quiz) => (
              <Card key={quiz.id} className="glassmorphism hover-glow group">
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${quiz.color} flex items-center justify-center neon-glow group-hover:scale-110 transition-transform`}
                  >
                    <quiz.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl gradient-text">{quiz.title}</CardTitle>
                  <CardDescription className="text-gray-400">{quiz.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Questions:</span>
                      <span className="text-white">{quiz.questions}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Time Limit:</span>
                      <span className="text-white">{quiz.timeLimit} min</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Difficulty:</span>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          quiz.difficulty === "Easy"
                            ? "border-green-500 text-green-400"
                            : quiz.difficulty === "Medium"
                              ? "border-yellow-500 text-yellow-400"
                              : "border-red-500 text-red-400"
                        }`}
                      >
                        {quiz.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <div className="text-center mb-4">
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-600">Reward: {quiz.reward}</Badge>
                    </div>
                    <Button
                      onClick={() => startQuiz(quiz.id)}
                      className="w-full neon-glow hover-glow bg-gradient-to-r from-blue-500 to-purple-600"
                    >
                      Start Quiz
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">How It Works</h2>
            <p className="text-xl text-gray-300">Simple steps to earn your rewards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Choose Quiz",
                description: "Select a quiz that matches your subject interest",
                icon: Target,
              },
              {
                step: "2",
                title: "Answer Questions",
                description: "Complete all questions within the time limit",
                icon: CheckCircle,
              },
              {
                step: "3",
                title: "Get Score",
                description: "Receive your score and performance analysis",
                icon: Star,
              },
              {
                step: "4",
                title: "Claim Reward",
                description: "Earn discounts based on your performance",
                icon: Trophy,
              },
            ].map((item, index) => (
              <Card key={index} className="glassmorphism hover-glow text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center neon-glow">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">{item.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
