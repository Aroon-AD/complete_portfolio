import { Fragment } from "react"
import React from 'react'
import gmail from '../Assets/gmail.svg'
import Gototop from '../Assets/Gototop.svg'
import { Link } from "react-scroll"

export default function Footer() {
  return (
    // <Fragment>
    <>
      <div className="bg-sky-900 ">
        <div className="p-10 text-white container mx-auto font-bold flex">
          <h2 className="border-r border-white lg:text-xl text-xs mr-4 pr-4 mt-4 lg:mt-9">ARUNPRAKASH FRONTEND DEVELOPER</h2>
          <div className="lg:flex">
            <img className="w-7 mt-6 ml-10 mr-2 lg:w-14 lg:mr-4" src={gmail} alt='' />
            <p className="text-xs lg:text-xl lg:mt-9"> atleearun96@gmail.com</p>
          </div>
          {/* <span className="ml-auto ">
            <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-100} duration={500}>
              <img className=" w-7 mt-6 mr-2 lg:w-14 lg:mr-4 animate-bounce" src={Gototop} alt="" />
            </Link>
          </span> */}
        </div>
      </div>
    </>
  )
}
