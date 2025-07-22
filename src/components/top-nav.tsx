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
  const itemRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({}) // Ref to store individual nav item buttons
  const [lineStyle, setLineStyle] = useState({ width: 0, x: 0 })

  // Define nav items
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "work", icon: Briefcase, label: "Work" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "contact", icon: Mail, label: "Contact" },
  ]

  // Effect for observing sections and setting activeSection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
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

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      observer.observe(section)
      sectionRefs.current[section.id] = section as HTMLElement
    })

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  // Effect for calculating and updating the line style based on active section
  useEffect(() => {
    const updateLineStyle = () => {
      // Use requestAnimationFrame to ensure DOM is stable before measuring
      requestAnimationFrame(() => {
        const activeItem = itemRefs.current[activeSection]
        const parentOfButtons = document.querySelector(".flex.gap-8.flex-row.leading-7")

        if (activeItem && parentOfButtons) {
          const itemRect = activeItem.getBoundingClientRect()
          const parentRect = parentOfButtons.getBoundingClientRect()

          const horizontalPadding = 24 // from px-6

          setLineStyle({
            width: itemRect.width - 2 * horizontalPadding,
            x: itemRect.left - parentRect.left + horizontalPadding,
          })
        }
        // Removed the else block that caused the useEffect dependency warning.
        // If activeItem or parentOfButtons are null, lineStyle will simply retain its last value.
      })
    }

    // Update on activeSection change and on window resize
    updateLineStyle()
    window.addEventListener("resize", updateLineStyle)

    return () => {
      window.removeEventListener("resize", updateLineStyle)
    }
  }, [activeSection]) // activeSection is the only dependency needed here

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 h-auto w-fit bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg rounded-full z-[100] hidden md:flex flex-row items-center justify-center gap-8 transition-transform duration-300 py-0 px-24`}
    >
      {/* My Name Initials */}
      <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300 mr-4">
        WG.dev
      </div>

      <div className="relative flex flex-row items-center justify-center h-full">
        {" "}
        {/* This div now contains both the timeline and the nav items */}
        <div className="relative flex gap-8 flex-row leading-7">
          {" "}
          {/* Made this relative */}
          {/* Active Timeline Line (horizontal) - NOW INSIDE THIS DIV */}
          <motion.div
            className="absolute bottom-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full h-0.5 shadow-md shadow-blue-500/50"
            initial={false}
            animate={{
              width: lineStyle.width,
              x: lineStyle.x,
            }}
            transition={{ stiffness: 150, damping: 25 }}
          />
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <motion.button
                key={item.id}
                ref={(el) => { itemRefs.current[item.id] = el }} // Assign ref to each button
                onClick={() => onNavigate(item.id)}
                className="relative flex flex-col items-center justify-center group focus:outline-none p-2 px-6" // Added padding for better spacing
                whileHover={{ scale: 1.05 }} // Slightly reduced hover scale for stacked items
                whileTap={{ scale: 0.95 }}
                aria-current={isActive ? "page" : undefined}
              >
                {/* Orb Effect - applied to the icon container */}
                <motion.div
                  className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg"
                      : "bg-white/10 group-hover:bg-white/20"
                  }`}
                  initial={false}
                  animate={{ scale: isActive ? 1.2 : 1 }}
                  transition={{ stiffness: 300, damping: 20 }}
                >
                  <item.icon
                    className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-white" : "text-gray-300 group-hover:text-white"}`}
                  />
                </motion.div>
                {/* Label below icon */}
                <span
                  className={`text-xs font-medium mt-1 transition-colors duration-300 ${isActive ? "text-blue-300" : "text-gray-400 group-hover:text-white"}`}
                >
                  {item.label}
                </span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
