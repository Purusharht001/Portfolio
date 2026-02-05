'use client'

import { useEffect, useState } from 'react'

const About = () => {
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

    const section = document.querySelector('#about')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const education = [
    {
      level: '10th Grade',
      school: 'Raja Rammohan Roy Academy',
      location: 'Dehradun',
      year: '2019',
    },
    {
      level: '12th Grade',
      school: 'Central Public School',
      location: 'Chapra',
      year: '2021',
    },
    {
      level: '3rd Year B.Tech',
      school: 'VIT Chennai',
      major: 'Computer Science',
      location: 'Kelambakkam, Tamil Nadu',
      year: '2022-2025',
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Glowing Orbs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-40 blur-3xl float-slow" style={{
        background: 'radial-gradient(circle, #00ff88 0%, transparent 70%)',
        mixBlendMode: 'screen',
        animation: 'float-slow 8s ease-in-out infinite',
      }} />
      <div className="absolute -top-40 right-20 w-80 h-80 rounded-full opacity-35 blur-3xl float-slow" style={{
        background: 'radial-gradient(circle, #00d9ff 0%, transparent 70%)',
        mixBlendMode: 'screen',
        animation: 'float-slow 10s ease-in-out infinite 1s',
      }} />
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-primary">About</span> Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        {/* Bio */}
        <div
          className={`mb-12 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate Computer Science student at VIT Chennai with a strong foundation in
            full-stack web development. With hands-on experience in building production-grade
            applications, I specialize in creating intuitive user interfaces and robust backend
            systems. I'm driven by the challenge of solving complex problems and continuously
            expanding my technical skill set.
          </p>
        </div>

        {/* Education Timeline */}
        <div
          className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold mb-8">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="flex gap-6 relative">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  {index !== education.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-primary to-transparent mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-6">
                  <h4 className="text-lg font-semibold text-foreground">{edu.level}</h4>
                  <p className="text-primary font-medium">{edu.school}</p>
                  <p className="text-muted-foreground text-sm">
                    {edu.major && `${edu.major} • `}
                    {edu.location}
                  </p>
                  <p className="text-muted-foreground text-sm">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
