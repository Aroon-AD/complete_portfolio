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






  return (
    <React.Fragment>
      <div id='Gallery' className='rounded-xl mx-5 bg-red-100 mb-5'>
        <h2 className='text-5xl font-bold text-center bg-clip-text text-transparent 
        bg-gradient-to-b from-[#6190E8] to-[#A7BFE8]'>Gallery</h2>
        <div className='flex'>
          <div className='overflow-hidden my-5 ' >
            <ul className='lg:flex hidden w-full'>
              <li className='w-45  p-5 '>
                <img className='h-72  w-full object-cover rounded-lg' src={img1} alt="" />
              </li>
              <li className='w-96 p-5'>
                <img className='h-72  w-full object-cover rounded-lg' src={img7} alt="" />
              </li>
              <li className='w-96 p-5'>
                <img className='h-72 w-full object-cover rounded-lg' src={img8} alt="" />
              </li>
              <li className='w-96 p-5'>
                <img className='h-72 w-full object-cover rounded-lg' src={img5} alt="" />
              </li>
            </ul>
          </div>
          <div>
            <ul className='lg:hidden mx-auto w-full'>
              <li className='w-45 p-5 '>
                <img className='h-72 w-full object-cover rounded-lg' src={img1} alt="" />
              </li>
              <li className='w-45 p-5'>
                <img className='h-72 w-full object-cover rounded-lg' src={img7} alt="" />
              </li>
              <li className='w-45 p-5'>
                <img className='h-72 w-full object-cover rounded-lg' src={img8} alt="" />
              </li>
              <li className='w-45 p-5'>
                <img className='h-72 w-full object-cover rounded-lg' src={img9} alt="" />
              </li>
            </ul>
          </div>

        </div>
      </div>




    </React.Fragment>
  )
}


