import React from 'react'
import img1 from '../Assets/img1.JPG'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'
import img6 from '../Assets/img6.jpg'
import img7 from '../Assets/img7.jpg'
import img8 from '../Assets/img8.jpg'
import img9 from '../Assets/img9.jpg'

export default function Gallery() {
  const images = [
    { src: img1, alt: "Portfolio Image 1" },
    { src: img7, alt: "Portfolio Image 2" },
    { src: img8, alt: "Portfolio Image 3" },
    { src: img5, alt: "Portfolio Image 4" },
    { src: img2, alt: "Portfolio Image 5" },
    { src: img3, alt: "Portfolio Image 6" },
    { src: img4, alt: "Portfolio Image 7" },
    { src: img6, alt: "Portfolio Image 8" },
    { src: img9, alt: "Portfolio Image 9" }
  ];

  return (
    <div id='Gallery' className='mx-3 sm:mx-6 mb-6 sm:mb-8'>
      <div className='backdrop-blur-md bg-white/5 rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-8'>
        <h2 className='text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent'>
          Gallery
        </h2>
        <p className='text-center text-white/70 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-2'>
          A visual journey through my projects, experiences, and creative moments.
        </p>
        
        {/* Mobile: Simple grid, Desktop: Masonry */}
        <div className='sm:columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-6 space-y-3 sm:space-y-6'>
          {images.map((image, index) => (
            <div key={index} className='break-inside-avoid group mb-3 sm:mb-0'>
              <div className='relative overflow-hidden rounded-lg sm:rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300'>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className='w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4'>
                    <div className='flex items-center justify-between'>
                      <span className='text-white text-xs sm:text-sm font-medium'>{image.alt}</span>
                      <button className='bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2 hover:bg-white/30 transition-colors'>
                        <svg className='w-3 h-3 sm:w-4 sm:h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gallery Stats */}
        <div className='mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6'>
          <div className='text-center backdrop-blur-sm bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20'>
            <div className='text-xl sm:text-2xl font-bold text-white mb-1'>{images.length}</div>
            <div className='text-white/70 text-xs sm:text-sm'>Photos</div>
          </div>
          <div className='text-center backdrop-blur-sm bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20'>
            <div className='text-xl sm:text-2xl font-bold text-white mb-1'>5+</div>
            <div className='text-white/70 text-xs sm:text-sm'>Years Captured</div>
          </div>
          <div className='text-center backdrop-blur-sm bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20'>
            <div className='text-xl sm:text-2xl font-bold text-white mb-1'>50+</div>
            <div className='text-white/70 text-xs sm:text-sm'>Memories</div>
          </div>
          <div className='text-center backdrop-blur-sm bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20'>
            <div className='text-xl sm:text-2xl font-bold text-white mb-1'>∞</div>
            <div className='text-white/70 text-xs sm:text-sm'>Inspiration</div>
          </div>
        </div>
      </div>
    </div>
  )
}


