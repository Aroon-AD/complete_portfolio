import React, { useState } from 'react'
import MainContent from './MainContent';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-scroll';

export default function Home() {
  const [sideBarOpen, setSideBarOpen] = useState(false);


  return (
    <React.Fragment>
      <div className='p-5' id='Home'>
        <section className='p-5 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 rounded-2xl'>
          <div className='container mx-auto '>
            <div className='flex'>
              <a href='' className='border-r pr-5 mr-5 hover:italic font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r
             from-pink-500 to-violet-500'>AR</a>
              <div className='my-auto'>
                <button className='text-white pt-2 lg:hidden' onClick={() => setSideBarOpen(!sideBarOpen)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
                <ul className='lg:flex hidden  text-white font-bold '>
                  <li className='pr-5 '>
                    <Link
                      activeClass="active" to="Projects" spy={true} smooth={true} offset={-100} duration={500}
                      className='px-3 hover:border-b'>Projects</Link>
                  </li>
                  <li className='pr-5'>
                    <Link
                      activeClass="active" to="Next" spy={true} smooth={true} offset={-100} duration={500}
                      className='px-3 hover:border-b'>What's Next</Link>
                  </li>
                  <li className='pr-5'>
                    <Link
                      activeClass="active" to="Gallery" spy={true} smooth={true} offset={-100} duration={500}
                      className='px-3 hover:border-b'>Gallery</Link>
                  </li>
                </ul>
              </div>
              <Tooltip title='__p_AROON__'>
                <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer" className='flex text-medium font-bold animate-bounce
             lg:bg-gradient-to-r from-orange-400 to-rose-400 text-white px-3 rounded ml-auto'>
                  <span data-tooltip-target='tooltip-insta' className='mt-2 hidden lg:block'>
                    Follow me on
                  </span>
                  <img src="https://img.icons8.com/bubbles/50/000000/instagram-new--v2.png" />
                </a>
              </Tooltip>
            </div>
            {sideBarOpen ?
              <div>
                <ul className='lg:hidden text-white font-bold '>
                  <li className='mt-1'>
                    <Link
                      activeClass="active" to="Projects" spy={true} smooth={true} offset={-100} duration={500}
                      className=''>Projects</Link>
                  </li>
                  <li className='mt-1 '>
                    <Link className=''
                      activeClass="active" to="Next" spy={true} smooth={true} offset={-100} duration={500}>
                      What's Next</Link>
                  </li>
                  <li className='mt-1'>
                    <Link className=''
                      activeClass="active" to="Gallery" spy={true} smooth={true} offset={-100} duration={500}
                    >Gallery</Link>
                  </li>
                </ul>
              </div>
              : ""}
            <div className='flex'>
              <MainContent />

            </div>
            <Link
              activeClass="active" to="Projects" spy={true} smooth={true} offset={-100} duration={500}
              className='flex justify-center animate-pulse text-white '>
              <h2 className='mr-2'>
                scroll down
              </h2>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}
