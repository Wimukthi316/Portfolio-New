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
  Target,
  Rocket,
  Brain,
  Code2,
  Globe,
  GraduationCap,
  Menu,
  X,
  MousePointer,
  Lightbulb,
  Handshake,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ModernPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const heroRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          } else {
            entry.target.classList.remove("animate-fade-in-up") // Optional: reset animation when out of view
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }, // Adjust rootMargin to trigger earlier
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  const addRef = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 90 // Height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
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
      gradient: "from-pink-500 to-rose-500",
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
      gradient: "from-blue-500 to-indigo-500",
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
      gradient: "from-purple-500 to-violet-500",
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
      color: "from-orange-500 to-red-500",
    },
    {
      title: "MySQL Implementation Associate",
      issuer: "Oracle",
      code: "1Z0-922",
      icon: "🥇",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "AWS Cloud 101",
      issuer: "AWS Educate",
      code: "Cloud Fundamentals",
      icon: "☁️",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "AWS Storage Fundamentals",
      issuer: "AWS Educate",
      code: "Storage Solutions",
      icon: "💾",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        ></div>
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

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-xl z-[100] border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              WG.dev
            </div>

            <div className="hidden md:flex space-x-8">
              {["home", "about", "work", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
                >
                  {section}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            <button className="md:hidden text-white z-[110]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10 bg-black/95 backdrop-blur-xl mt-4">
              {["home", "about", "work", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-3 px-4 capitalize text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-24 md:pt-32"
        ref={heroRef}
      >
        <div className="max-w-6xl mx-auto text-center relative z-20">
          {/* Animated Profile Image */}
          <div className="relative mb-8 inline-block">
            <div className="relative z-30">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 p-1 animate-spin-slow">
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
          </div>

          {/* Animated Text */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
                Wimukthi
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Gunarathna
              </span>
            </h1>

            <div className="text-xl md:text-2xl text-gray-300 space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Brain className="w-6 h-6 text-purple-400" />
                <span>Data Science Undergraduate</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Code2 className="w-6 h-6 text-pink-400" />
                <span>Full Stack Developer</span>
              </div>
            </div>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Crafting innovative digital experiences through the perfect blend of data science insights and full-stack
              development expertise. Passionate about building scalable solutions that make a difference.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[180px] h-14"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Let's Collaborate
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 bg-transparent hover:shadow-lg min-w-[160px] h-14"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>

            <div className="flex justify-center space-x-6 pt-8">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Globe, href: "#", label: "Portfolio" },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                >
                  <Icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <MousePointer className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section - Revamped */}
      <section id="about" className="py-20 px-6 lg:px-8 relative z-10" ref={addRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Bridging data insights with robust development to build impactful solutions.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Profile Card */}
            <Card className="lg:col-span-2 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-white mb-6">My Journey & Expertise</h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  Detail-oriented Data Science undergraduate at SLIIT with hands-on experience in full-stack web
                  development, machine learning, and statistical analysis. Proficient in MERN stack, Next.js, RESTful
                  APIs, and DevOps practices.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I thrive on building scalable, user-centric solutions, proven through academic and industry projects.
                  My passion lies in contributing to innovative teams and advancing the fields of data science and
                  software development.
                </p>
              </CardContent>
            </Card>

            {/* Education Card */}
            <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-10 h-10 text-purple-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Education</h3>
                    <p className="text-purple-300 text-sm">Academic Foundation</p>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">BSc Information Technology</h4>
                <p className="text-purple-300 mb-2">SLIIT • Data Science Specialization</p>
                <div className="flex justify-between items-center text-gray-400 text-sm">
                  <span>GPA: 3.19</span>
                  <span>2022 - Present</span>
                </div>
                <div className="mt-4">
                  <h5 className="font-semibold text-white mb-2">Key Areas:</h5>
                  <div className="flex flex-wrap gap-2">
                    {["MERN Stack", "Next.js", "Machine Learning", "RESTful APIs", "DevOps", "Data Warehousing"].map(
                      (skill) => (
                        <Badge key={skill} variant="secondary" className="bg-purple-800/30 text-purple-200">
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission, Passion, Vision Cards */}
            <Card className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border-pink-500/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Target className="w-10 h-10 text-pink-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">My Mission</h3>
                    <p className="text-pink-300 text-sm">Driving Innovation</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To bridge data science and full-stack development, creating intelligent applications that solve
                  real-world problems with elegant user experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-10 h-10 text-purple-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">My Passion</h3>
                    <p className="text-purple-300 text-sm">Building & Learning</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Passionate about leveraging cutting-edge technologies to build scalable, user-centric solutions that
                  make a meaningful impact.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border-pink-500/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Handshake className="w-10 h-10 text-pink-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">My Vision</h3>
                    <p className="text-pink-300 text-sm">Future Contributions</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To become a leading innovator in the intersection of data science and software development,
                  contributing to transformative digital solutions.
                </p>
              </CardContent>
            </Card>

            {/* Contact Info Cards - Combined into one for better layout */}
            <Card className="lg:col-span-3 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Get In Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: Phone, label: "Phone", value: "+94 71 7989333", color: "purple" },
                    { icon: Mail, label: "Email", value: "wimukthi316@gmail.com", color: "pink" },
                    { icon: MapPin, label: "Location", value: "Kaduwela, LK", color: "purple" },
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
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-20 px-6 lg:px-8 relative z-10" ref={addRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Selected Work
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of my most impactful projects, demonstrating expertise across full-stack development, mobile
              applications, and data-driven solutions.
            </p>
          </div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500`}
                    ></div>
                    <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all duration-500">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="rounded-xl w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <Badge className={`bg-gradient-to-r ${project.gradient} text-white mb-4 px-4 py-1`}>
                      {project.type}
                    </Badge>
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-2">{project.title}</h3>
                    <p className="text-xl text-purple-300 mb-4">{project.subtitle}</p>
                    <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-purple-400/30 text-purple-300 bg-purple-900/20 backdrop-blur-sm px-3 py-1"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 lg:px-8 relative z-10" ref={addRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technical Arsenal
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks that power my development journey.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="bg-gradient-to-br from-gray-900/30 to-black/30 border-white/10 backdrop-blur-sm hover:scale-105 hover:border-purple-400/30 transition-all duration-500 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.logo}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{skill.name}</h3>
                  <p className="text-xs text-gray-400 mb-3">{skill.category}</p>

                  {/* Skill Level Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-purple-300">{skill.level}%</span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-white mb-12">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-gray-900/30 to-black/30 border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-500 group"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {cert.icon}
                    </div>
                    <h4 className="text-white font-semibold mb-2 text-sm leading-tight">{cert.title}</h4>
                    <p className="text-purple-300 text-xs mb-1">{cert.issuer}</p>
                    <p className="text-gray-400 text-xs">{cert.code}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-8 relative z-10" ref={addRef}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Create Something Amazing
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's collaborate and build something extraordinary together.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[220px] h-14"
            >
              <Mail className="w-5 h-5 mr-2" />
              Start a Conversation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 bg-transparent hover:shadow-lg min-w-[180px] h-12"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-white/10 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
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
