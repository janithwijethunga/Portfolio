import React from 'react'

const SectionLayout = ({ title, subtitle, children, className = "", id }) => {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  )
}

export default SectionLayout