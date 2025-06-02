import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

interface Skill {
  id: number
  name: string
  category: string
  proficiency: number
  icon: string
}

interface SkillsByCategory {
  [key: string]: Skill[]
}

export default function Skills() {
  const [skillsByCategory, setSkillsByCategory] = useState<SkillsByCategory>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('/api/skills/by_category/')
        setSkillsByCategory(response.data)
      } catch (error) {
        console.error('Error fetching skills:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Skills</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            My technical expertise and proficiency levels
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="flex flex-col"
              >
                <dt className="text-lg font-semibold leading-7 text-gray-900 mb-6 capitalize">
                  {category}
                </dt>
                <dd className="flex flex-col gap-y-4">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="relative flex items-center gap-x-4"
                    >
                      {skill.icon && (
                        <img src={skill.icon} alt={skill.name} className="h-8 w-8 rounded-full bg-gray-50" />
                      )}
                      <div className="flex-auto">
                        <div className="flex items-center justify-between gap-x-4">
                          <p className="text-sm font-semibold leading-6 text-gray-900">{skill.name}</p>
                          <div className="flex items-center gap-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`h-2 w-2 rounded-full ${
                                  i < skill.proficiency
                                    ? 'bg-primary-600'
                                    : 'bg-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 