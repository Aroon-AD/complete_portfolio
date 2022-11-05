import React from 'react'
import insta from '../Assets/insta.svg'
import snapchat from '../Assets/snapchat.svg'
import twitter from '../Assets/twitter.svg'


export default function Contact() {
  return (
    <div className='p-5 bg-orange-200 m-5 rounded-lg'>
      <div className='text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent 
    bg-gradient-to-b from-[#932dd6] to-[#b35353]'>
        <h3>Social Media</h3>
      </div>
      <div className='lg:flex p-3 text-md font-bold px-10'>
        <div className='w-1/3 flex text-center py-4'>
          <img className='w-14 mr-2' src={insta} alt='' />
          <h2 className='lg:font-bold font-semibold lg:text-3xl pt-3'>__p_AROON__</h2>
        </div>
        <div className='w-1/3 flex text-center pb-4'>
          <img className='w-14 mr-2' src={snapchat} alt='' />
          <h2 className='lg:font-bold font-semibold lg:text-3xl pt-3'>Aroon</h2>
        </div>
        <div className='w-1/3 flex text-center'>
          <img className='w-14 mr-2' src={twitter} alt='' />
          <h2 className='lg:font-bold font-semibold lg:text-3xl pt-5'>
            @AROONAD2
          </h2>
        </div>
      </div>
    </div>
  )
}
