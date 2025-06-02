import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Full Stack Developer
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I build beautiful, responsive, and user-friendly web applications using modern technologies.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/projects"
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                View Projects
              </Link>
              <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                Contact Me <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About section */}
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  I'm a passionate developer with experience in building modern web applications. I specialize in both frontend and backend development, creating seamless user experiences and robust server-side solutions.
                </p>
                <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600">
                  <ul role="list" className="space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                      <span className="mt-1 h-5 w-5 flex-none text-primary-600" aria-hidden="true">→</span>
                      <span>
                        <strong className="font-semibold text-gray-900">Frontend Development:</strong> React, TypeScript, Tailwind CSS
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <span className="mt-1 h-5 w-5 flex-none text-primary-600" aria-hidden="true">→</span>
                      <span>
                        <strong className="font-semibold text-gray-900">Backend Development:</strong> Django, Python, RESTful APIs
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <span className="mt-1 h-5 w-5 flex-none text-primary-600" aria-hidden="true">→</span>
                      <span>
                        <strong className="font-semibold text-gray-900">Tools & Technologies:</strong> Git, Docker, AWS
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <img
              src="/assets/pop-2.JPG"
              alt="Profile"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
} 