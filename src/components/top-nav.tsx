"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Home, User, Briefcase, Code, Mail } from "lucide-react"

interface TopNavProps {
  onNavigate: (sectionId: string) => void
}

export default function TopNav({ onNavigate }: TopNavProps) {
  const [activeSection, setActiveSection] = useState("home")
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -30% 0px", // Adjust to trigger when section is roughly in the middle of the viewport
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections with an ID
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      observer.observe(section)
      sectionRefs.current[section.id] = section as HTMLElement
    })

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "work", icon: Briefcase, label: "Work" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "contact", icon: Mail, label: "Contact" },
  ]

  // Calculate the position and width of the active timeline segment for horizontal layout
  // itemWidth = icon container width (w-8 = 32px) + gap (gap-12 = 48px) = 80px
  const itemWidth = 80
  const activeIndex = navItems.findIndex((item) => item.id === activeSection)
  const activeLineWidth = activeIndex >= 0 ? activeIndex * itemWidth + itemWidth / 2 : 0
  const activeLineX = activeIndex >= 0 ? activeIndex * itemWidth : 0

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 h-10 w-fit px-8 bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg rounded-full z-[100] hidden md:flex flex-row items-center justify-center gap-12 transition-transform duration-300 my-0 py-5`}
    >
      {/* My Name Initials */}
      <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300 mr-4">
        WG
      </div>
      <div className="relative flex flex-row items-center justify-center h-full">
        {/* Active Timeline Line (horizontal) */}
        

        <div className="flex flex-row gap-12">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id
            return (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="relative flex flex-col items-center justify-center group focus:outline-none h-8 w-8" // Smaller fixed size for consistent orb
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-current={isActive ? "page" : undefined}
              >
                {/* Orb Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-full transition-all duration-300`}
                  initial={false}
                  animate={{
                    scale: isActive ? 1.8 : 1, // Scale the orb
                    opacity: isActive ? 0.3 : 0, // Make it semi-transparent when active
                    background: isActive ? "radial-gradient(circle, var(--tw-gradient-stops))" : "transparent",
                    "--tw-gradient-from": isActive ? "rgba(59, 130, 246, 0.8)" : "", // blue-500 with opacity
                    "--tw-gradient-to": isActive ? "rgba(6, 182, 212, 0.8)" : "", // cyan-500 with opacity
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                ></motion.div>

                <motion.div
                  className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg"
                      : "bg-white/10 group-hover:bg-white/20"
                  }`}
                  initial={false}
                  animate={{ scale: isActive ? 1.2 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <item.icon
                    className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-white" : "text-gray-300 group-hover:text-white"}`}
                  />
                </motion.div>
                {/* Label span removed for icon-only navigation */}
              </motion.button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
