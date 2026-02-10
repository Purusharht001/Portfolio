'use client'

import { useEffect, useState } from 'react'
import { Briefcase, CheckCircle2 } from 'lucide-react'

const Experience = () => {
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

    const section = document.querySelector('#experience')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const experience = [
    {
      title: 'Junior Full-Stack Developer (Internship)',
      company: 'Broadway Links Pvt. Ltd.',
      duration: 'Ongoing',
      responsibilities: [
        'Developed full-stack web applications with complete authentication and authorization systems',
        'Built responsive UI components using React and Tailwind CSS',
        'Integrated RESTful APIs and optimized database queries',
        'Implemented security best practices and user data protection',
        'Collaborated with team members using Git and GitHub',
      ],
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    },
  ]

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Glowing Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full opacity-40 blur-3xl" style={{
        background: 'radial-gradient(circle, #00d9ff 0%, transparent 70%)',
        mixBlendMode: 'screen',
        animation: 'float-slow 10s ease-in-out infinite',
      }} />
      <div className="absolute -bottom-40 right-20 w-80 h-80 rounded-full opacity-35 blur-3xl" style={{
        background: 'radial-gradient(circle, #00ff88 0%, transparent 70%)',
        mixBlendMode: 'screen',
        animation: 'float-slow 9s ease-in-out infinite 2s',
      }} />
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-primary">Work</span> Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`p-8 bg-background border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{
                transitionDelay: isVisible ? `${index * 200}ms` : '0',
              }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg mt-1">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.duration}</p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
