import React from 'react'
import { FaHeart } from "react-icons/fa";
import { GiLeg } from "react-icons/gi";
import human from '../assets/View=Anterior, Dissection=Outer Muscles, Color=Yes.svg'

export default function AnatomySection() {
  return (
    <div className="main-human-container bg-[#f6faff] rounded-xl lg:p-6 md:p-3  shadow-md xs:shadow-sm  transform transition-transform duration-300 hover:scale-95">
      <div className="main-svg relative flex items-center justify-center w-full">
        <img src={human} alt="human muscular body" className="human max-w-full h-auto object-contain lg:w-80 md:w-64 lg:h-[400px] md:h-[300px] sm:w-80 sm:h-64 xs:w-64 xs:h-64" />
        <div className="health-indicator-heart flex flex-row absolute md:top-16  md:-right-2 sm:right-4 sm:top-12 xs:top-10 xs:right-10 xs:rounded-md xl:rounded-lg  text-white bg-[#3634a6] lg:text-sm md:text-xs xs:text-xs items-center lg:px-3 lg:py-2 md:px-1 md:py-1 space-x-1 hover:animate-bounce hover:duration-1000 shadow-2xl ">
          <FaHeart className='lg:w-5 lg:h-5 md:w-3 md:h-3 xs:w-5 xs:h-5 text-red-600'/>
          <span className=''>Healthy heart</span>
        </div>
        <div className="health-indicator-leg flex flex-row absolute bottom-16 xl:left-5 xs:left-16 lg:left-4 md:left-8 sm:left-10 xs:rounded-md xl:rounded-lg text-white bg-[#04e1f1] lg:text-sm md:text-xs xs:text-xs  items-center lg:px-3 lg:py-2 md:px-1 sm:px-1 sm:py-1 md:py-1 space-x-1 hover:animate-bounce hover:duration-1000 shadow-2xl ">
          <GiLeg className='lg:w-5 lg:h-5 md:w-3 md:h-3  text-orange-400'/>
          <span>Healthy leg</span>
        </div>
      </div>
    </div>
  )
}
