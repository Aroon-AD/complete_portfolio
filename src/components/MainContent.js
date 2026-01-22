import React from 'react'
import SampleImg from '../Assets/hero.svg'

export default function MainContent() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between min-h-[80vh] gap-12'>
      {/* Text Content */}
      <div className='flex-1 text-center lg:text-left space-y-8'>
        {/* Main Heading */}
        <div className='space-y-4'>
          <div className='inline-block px-4 py-2 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full border border-pink-500/30 backdrop-blur-sm'>
            <span className='text-pink-300 text-sm font-medium'>👋 Hello, I'm</span>
          </div>
          <h1 className='text-5xl lg:text-7xl font-bold text-white leading-tight'>
            <span className='bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent'>
              ARUN
            </span>
            <br />
            <span className='bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              PRAKASH
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className='space-y-4'>
          <p className='text-2xl lg:text-3xl text-white/90 font-light'>
            <span className='text-pink-400'>Front-End</span> Developer
          </p>
          <p className='text-lg text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed'>
            Crafting beautiful, responsive web experiences with modern technologies. 
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className='flex flex-wrap justify-center lg:justify-start gap-3'>
          {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech) => (
            <span key={tech} className='px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm border border-white/20'>
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
          <a 
            href="ARUN PRAKASH FRONTEND.pdf" 
            download="ARUN_PRAKASH_FRONTEND.pdf" 
            className='group bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3'
          >
            <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download Resume</span>
          </a>
          
          <a 
            href="https://github.com/Aroon-AD?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40 flex items-center justify-center space-x-3'
          >
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View Projects</span>
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className='flex-1 flex justify-center lg:justify-end'>
        <div className='relative'>
          {/* Decorative elements */}
          <div className='absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-3xl blur-xl'></div>
          <div className='absolute -inset-2 bg-gradient-to-r from-pink-500/30 to-violet-500/30 rounded-2xl blur-lg'></div>
          
          {/* Main image container */}
          <div className='relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20'>
            <img 
              className='w-full max-w-md h-auto rounded-xl transform hover:scale-105 transition-transform duration-300' 
              src={SampleImg} 
              alt='Arun Prakash - Frontend Developer' 
            />
          </div>
          
          {/* Floating elements */}
          <div className='absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full opacity-20 animate-pulse'></div>
          <div className='absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20 animate-pulse delay-1000'></div>
        </div>
      </div>
    </div>
  )
}
