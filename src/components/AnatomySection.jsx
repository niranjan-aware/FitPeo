import React from 'react'
import { FaHeart } from "react-icons/fa";
import { GiLeg } from "react-icons/gi";
import human from '../assets/View=Anterior, Dissection=Outer Muscles, Color=Yes.svg'

export default function AnatomySection() {
  return (
    <div className="main-human-container bg-white rounded-xl p-6 shadow-sm ">
      <div className="main-svg relative flex items-center justify-center ">
        <img src={human} alt="human muscular body" className="human w-96  h-[400px]" />
        <div className="health-indicator-heart flex flex-row absolute top-16 -right-5 rounded-lg text-white bg-[#3634a6] text-sm items-center px-3 py-2 space-x-1">
          <FaHeart className='w-5 h-5 text-red-600'/>
          <span>Healthy heart</span>
        </div>
        <div className="health-indicator-leg flex flex-row absolute bottom-16 left-1 rounded-lg text-white bg-[#04e1f1] text-sm items-center px-3 py-2 space-x-1 hover:animate-bounce  hover:duration-1000 shadow-2xl ">
          <GiLeg className='w-5 h-5 text-orange-400'/>
          <span>Healthy leg</span>
        </div>
      </div>
    </div>
  )
}
