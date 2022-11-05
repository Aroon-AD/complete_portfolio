import React from 'react'
import SampleImg from '../Assets/hero.svg'
// import resume from '../../public/ARUNPRAKASH_FRONTEND.pdf'
// import Backgrnd from '../Assets/bg.jpg'

export default function MainContent() {

  return (
    <React.Fragment>
      <div className='w-full lg:w-1/2 text-center pb-28 pt-24 '>
        <h2 className='text-3xl lg:text-7xl font-bold text-white'>
          ARUN
          <br />
          PRAKASH
        </h2>
        <p className='text-2xl text-white mt-6 animate-pulse '>
          Front-End Developer
        </p>
        <div className='hidden lg:flex justify-center mt-8'>
          <span className=' bg-violet-700 text-white px-3 py-2 rounded-md mr-8'>
            <a href="ARUNPRAKASH_FRONTEND.pdf" download="ARUNPRAKASH_FRONTEND.pdf" className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <h2>
                Resume
              </h2>
            </a>
          </span>
          <span className='bg-cyan-400 text-white px-3 py-2 rounded-md '>
            <a href="https://github.com/Aroon-AD?tab=repositories" target="_blank" rel="noopener noreferrer" className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
              <h2>
                My Repo
              </h2>
            </a>
          </span>
        </div>
        <div className='flex lg:hidden justify-center mt-8'>
          <span className=' bg-violet-700 text-white px-2 py-2 rounded-md mr-8'>
            <a href="ARUNPRAKASH_FRONTEND.pdf" download="ARUNPRAKASH_FRONTEND.pdf" className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <h2>
                Resume
              </h2>
            </a>
          </span>
          <span className='bg-cyan-400 text-white px-3 py-2 rounded-md'>
            <a href="https://github.com/Aroon-AD?tab=repositories" className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
              <h2 className='whitespace-nowrap'>
                My Repo
              </h2>
            </a>
          </span>
        </div>
      </div>
      <div className='w-1/2  lg:flex hidden'>
        <img className='rounded-xl' src={SampleImg} alt='123' />
      </div>
    </React.Fragment >
  )
}
