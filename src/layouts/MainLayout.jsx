import React from 'react'
import Navbar from '../Components/Navbar'

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-300/20">
      <Navbar />
      <main className="w-full">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Janith Wijethunga. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout