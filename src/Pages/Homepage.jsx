import React from 'react'
import { SectionLayout } from '../layouts'
import Hero from '../Components/Hero Section/Hero'

const Homepage = () => {
  return (
    <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
      {/* Hero Section */}
      <SectionLayout id="home" className="min-h-screen flex items-center">
        <Hero />
      </SectionLayout>

      {/* About Section */}
      <SectionLayout 
        id="about" 
        title="About Me" 
        subtitle="Learn more about my background and passion for development"
        className="bg-gray-50"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              I'm a passionate full-stack developer with a love for creating innovative solutions 
              and bringing ideas to life through code. With expertise in modern web technologies, 
              I enjoy building user-friendly applications that make a difference.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-6xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Skills Section */}
      <SectionLayout 
        id="skills" 
        title="Skills & Technologies" 
        subtitle="The tools and technologies I work with"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Add your skills here */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-orange-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-2xl">⚛️</span>
            </div>
            <p className="font-semibold">React</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-2xl">📜</span>
            </div>
            <p className="font-semibold">JavaScript</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-2xl">🎨</span>
            </div>
            <p className="font-semibold">CSS</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-2xl">📱</span>
            </div>
            <p className="font-semibold">HTML</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-2xl">🚀</span>
            </div>
            <p className="font-semibold">Node.js</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-2xl">💾</span>
            </div>
            <p className="font-semibold">MongoDB</p>
          </div>
        </div>
      </SectionLayout>

      {/* Projects Section */}
      <SectionLayout 
        id="projects" 
        title="Featured Projects" 
        subtitle="Some of my recent work and contributions"
        className="bg-gray-50"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards will go here */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-600 mb-4">A brief description of your project goes here.</p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-green-400 to-blue-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p className="text-gray-600 mb-4">A brief description of your project goes here.</p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">CSS</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project 3</h3>
              <p className="text-gray-600 mb-4">A brief description of your project goes here.</p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Contact Section */}
      <SectionLayout 
        id="contact" 
        title="Get In Touch" 
        subtitle="Let's discuss your next project or opportunity"
      >
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-6 h-6 mr-3">📧</span>
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 mr-3">📱</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 mr-3">🌐</span>
                  <span>LinkedIn: /in/janithwijethunga</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 mr-3">💻</span>
                  <span>GitHub: /janithwijethunga</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  )
}

export default Homepage
