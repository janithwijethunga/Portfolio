import React from 'react'
import Navbar from '../components/Navbar'
import Me from '../components/Me'
import Aboutme from '../components/AboutMe'
import Skills from '../components/Skills'
import Interests from '../components/Interests'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Email from '../components/Email'

function Homepage() {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Me/>
      <Aboutme/>
      <Skills/>
      <Interests/>
      <Education/>
      <Projects/>
      <Contact/>
      <Email/>
    </div>
  )
}

export default Homepage