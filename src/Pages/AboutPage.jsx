import React from 'react'
import { PageLayout } from '../layouts'

const AboutPage = () => {
  return (
    <PageLayout 
      title="About Me" 
      subtitle="Get to know more about my journey and experience"
      className="pt-16"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">My Story</h3>
            <p className="text-lg text-gray-700 mb-6">
              I'm a passionate full-stack developer with a love for creating innovative solutions 
              and bringing ideas to life through code. My journey in programming started during 
              my university years, where I discovered the power of technology to solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Over the years, I've worked on various projects ranging from web applications to 
              mobile apps, always striving to learn new technologies and improve my skills. 
              I believe in writing clean, maintainable code and creating user experiences that 
              are both functional and delightful.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="text-xl font-bold mb-2">Mission</h4>
            <p className="text-gray-600">
              To create meaningful digital experiences that solve real problems and make a positive impact.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">👁️</span>
            </div>
            <h4 className="text-xl font-bold mb-2">Vision</h4>
            <p className="text-gray-600">
              To be at the forefront of technology innovation, constantly learning and growing.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="text-xl font-bold mb-2">Values</h4>
            <p className="text-gray-600">
              Quality, integrity, continuous learning, and collaboration are at the core of everything I do.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Experience & Education</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h4 className="text-xl font-bold">Full Stack Developer</h4>
                <p className="text-gray-600 mb-2">Company Name • 2023 - Present</p>
                <p className="text-gray-700">
                  Developing and maintaining web applications using React, Node.js, and MongoDB.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h4 className="text-xl font-bold">Frontend Developer</h4>
                <p className="text-gray-600 mb-2">Previous Company • 2022 - 2023</p>
                <p className="text-gray-700">
                  Specialized in creating responsive and interactive user interfaces.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h4 className="text-xl font-bold">Bachelor's in Computer Science</h4>
                <p className="text-gray-600 mb-2">University Name • 2018 - 2022</p>
                <p className="text-gray-700">
                  Focused on software engineering, algorithms, and web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default AboutPage