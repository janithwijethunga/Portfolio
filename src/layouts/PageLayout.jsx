import React from 'react'

const PageLayout = ({ title, subtitle, children, className = "" }) => {
  return (
    <div className={`container mx-auto px-4 py-8 ${className}`}>
      {title && (
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}

export default PageLayout