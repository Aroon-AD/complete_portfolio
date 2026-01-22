import React, { useState } from 'react'
import MainContent from './MainContent';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-scroll';

export default function Home() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <div className='relative min-h-screen' id='Home'>
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-90"></div>
      
      <div className='relative z-10 p-6'>
        {/* Navigation */}
        <nav className='backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-xl'>
          <div className='container mx-auto px-6 py-4'>
            <div className='flex items-center justify-between'>
              {/* Logo */}
              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl flex items-center justify-center'>
                  <span className='text-white font-bold text-xl'>AR</span>
                </div>
                <span className='text-white font-semibold text-lg hidden sm:block'>Arun Prakash</span>
              </div>

              {/* Desktop Navigation */}
              <ul className='hidden lg:flex items-center space-x-8 text-white font-medium'>
                <li>
                  <Link
                    activeClass="text-pink-400" 
                    to="Projects" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}
                    className='hover:text-pink-400 transition-colors cursor-pointer'
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="text-pink-400" 
                    to="Next" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}
                    className='hover:text-pink-400 transition-colors cursor-pointer'
                  >
                    What's Next
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="text-pink-400" 
                    to="Gallery" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}
                    className='hover:text-pink-400 transition-colors cursor-pointer'
                  >
                    Gallery
                  </Link>
                </li>
              </ul>

              {/* Social Link & Mobile Menu */}
              <div className='flex items-center space-x-4'>
                <Tooltip title='Connect on LinkedIn'>
                  <a 
                    href='https://www.linkedin.com/in/arun-prakash/' 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2'
                  >
                    <span className='hidden sm:block'>Connect</span>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                    </svg>
                  </a>
                </Tooltip>
                
                <button 
                  className='text-white lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors' 
                  onClick={() => setSideBarOpen(!sideBarOpen)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {sideBarOpen && (
              <div className='lg:hidden mt-4 pt-4 border-t border-white/20'>
                <ul className='space-y-3 text-white font-medium'>
                  <li>
                    <Link
                      activeClass="text-pink-400" 
                      to="Projects" 
                      spy={true} 
                      smooth={true} 
                      offset={-100} 
                      duration={500}
                      className='block hover:text-pink-400 transition-colors cursor-pointer'
                      onClick={() => setSideBarOpen(false)}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="text-pink-400" 
                      to="Next" 
                      spy={true} 
                      smooth={true} 
                      offset={-100} 
                      duration={500}
                      className='block hover:text-pink-400 transition-colors cursor-pointer'
                      onClick={() => setSideBarOpen(false)}
                    >
                      What's Next
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="text-pink-400" 
                      to="Gallery" 
                      spy={true} 
                      smooth={true} 
                      offset={-100} 
                      duration={500}
                      className='block hover:text-pink-400 transition-colors cursor-pointer'
                      onClick={() => setSideBarOpen(false)}
                    >
                      Gallery
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Content */}
        <div className='container mx-auto px-6 py-16'>
          <MainContent />
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
          <Link
            activeClass="active" 
            to="Projects" 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={500}
            className='flex flex-col items-center text-white/80 hover:text-white transition-colors cursor-pointer group'
          >
            <span className='text-sm mb-2 group-hover:animate-pulse'>Scroll to explore</span>
            <div className='animate-bounce'>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
