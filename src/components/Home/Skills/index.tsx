'use client'
import React, { useEffect, useState } from 'react'

interface Skill {
  name: string
  level: number
  icon: string
  color: string
}

const Skills = () => {
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({})

  const skills: Skill[] = [
    { name: 'PHP', level: 95, icon: '🟣', color: 'from-purple-500 to-purple-600' },
    { name: 'Laravel', level: 92, icon: '🔴', color: 'from-red-500 to-red-600' },
    { name: 'MySQL', level: 90, icon: '🟠', color: 'from-orange-500 to-orange-600' },
    { name: 'JavaScript', level: 88, icon: '🟡', color: 'from-yellow-500 to-yellow-600' },
    { name: 'Vue.js', level: 85, icon: '🟢', color: 'from-green-500 to-green-600' },
    { name: 'REST API', level: 90, icon: '🔵', color: 'from-blue-500 to-blue-600' },
    { name: 'Git', level: 87, icon: '⚫', color: 'from-gray-700 to-gray-800' },
    { name: 'Linux', level: 82, icon: '🐧', color: 'from-blue-600 to-blue-700' }
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      const newLevels: { [key: string]: number } = {}
      skills.forEach(skill => {
        newLevels[skill.name] = skill.level
      })
      setAnimatedLevels(newLevels)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 dark:bg-darkmode bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-midnight_text dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-grey dark:text-white/70 text-lg max-w-2xl mx-auto">
            Expertise across the full stack with modern technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-darklight rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              {/* Skill Icon */}
              <div className="text-center mb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl shadow-lg animate-pulse`}>
                  {skill.icon}
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-semibold text-midnight_text dark:text-white text-center mb-3">
                {skill.name}
              </h3>

              {/* Skill Level */}
              <div className="relative">
                <div className="flex justify-between text-sm text-grey dark:text-white/70 mb-2">
                  <span>Proficiency</span>
                  <span>{animatedLevels[skill.name] || 0}%</span>
                </div>

                {/* Progress Bar Background */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  {/* Animated Progress Bar */}
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{
                      width: `${animatedLevels[skill.name] || 0}%`,
                    }}
                  >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Skill Level Text */}
              <div className="text-center mt-3">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  skill.level >= 90 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  skill.level >= 85 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                  'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                }`}>
                  {skill.level >= 90 ? 'Expert' : skill.level >= 85 ? 'Advanced' : 'Proficient'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-midnight_text dark:text-white mb-6">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'ERP Systems', 'School Management', 'E-Commerce',
              'API Testing', 'Debugging', 'Postman', 'GraphQL',
              'Nuxt.js', 'HTML/CSS', 'Angular', 'Docker'
            ].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300 cursor-default"
                style={{
                  animationDelay: `${(index + skills.length) * 100}ms`,
                  animation: 'fadeInScale 0.6s ease-out forwards'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}

export default Skills
