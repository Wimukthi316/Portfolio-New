"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs" // Import Tabs components
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Sparkles,
  Rocket,
  Brain,
  Code2,
  Globe,
  GraduationCap,
  MousePointer,
  Layers,
  Home,
  User,
  Briefcase,
  Code,
  X,
  Monitor,
  Server,
  Database,
  Smartphone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion" // Keep motion for other animations
import TopNav from "@/components/top-nav" // Import the renamed top navigation component

// Redesigned Animated Hamburger Icon Component (remains for the toggle button)
const AnimatedHamburger = ({ isMenuOpen }: { isMenuOpen: boolean }) => (
  <motion.div
    className="relative w-6 h-6 flex flex-col justify-center items-center cursor-pointer"
    initial={false}
    animate={isMenuOpen ? "open" : "closed"}
    whileTap={{ scale: 0.9 }} // Added for tap feedback
  >
    <motion.span
      className="block w-6 h-0.5 bg-white absolute"
      variants={{
        closed: { rotate: 0, y: -7 }, // Slightly more pronounced y
        open: { rotate: 45, y: 0 },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    ></motion.span>
    <motion.span
      className="block w-6 h-0.5 bg-white absolute"
      variants={{
        closed: { opacity: 1 },
        open: { opacity: 0 },
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    ></motion.span>
    <motion.span
      className="block w-6 h-0.5 bg-white absolute"
      variants={{
        closed: { rotate: 0, y: 7 }, // Slightly more pronounced y
        open: { rotate: -45, y: 0 },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    ></motion.span>
  </motion.div>
)

export default function ModernPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false) // Close menu after navigation
  }

  const projects = [
    {
      title: "FEMMEFIT",
      subtitle: "E-commerce Fashion Platform",
      description:
        "A sophisticated women's clothing platform featuring advanced UX/UI design, responsive layouts, and seamless shopping experience. Built with modern React architecture and Tailwind CSS for optimal performance.",
      tech: ["React.js", "Tailwind CSS", "Responsive Design", "UX/UI"],
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
      type: "Frontend Development",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "VetCare System",
      subtitle: "Online Veterinary Platform",
      description:
        "Comprehensive MERN stack application enabling pet owners to seamlessly book veterinary appointments. Features real-time scheduling, pet profiles, and integrated communication systems.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Real-time"],
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
      type: "Full Stack Development",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "EduFlow",
      subtitle: "Course Management System",
      description:
        "Modern educational platform built with Vue.js 3 and TypeScript. Features course booking, progress tracking, and interactive learning modules with state management via Pinia.",
      tech: ["Vue.js 3", "TypeScript", "Pinia", "Educational Tech"],
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
      type: "Frontend Development",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "SmartCents",
      subtitle: "Budget Planning Mobile App",
      description:
        "Intelligent mobile application for budget management and expense tracking. Built with Kotlin, featuring AI-powered insights, goal setting, and financial analytics.",
      tech: ["Kotlin", "Mobile Development", "AI Integration", "Analytics"],
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
      type: "Mobile Development",
      gradient: "from-sky-500 to-blue-500",
    },
  ]

  const skills = [
    { name: "JavaScript", logo: "⚡", category: "Programming", level: 90 },
    { name: "TypeScript", logo: "🔷", category: "Programming", level: 85 },
    { name: "React", logo: "⚛️", category: "Frontend", level: 92 },
    { name: "Vue.js", logo: "💚", category: "Frontend", level: 88 },
    { name: "Node.js", logo: "🟢", category: "Backend", level: 87 },
    { name: "MongoDB", logo: "🍃", category: "Database", level: 85 },
    { name: "MySQL", logo: "🐬", category: "Database", level: 90 },
    { name: "Kotlin", logo: "🎯", category: "Mobile", level: 82 },
    { name: "Python", logo: "🐍", category: "Data Science", level: 88 },
    { name: "AWS", logo: "☁️", category: "Cloud", level: 80 },
    { name: "Git", logo: "📚", category: "Tools", level: 95 },
    { name: "Figma", logo: "🎨", category: "Design", level: 85 },
  ]

  const certifications = [
    {
      title: "Oracle MySQL HeatWave Implementation Associate",
      issuer: "Oracle",
      code: "1Z0-915-1",
      icon: "🏆",
      color: "from-blue-500 to-sky-500",
    },
    {
      title: "MySQL Implementation Associate",
      issuer: "Oracle",
      code: "1Z0-922",
      icon: "🥇",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "AWS Cloud 101",
      issuer: "AWS Educate",
      code: "Cloud Fundamentals",
      icon: "☁️",
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "AWS Storage Fundamentals",
      issuer: "AWS Educate",
      code: "Storage Solutions",
      icon: "💾",
      color: "from-sky-500 to-cyan-500",
    },
  ]

  // Framer Motion Variants (kept for other sections, but not for mobile menu overlay)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const heroTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        delay: 0.3,
      },
    },
  }

  const heroTitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.1,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12,
        delay: 0.7,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  }

  // Mobile nav items with icons
  const mobileNavItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "work", icon: Briefcase, label: "Work" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "contact", icon: Mail, label: "Contact" },
  ]

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-blue-900/20"></div>
        <motion.div // Framer Motion for mouse-following blur
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        ></motion.div>
        {/* New: Large, subtle pulsing radial gradient */}
        <motion.div
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.2, 0.15],
            x: ["-50%", "0%", "-50%"],
            y: ["-50%", "0%", "-50%"],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        ></motion.div>
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Mobile Navigation (Hamburger and Overlay) */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 h-10 w-[calc(100%-2rem)] max-w-sm px-4 bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg rounded-full z-[100] flex md:hidden items-center justify-between transition-transform duration-300">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
          WG.dev
        </div>
        <button
          className="text-white z-[110]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatedHamburger isMenuOpen={isMenuOpen} />
        </button>
      </nav>

      {/* New Mobile Menu Overlay (Full-screen, with portfolio styling) */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-blue-950/98 backdrop-blur-xl z-[101] flex flex-col p-6"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.07,
                delayChildren: 0.2,
              },
            },
          }}
        >
          <div className="flex justify-between items-center w-full mb-12">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              WG.dev {/* Initials with gradient */}
            </div>
            <button
              className="text-white p-2" // Close button is text-white
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-8 h-8" /> {/* Larger X icon */}
            </button>
          </div>

          <motion.div
            className="flex flex-col gap-4 w-full flex-1 items-center justify-center" // Centered layout
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  staggerChildren: 0.07,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {mobileNavItems.map((item) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-center py-3 text-xl capitalize text-gray-300 font-medium hover:text-blue-300 hover:bg-white/5 transition-all duration-200 rounded-lg px-4"
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      },
                    },
                  }}
                >
                  <div className="flex items-center justify-center gap-3">
                    <Icon className="w-6 h-6 text-blue-300" />
                    {item.label}
                  </div>
                </motion.button>
              )
            })}
          </motion.div>
        </motion.div>
      )}

      {/* Desktop Top-Center Navigation */}
      <TopNav onNavigate={scrollToSection} />
      {/* Main Content Wrapper */}
      <div className="">
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-24 md:pt-24" // Adjusted padding-top for top navbar
          ref={heroRef}
        >
          <div className="max-w-6xl mx-auto text-center relative z-20">
            {/* Animated Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0 }}
              className="relative mb-8 inline-block"
            >
              <div className="relative z-30">
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 p-1 animate-spin-slow">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="Wimukthi Gunarathna"
                    width={160}
                    height={160}
                    className="rounded-full bg-black"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce z-40">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
            {/* Animated Text */}
            <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-6">
              <motion.h1
                variants={heroTitleVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight"
              >
                <span className="block bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent animate-pulse">
                  Wimukthi
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Gunarathna
                </span>
              </motion.h1>
              <motion.div
                variants={heroTextVariants}
                className="text-lg sm:text-xl md:text-2xl text-gray-300 space-y-2"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Brain className="w-6 h-6 text-blue-400" />
                  <span>Data Science Undergraduate</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Code2 className="w-6 h-6 text-cyan-400" />
                  <span>Full Stack Developer</span>
                </div>
              </motion.div>
              <motion.p
                variants={heroTextVariants}
                className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
              >
                Crafting innovative digital experiences through the perfect blend of data science insights and
                full-stack development expertise. Passionate about building scalable solutions that make a difference.
              </motion.p>
              <motion.div variants={containerVariants} className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-8">
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl min-w-[160px] sm:min-w-[180px] h-12 sm:h-14"
                  >
                    <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Let's Collaborate
                  </Button>
                </motion.div>
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold bg-transparent hover:shadow-lg min-w-[140px] sm:min-w-[160px] h-12 sm:h-14"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Download CV
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div variants={containerVariants} className="flex justify-center space-x-4 sm:space-x-6 pt-8">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Globe, href: "#", label: "Portfolio" },
                ].map(({ icon: Icon, href, label }, index) => (
                  <motion.div key={label} variants={socialIconVariants} whileHover="hover">
                    <Link
                      href={href}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-white" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <MousePointer className="w-6 h-6 text-gray-400" />
        </motion.div>

        {/* About Section - Revamped with Tabs */}
        <section id="about" className="py-20 px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Bridging data insights with robust development to build impactful solutions.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-4 group-hover:w-32 transition-all duration-300"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="journey" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg">
                  <TabsTrigger
                    value="journey"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg py-2 text-base font-semibold text-gray-300 hover:text-white transition-all duration-300"
                  >
                    My Journey
                  </TabsTrigger>
                  <TabsTrigger
                    value="education"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg py-2 text-base font-semibold text-gray-300 hover:text-white transition-all duration-300"
                  >
                    Education
                  </TabsTrigger>
                  <TabsTrigger
                    value="skills"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg py-2 text-base font-semibold text-gray-300 hover:text-white transition-all duration-300"
                  >
                    Technical Stack
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="journey" className="mt-8">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl transition-all duration-500 transform hover:-translate-y-1 group"
                  >
                    {/* Subtle background pattern/gradient */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5"></div>
                    </div>

                    <CardContent className="relative z-10 p-0">
                      <h3 className="text-3xl font-bold text-white mb-6 flex items-center justify-center lg:justify-start gap-3">
                        <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                        My Journey & Expertise
                      </h3>
                      <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed text-lg mb-4">
                        As a detail-oriented Data Science undergraduate at SLIIT, I bring a unique blend of analytical
                        rigor and practical development skills. My academic journey has equipped me with a strong
                        foundation in machine learning, statistical analysis, and data warehousing.
                      </motion.p>
                      <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed text-lg mb-6">
                        Beyond theory, I have hands-on experience in full-stack web development, proficient in the MERN
                        stack, Next.js, and building robust RESTful APIs. I'm also adept at integrating DevOps practices
                        to streamline development workflows and ensure scalable, efficient solutions.
                      </motion.p>
                      <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed text-lg">
                        My passion lies in contributing to innovative teams and advancing the fields of data science and
                        software development, always striving to build solutions that make a tangible difference.
                      </motion.p>
                    </CardContent>
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-300 pointer-events-none"></div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="education" className="mt-8">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl transition-all duration-500 transform hover:-translate-y-1"
                  >
                    <CardContent className="p-0">
                      <div className="flex items-center mb-4">
                        <GraduationCap className="w-10 h-10 text-blue-400 mr-3" />
                        <div>
                          <h3 className="text-xl font-bold text-white">Education</h3>
                          <p className="text-blue-300 text-sm">Academic Foundation</p>
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1">BSc Information Technology</h4>
                      <p className="text-blue-300 mb-2">SLIIT • Data Science Specialization</p>
                      <div className="flex justify-between items-center text-gray-400 text-sm">
                        <span>GPA: 3.19</span>
                        <span>2022 - Present</span>
                      </div>
                      <div className="mt-4">
                        <h5 className="font-semibold text-white mb-2">Key Areas:</h5>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "MERN Stack",
                            "Next.js",
                            "Machine Learning",
                            "RESTful APIs",
                            "DevOps",
                            "Data Warehousing",
                          ].map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-blue-800/30 text-blue-200">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </motion.div>
                </TabsContent>

                <TabsContent value="skills" className="mt-8">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl transition-all duration-500 transform hover:-translate-y-1"
                  >
                    <CardContent className="p-0">
                      <div className="flex items-center mb-4">
                        <Layers className="w-10 h-10 text-cyan-400 mr-3" />
                        <div>
                          <h3 className="text-xl font-bold text-white">Core Technical Stack</h3>
                          <p className="text-cyan-300 text-sm">Languages, Frameworks & Libraries</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Monitor className="w-6 h-6 text-blue-400" />
                          <div>
                            <h4 className="font-semibold text-white mb-1">Frontend:</h4>
                            <p className="text-gray-300 text-sm">React.js, Vue.js, Next.js, Tailwind CSS</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Server className="w-6 h-6 text-cyan-400" />
                          <div>
                            <h4 className="font-semibold text-white mb-1">Backend:</h4>
                            <p className="text-gray-300 text-sm">Node.js, Express.js, RESTful APIs</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Database className="w-6 h-6 text-blue-400" />
                          <div>
                            <h4 className="font-semibold text-white mb-1">Databases:</h4>
                            <p className="text-gray-300 text-sm">MongoDB, MySQL</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Smartphone className="w-6 h-6 text-cyan-400" />
                          <div>
                            <h4 className="font-semibold text-white mb-1">Mobile:</h4>
                            <p className="text-gray-300 text-sm">Kotlin</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Contact Info Card (remains outside tabs, full width) */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              custom={4}
              className="max-w-4xl mx-auto mt-12" // Adjusted margin-top and width
            >
              <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Get In Touch</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { icon: Phone, label: "Phone", value: "+94 71 7989333", color: "blue" },
                      { icon: Mail, label: "Email", value: "wimukthi316@gmail.com", color: "cyan" },
                      { icon: MapPin, label: "Location", value: "Kaduwela, LK", color: "blue" },
                    ].map(({ icon: Icon, label, value, color }) => (
                      <div
                        key={label}
                        className="flex flex-col items-center text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                      >
                        <Icon className={`w-8 h-8 mb-2 text-${color}-400`} />
                        <p className="text-sm text-gray-400 mb-1">{label}</p>
                        <p className="text-base text-white font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section id="work" className="py-20 px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Selected Work
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A showcase of my most impactful projects, demonstrating expertise across full-stack development, mobile
                applications, and data-driven solutions.
              </p>
            </div>

            <div className="space-y-16 lg:space-y-32">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Project Image */}
                  <div className="lg:w-1/2">
                    <motion.div // Apply motion to this div for 3D tilt
                      className="relative group"
                      whileHover={{
                        rotateX: 5, // Subtle tilt up
                        rotateY: index % 2 === 0 ? 5 : -5, // Subtle tilt left/right
                        scale: 1.02, // Slight scale up
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)", // More pronounced shadow
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ transformStyle: "preserve-3d" }} // Enable 3D transforms
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500`}
                        style={{ transform: "translateZ(-10px)" }} // Push blur back in 3D space
                      ></div>
                      <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all duration-500">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="rounded-xl w-full h-auto"
                          style={{ transform: "translateZ(20px)" }} // Pull image forward in 3D space
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <Badge className={`bg-gradient-to-r ${project.gradient} text-white mb-4 px-4 py-1`}>
                        {project.type}
                      </Badge>
                      <h3 className="text-4xl md:text-5xl font-black text-white mb-2">{project.title}</h3>
                      <p className="text-xl text-blue-300 mb-4">{project.subtitle}</p>
                      <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-blue-400/30 text-blue-300 bg-blue-900/20 backdrop-blur-sm px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button
                        size="lg"
                        className={`bg-gradient-to-r ${project.gradient} hover:scale-105 transition-all duration-300 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl min-w-[140px] h-12`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 py-3 rounded-full font-semibold bg-transparent transition-all duration-300 hover:shadow-lg min-w-[140px] h-12"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Technical Arsenal
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A comprehensive toolkit of modern technologies and frameworks that power my development journey.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                  custom={index}
                >
                  <Card className="bg-gradient-to-br from-gray-900/30 to-black/30 border-white/10 backdrop-blur-sm transition-all duration-500 group">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {skill.logo}
                      </div>
                      <h3 className="text-white font-semibold mb-2">{skill.name}</h3>
                      <p className="text-xs text-gray-400 mb-3">{skill.category}</p>

                      {/* Skill Level Bar */}
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                        <div
                          className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-blue-300">{skill.level}%</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Professional Certifications
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A collection of my professional certifications highlighting my expertise and commitment to continuous
                learning.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                  custom={index}
                >
                  <Card className="bg-gradient-to-br from-gray-900/30 to-black/30 border-white/10 backdrop-blur-sm transition-all duration-500 group">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        {cert.icon}
                      </div>
                      <h4 className="text-white font-semibold mb-2 text-sm leading-tight">{cert.title}</h4>
                      <p className="text-blue-300 text-xs mb-1">{cert.issuer}</p>
                      <p className="text-gray-400 text-xs">{cert.code}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Create Something Amazing
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's collaborate and build something extraordinary together.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[220px] h-14"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 bg-transparent hover:shadow-lg min-w-[220px] h-12"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-white/10 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            WG.dev
          </div>
          <p className="text-gray-400 mb-6">© 2024 Wimukthi Gunarathna. Crafted with passion and precision.</p>
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Globe, href: "#", label: "Portfolio" },
            ].map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
              >
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
