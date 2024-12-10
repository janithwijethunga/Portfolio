import React from 'react'
import Navbar from '../components/Navbar'
import Me from '../components/Me'
import Aboutme from '../components/AboutMe'
import Skills from '../components/Skills'
import Interests from '../components/Interests'
import Education from '../components/Education'

function Homepage() {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Me/>
      <Aboutme/>
      <Skills/>
      <Interests/>
      <Education/>
    </div>
  )
}

export default Homepage