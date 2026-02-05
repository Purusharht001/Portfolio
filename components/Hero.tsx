'use client'

import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [orbOffset, setOrbOffset] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        setMousePosition({ x, y })
        setOrbOffset({
          x: x * 30,
          y: y * 30,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
    >
      {/* Animated Background Orbs */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(8px, 12px); }
        }
        .orb-green {
          animation: float-slow 8s ease-in-out infinite;
        }
        .orb-cyan-1 {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 1s;
        }
        .orb-cyan-2 {
          animation: float-slow 9s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>

      {/* Green Orb - Upper Left */}
      <div
        className="orb-green absolute -top-40 -left-32 w-96 h-96 rounded-full opacity-50"
        style={{
          background: 'radial-gradient(circle, #00ff88 0%, transparent 70%)',
          filter: 'blur(100px)',
          willChange: 'transform',
          transform: `translate(${orbOffset.x * 0.8}px, ${orbOffset.y * 0.8}px)`,
        }}
      />

      {/* Cyan Orb 1 - Center Right */}
      <div
        className="orb-cyan-1 absolute top-1/4 -right-40 w-80 h-80 rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, #00d9ff 0%, transparent 70%)',
          filter: 'blur(110px)',
          willChange: 'transform',
          transform: `translate(${orbOffset.x * 0.6}px, ${orbOffset.y * 0.6}px)`,
        }}
      />

      {/* Cyan Orb 2 - Lower Center */}
      <div
        className="orb-cyan-2 absolute -bottom-32 left-1/3 w-64 h-64 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, #00d9ff 0%, transparent 70%)',
          filter: 'blur(90px)',
          willChange: 'transform',
          transform: `translate(${orbOffset.x * 0.4}px, ${orbOffset.y * 0.4}px)`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Label */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-4 font-medium">
            Full-Stack Developer
          </p>
        </div>

        {/* Main Greeting */}
        <div
          className={`transform transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6 text-white">
            Purusharth{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Kumar
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Computer Science Student & Full-Stack Developer
          </p>
        </div>

        {/* Description */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I build efficient, scalable, and user-friendly digital experiences. From complex
            backend systems to beautiful frontend interfaces, I love turning ideas into reality.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="/Abhishek_Singh_Resume.pdf"
            download="Abhishek_Singh_Resume.pdf"
            className="inline-flex items-center justify-center px-8 py-3 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-all duration-300 font-semibold group hover:scale-105"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </a>
          <button
            onClick={() => scrollToSection('#projects')}
            className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 font-semibold hover:scale-105 backdrop-blur-sm"
          >
            View My Work
          </button>
        </div>

        {/* Social Links */}
        <div
          className={`flex gap-6 justify-center transform transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="https://github.com/Purusharht001"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 border border-white/20 rounded-full text-white hover:text-cyan-400 hover:border-cyan-400 hover:bg-white/10 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 border border-white/20 rounded-full text-white hover:text-cyan-400 hover:border-cyan-400 hover:bg-white/10 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:purusharth@example.com"
            className="p-3 bg-white/5 border border-white/20 rounded-full text-white hover:text-cyan-400 hover:border-cyan-400 hover:bg-white/10 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
