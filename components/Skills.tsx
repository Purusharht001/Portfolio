'use client'

import { useEffect, useState } from 'react'
import {
  Code2,
  Database,
  Zap,
  GitBranch,
  Terminal,
  Palette,
} from 'lucide-react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.querySelector('#skills')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      icon: Palette,
      title: 'Frontend',
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'HTML/CSS',
        'Tailwind CSS',
        'Responsive Design',
      ],
    },
    {
      icon: Zap,
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication Systems'],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'Firebase'],
    },
    {
      icon: Terminal,
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Cursor IDE', 'Postman'],
    },
    {
      icon: Code2,
      title: 'Other',
      skills: [
        'Data Structures & Algorithms',
        'Problem Solving',
        'Web Performance Optimization',
      ],
    },
  ]

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Glowing Orbs */}
      <div className="absolute -top-32 right-1/3 w-96 h-96 rounded-full opacity-40 blur-3xl" style={{
        background: 'radial-gradient(circle, #00ff88 0%, transparent 70%)',
        mixBlendMode: 'screen',
        animation: 'float-slow 9s ease-in-out infinite',
      }} />
      <div className="absolute bottom-20 -left-40 w-80 h-80 rounded-full opacity-35 blur-3xl" style={{
        background: 'radial-gradient(circle, #00d9ff 0%, transparent 70%)',
        mixBlendMode: 'screen',
        animation: 'float-slow 11s ease-in-out infinite 1.5s',
      }} />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-primary">My</span> Skills
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className={`group p-6 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                  }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0',
                }}
              >
                {/* Icon */}
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-foreground">{category.title}</h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
