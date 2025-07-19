"use client"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
import { motion } from "framer-motion"
import TopNav from "@/components/top-nav"

// Redesigned Animated Hamburger Icon Component
const AnimatedHamburger = ({ isMenuOpen }: { isMenuOpen: boolean }) => (
  <motion.div
    className="relative w-6 h-6 flex flex-col justify-center items-center cursor-pointer"
    initial={false}
    animate={isMenuOpen ? "open" : "closed"}
    whileTap={{ scale: 0.9 }}
  >
    <motion.span
      className="block w-6 h-0.5 bg-white absolute"
      variants={{
        closed: { rotate: 0, y: -7 },
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
        closed: { rotate: 0, y: 7 },
        open: { rotate: -45, y: 0 },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    ></motion.span>
  </motion.div>
)

export default function HomePage() {
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
    setIsMenuOpen(false)
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
      title: "PetPaw",
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
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", category: "Programming", level: 90 },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", category: "Programming", level: 85 },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", category: "Frontend", level: 92 },
    { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg", category: "Frontend", level: 88 },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", category: "Backend", level: 87 },
    { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", category: "Backend", level: 85 },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", category: "Frontend", level: 90 },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", category: "Database", level: 85 },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", category: "Database", level: 90 },
    { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg", category: "Mobile", level: 82 },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", category: "Data Science", level: 88 },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", category: "Frontend", level: 85 },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", category: "Cloud", level: 80 },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", category: "Tools", level: 95 },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", category: "Design", level: 85 },
  ]

  const certifications = [
    {
      title: "Oracle MySQL HeatWave Implementation Associate",
      issuer: "Oracle",
      code: "1Z0-915-1",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
      color: "from-blue-500 to-sky-500",
    },
    {
      title: "MySQL Implementation Associate",
      issuer: "Oracle",
      code: "1Z0-922",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "AWS Cloud 101",
      issuer: "AWS Educate",
      code: "Cloud Fundamentals",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "AWS Storage Fundamentals",
      issuer: "AWS Educate",
      code: "Storage Solutions",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      color: "from-sky-500 to-cyan-500",
    },
  ]

  // Framer Motion Variants
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-black to-blue-900/70"></div>
        <motion.div
          className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        ></motion.div>
        <motion.div
          className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl"
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
        {[...Array(30)].map((_, i) => (
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

      {/* Mobile Navigation */}
      <nav className="fixed top-3 left-1/2 -translate-x-1/2 h-12 w-[calc(100%-1.5rem)] max-w-sm px-4 bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg rounded-full z-[100] flex md:hidden items-center justify-between transition-transform duration-300">
        <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
          WG
        </div>
        <button
          className="text-white z-[110] p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatedHamburger isMenuOpen={isMenuOpen} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-blue-950/98 backdrop-blur-xl z-[101] flex flex-col p-4 sm:p-6"
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
          <div className="flex justify-between items-center w-full mb-8 sm:mb-12">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              WG
            </div>
            <button className="text-white p-2" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>
          <motion.div
            className="flex flex-col gap-3 sm:gap-4 w-full flex-1 items-center justify-center"
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
                  className="block w-full max-w-xs text-center py-3 sm:py-4 text-lg sm:text-xl capitalize text-gray-300 font-medium hover:text-blue-300 hover:bg-white/5 transition-all duration-200 rounded-lg px-4"
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
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
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
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24"
          ref={heroRef}
        >
          <div className="max-w-6xl mx-auto text-center relative z-20">


            {/* Animated Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-4 sm:space-y-6"
            >
              <motion.h1
                variants={heroTitleVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent animate-pulse">
                  Wimukthi{" "}
                </span>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Gunarathna
                </span>
              </motion.h1>

              <motion.div
                variants={heroTextVariants}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 space-y-2"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  <span>Data Science Undergraduate</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  <span>Full Stack Developer</span>
                </div>
              </motion.div>

              <motion.p
                variants={heroTextVariants}
                className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4"
              >
                Crafting innovative digital experiences through the perfect blend of data science insights and
                full-stack development expertise. Passionate about building scalable solutions that make a difference.
              </motion.p>

              <motion.div
                variants={containerVariants}
                className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-6 pt-6 sm:pt-8 px-4"
              >
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[160px] sm:min-w-[180px] h-12 sm:h-14"
                  >
                    <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Let's Collaborate
                  </Button>
                </motion.div>
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold bg-transparent hover:shadow-lg w-full sm:w-auto min-w-[140px] sm:min-w-[160px] h-12 sm:h-14"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Download CV
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="flex justify-center space-x-4 sm:space-x-6 pt-6 sm:pt-8"
              >
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
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <MousePointer className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
        </motion.div>

        {/* About Section - Modern Glassmorphism Card Stack */}
        <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                Bridging data insights with robust development to build impactful solutions.
              </p>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-4"></div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
              className="relative"
            >
              {/* Floating Background Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-40 right-10 w-28 h-28 bg-pink-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
              </div>

              {/* Main Content Stack */}
              <div className="relative z-10 space-y-6 sm:space-y-8">
                {/* Header Card with Profile */}
                <motion.div
                  variants={itemVariants}
                >
                  <Card className="relative overflow-hidden bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
                    {/* Glassmorphism overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>

                    {/* Animated border gradient */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 blur-xl"></div>

                    <CardContent className="relative z-10 p-0">
                      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
                        {/* Floating Profile Image */}
                        <motion.div
                          className="relative flex-shrink-0"
                        >
                          <div className="relative">
                            {/* Glowing background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-20 scale-110 animate-pulse"></div>

                            {/* Profile image container */}
                            <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-1 shadow-2xl">
                              <Image
                                src="/placeholder.svg?height=192&width=192"
                                alt="Wimukthi Gunarathna"
                                width={192}
                                height={192}
                                className="rounded-full bg-black w-full h-full object-cover"
                              />
                            </div>

                            <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce z-40">
                              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div> </div>                       </motion.div>

                        {/* Main Info */}
                        <div className="text-center lg:text-left space-y-6 flex-1">
                          <div>
                            <motion.h3
                              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight"
                            >

                            </motion.h3>
                            <div className="text-xl sm:text-2xl text-blue-300 mb-4 font-medium">
                              Data Science Student & Full-Stack Developer
                            </div>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-5xl">
                              I'm Wimukthi Gunarathna, a passionate Frontend Developer and undergraduate specializing in Data Science at SLIIT. With hands-on experience in modern web technologies like React, Vite, Tailwind CSS, and a strong foundation in HTML, CSS, and JavaScript, I design and build responsive, user-focused applications. I thrive on creating clean, accessible UI/UX designs and optimizing web performance across all devices.

                              Over the past few years, I’ve developed academic and personal projects including management systems, mobile apps, and e-commerce websites—each enhancing my skills in frontend development, version control, and agile workflows. I’m always eager to explore new technologies and turn ideas into interactive digital experiences.     </p>
                          </div>

                          {/* Status badges */}
                          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            {[
                              { label: "🎓 SLIIT Student", color: "from-blue-500/20 to-blue-600/20 border-blue-400/30" },
                              { label: "📊 GPA: 3.19", color: "from-green-500/20 to-green-600/20 border-green-400/30" },
                              { label: "🔬 Data Science", color: "from-purple-500/20 to-purple-600/20 border-purple-400/30" },
                              { label: "💻 Full-Stack", color: "from-cyan-500/20 to-cyan-600/20 border-cyan-400/30" }
                            ].map((badge, index) => (
                              <motion.div
                                key={badge.label}
                                className={`px-4 py-2 rounded-full bg-gradient-to-r ${badge.color} border backdrop-blur-sm text-sm font-medium text-white`}
                              >
                                {badge.label}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Skills & Experience Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {[
                    {
                      icon: Monitor,
                      title: "Frontend Development",
                      description: "Modern React ecosystems",
                      technologies: ["React.js", "Vue.js", "Next.js", "Tailwind CSS"],
                      gradient: "from-blue-500/10 to-indigo-500/10",
                      borderGradient: "from-blue-400/30 to-indigo-400/30",
                      iconGradient: "from-blue-500 to-indigo-500"
                    },
                    {
                      icon: Server,
                      title: "Backend Development",
                      description: "Server-side architecture",
                      technologies: ["Node.js", "Express.js", "RESTful APIs", "DevOps"],
                      gradient: "from-green-500/10 to-emerald-500/10",
                      borderGradient: "from-green-400/30 to-emerald-400/30",
                      iconGradient: "from-green-500 to-emerald-500"
                    },
                    {
                      icon: Database,
                      title: "Data & Analytics",
                      description: "Database & warehousing",
                      technologies: ["MongoDB", "MySQL", "Data Warehousing", "Analytics"],
                      gradient: "from-purple-500/10 to-pink-500/10",
                      borderGradient: "from-purple-400/30 to-pink-400/30",
                      iconGradient: "from-purple-500 to-pink-500"
                    },
                    {
                      icon: Brain,
                      title: "Data Science & AI",
                      description: "Machine learning focus",
                      technologies: ["Python", "Machine Learning", "Statistical Analysis", "Kotlin"],
                      gradient: "from-orange-500/10 to-yellow-500/10",
                      borderGradient: "from-orange-400/30 to-yellow-400/30",
                      iconGradient: "from-orange-500 to-yellow-500"
                    }
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.title}
                      variants={itemVariants}
                      whileHover={{ y: -10, scale: 1.02, rotateX: 5, rotateY: index % 2 === 0 ? 5 : -5 }}
                      className="group h-full"
                    >
                      <Card className={`h-full bg-gradient-to-br ${skill.gradient} backdrop-blur-2xl border border-gradient-to-r ${skill.borderGradient} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer`}>
                        <CardContent className="p-0 text-center space-y-4 h-full flex flex-col">
                          {/* Icon */}
                          <motion.div
                            className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${skill.iconGradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <skill.icon className="w-8 h-8 text-white" />
                          </motion.div>

                          {/* Content */}
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                              {skill.title}
                            </h4>
                            <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                              {skill.description}
                            </p>

                            {/* Technologies */}
                            <div className="space-y-2">
                              {skill.technologies.map((tech) => (
                                <motion.div
                                  key={tech}
                                  whileHover={{ scale: 1.05 }}
                                  className="text-xs text-gray-300 bg-white/5 rounded-lg py-1.5 px-3 hover:bg-white/10 transition-all duration-200 border border-white/10"
                                >
                                  {tech}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Selected Work Section */}
        <section id="work" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Selected Work
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                A showcase of my most impactful projects, demonstrating expertise across full-stack development, mobile
                applications, and data-driven solutions.
              </p>
            </div>

            <div className="space-y-12 sm:space-y-16 lg:space-y-24 xl:space-y-32">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  {/* Project Image */}
                  <div className="w-full lg:w-1/2">
                    <motion.div
                      className="relative group"
                      whileHover={{
                        rotateX: 5,
                        rotateY: index % 2 === 0 ? 5 : -5,
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500`}
                        style={{ transform: "translateZ(-10px)" }}
                      ></div>
                      <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-white/20 transition-all duration-500">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="rounded-xl w-full h-auto"
                          style={{ transform: "translateZ(20px)" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 px-4 lg:px-0">
                    <div>
                      <Badge
                        className={`bg-gradient-to-r ${project.gradient} text-white mb-3 sm:mb-4 px-3 sm:px-4 py-1 text-xs sm:text-sm`}
                      >
                        {project.type}
                      </Badge>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-lg sm:text-xl text-blue-300 mb-3 sm:mb-4">{project.subtitle}</p>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-blue-400/30 text-blue-300 bg-blue-900/20 backdrop-blur-sm px-2 sm:px-3 py-1 text-xs sm:text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Button
                        size="lg"
                        className={`bg-gradient-to-r ${project.gradient} hover:scale-105 transition-all duration-300 px-4 sm:px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[140px] h-12 text-sm sm:text-base`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-4 sm:px-6 py-3 rounded-full font-semibold bg-transparent transition-all duration-300 hover:shadow-lg w-full sm:w-auto min-w-[140px] h-12 text-sm sm:text-base"
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
        <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Technical Arsenal
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                A comprehensive toolkit of modern technologies and frameworks that power my development journey.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                  custom={index}
                >
                  <Card className="bg-gradient-to-br from-gray-900/30 to-black/30 border-white/10 backdrop-blur-sm transition-all duration-500 group h-full">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                        <Image
                          src={skill.logo || "/placeholder.svg"}
                          alt={`${skill.name} logo`}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{skill.name}</h3>
                      <p className="text-xs text-gray-400 mb-2 sm:mb-3">{skill.category}</p>
                      {/* Skill Level Bar */}
                      <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2 mb-1 sm:mb-2">
                        <div
                          className="bg-gradient-to-r from-blue-400 to-cyan-400 h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out"
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
        <section id="certifications" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Professional Certifications
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                A collection of my professional certifications highlighting my expertise and commitment to continuous
                learning.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                  custom={index}
                >
                  <Card className="bg-gradient-to-br from-gray-900/30 to-black/30 border-white/10 backdrop-blur-sm transition-all duration-500 group h-full">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                        <Image
                          src={cert.logo}
                          alt={`${cert.issuer} logo`}
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h4 className="text-white font-semibold mb-1 sm:mb-2 text-xs sm:text-sm leading-tight">
                        {cert.title}
                      </h4>
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
        <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Create Something Amazing
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Ready to bring your next project to life? Let's collaborate and build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[200px] sm:min-w-[220px] h-12 sm:h-14"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Start a Conversation
              </Button>

            </div>
          </motion.div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 sm:mb-4">
            WG
          </div>
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base px-4">
            © 2024 Wimukthi Gunarathna. Crafted with passion and precision.
          </p>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Globe, href: "#", label: "Portfolio" },
            ].map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white" />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}