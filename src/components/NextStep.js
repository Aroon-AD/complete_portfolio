import React from 'react'

export const NextStep = () => {
  const skills = [
    {
      name: "Redux & Testing",
      description: "State management and comprehensive testing strategies",
      icon: "🔄",
      progress: 85
    },
    {
      name: "Next.js",
      description: "Server-side rendering and full-stack React applications",
      icon: "⚡",
      progress: 90
    },
    {
      name: "PostgreSQL",
      description: "Advanced database design and optimization",
      icon: "🗄️",
      progress: 75
    },
    {
      name: "TypeScript",
      description: "Type-safe JavaScript development",
      icon: "📘",
      progress: 80
    }
  ];

  return (
    <div id='Next' className='mx-3 sm:mx-6 mb-6 sm:mb-8'>
      <div className='backdrop-blur-md bg-white/5 rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-8'>
        <h2 className='text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent'>
          What's Next?
        </h2>
        <p className='text-center text-white/70 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2'>
          Continuously learning and expanding my skill set to stay ahead in the ever-evolving world of web development.
        </p>
        
        <div className='grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8 max-w-4xl mx-auto'>
          {skills.map((skill, index) => (
            <div key={index} className='backdrop-blur-sm bg-white/10 rounded-xl sm:rounded-2xl border border-white/20 p-4 sm:p-6 hover:bg-white/15 transition-all duration-300 group'>
              <div className='flex items-start space-x-3 sm:space-x-4'>
                <div className='text-2xl sm:text-3xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-pink-400/30 flex-shrink-0'>
                  {skill.icon}
                </div>
                <div className='flex-1 min-w-0'>
                  <h3 className='text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2'>{skill.name}</h3>
                  <p className='text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed'>{skill.description}</p>
                  
                  {/* Progress bar */}
                  <div className='space-y-1 sm:space-y-2'>
                    <div className='flex justify-between text-xs sm:text-sm'>
                      <span className='text-white/60'>Progress</span>
                      <span className='text-pink-300 font-medium'>{skill.progress}%</span>
                    </div>
                    <div className='w-full bg-white/10 rounded-full h-1.5 sm:h-2'>
                      <div 
                        className='bg-gradient-to-r from-pink-500 to-purple-500 h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out'
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Learning goals */}
        <div className='mt-8 sm:mt-12 text-center'>
          <h3 className='text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6'>2025 Learning Goals</h3>
          <div className='flex flex-wrap justify-center gap-2 sm:gap-3 px-2'>
            {['GraphQL', 'Docker', 'AWS', 'React Native', 'Three.js', 'WebAssembly'].map((goal, index) => (
              <span key={index} className='bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-indigo-400/30 text-xs sm:text-sm font-medium'>
                {goal}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
