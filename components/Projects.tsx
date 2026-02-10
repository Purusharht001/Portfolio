'use client'

import { useEffect, useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
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

    const section = document.querySelector('#projects')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: 'TO_DO_List',
      emoji: '✓',
      description: 'Full-stack task management application with user authentication and real-time task updates',
      technologies: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'JWT Authentication'],
      features: [
        'User authentication with JWT',
        'Create, edit, and delete tasks',
        'Persistent storage with MongoDB',
        'Real-time task updates',
      ],
      github: 'https://github.com/Purusharht001/TO_DO_List',
      category: 'Web Development',
    },
    {
      title: 'blpl-web',
      emoji: '🌐',
      description: 'Production web application developed during internship at Broadway Links Pvt. Ltd with complete authentication system and responsive UI',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      features: [
        'Complete authentication system',
        'Responsive design',
        'API integration',
        'Production-grade code quality',
      ],
      github: 'https://github.com/Purusharht001/blpl-web',
      category: 'Web Development',
    },
    {
      title: 'Flower_Name_Prediction',
      emoji: '🌸',
      description: 'Machine Learning model that predicts flower species using the Iris dataset with 95% accuracy',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      features: [
        '95% accuracy on Iris dataset',
        'Multiple classification algorithms',
        'Data preprocessing pipeline',
        'Model evaluation metrics',
      ],
      github: 'https://github.com/Purusharht001/Flower_Name_Prediction',
      category: 'Machine Learning',
    },
    {
      title: 'Chatbot-Project',
      emoji: '💬',
      description: 'Intelligent chatbot application using Natural Language Processing and pattern matching for conversational interactions',
      technologies: ['Python', 'NLP', 'NLTK'],
      features: [
        'Pattern matching algorithms',
        'Context awareness',
        'Learning capabilities',
        'Natural language understanding',
      ],
      github: 'https://github.com/Purusharht001/Chatbot-Project',
      category: 'Machine Learning',
    },
    {
      title: 'Predicting_houseprice_mlproject',
      emoji: '🏠',
      description: 'Advanced machine learning project that predicts house prices using multiple regression algorithms and feature engineering',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Data Analysis', 'Machine Learning'],
      features: [
        'Multiple regression algorithms',
        'Feature engineering',
        'Data analysis and visualization',
        'Model optimization',
      ],
      github: 'https://github.com/Purusharht001/Predicting_houseprice_mlproject',
      category: 'Machine Learning',
    },
  ]

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Glowing Orbs */}
      <div className="absolute -bottom-32 right-0 w-96 h-96 rounded-full opacity-40 blur-3xl" style={{
        background: 'radial-gradient(circle, #00d9ff 0%, transparent 70%)',
        mixBlendMode: 'screen',
        animation: 'float-slow 9s ease-in-out infinite',
      }} />
      <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full opacity-35 blur-3xl" style={{
        background: 'radial-gradient(circle, #00ff88 0%, transparent 70%)',
        mixBlendMode: 'screen',
        animation: 'float-slow 10s ease-in-out infinite 2s',
      }} />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative h-full p-6 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0',
              }}
            >
              {/* Project Header */}
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <div className="text-4xl mb-2">{project.emoji}</div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-2 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Technologies */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Features */}
              <div className="mb-6 hidden group-hover:block">
                <p className="text-xs font-semibold text-foreground mb-2">Key Features:</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {project.features.slice(0, 2).map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>

              {/* Links - Spacer */}
              <div className="mt-auto pt-6 border-t border-border">
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-secondary transition-all duration-300 text-sm font-semibold"
                    aria-label="GitHub repository"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
