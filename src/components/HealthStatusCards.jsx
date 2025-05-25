
import React from 'react'

const healthData = [
  { id: 'lungs', label: 'Lungs', date: '26 Oct 2021', status: 'warning', color: '#ff6b6b', logo :'🫁' },
  { id: 'teeth', label: 'Teeth', date: '26 Oct 2021', status: 'good', color: '#51cf66' , logo :'🦷'},
  { id: 'bone', label: 'Bone', date: '26 Oct 2021', status: 'warning', color: '#ff9f43' , logo :'🦴'}
];


export default function HealthStatusCards() {
  return (
    <div className="main space-y-4 sm:gap-y-2">
      {healthData.map((item) => {
        return (
          <div key={item.id} className="bg-[#f6faff] rounded-xl xl:p-4 lg:p-3 xs:p-4 md:p-1 sm:p-4 shadow-md xs:shadow-sm xl:w-48 xl:h-40 lg:w-40 lg:h-32 md:w-32 md:h-24 sm:h-28 sm:w-36 transform transition-transform duration-300 hover:scale-105">
          <div className="flex items-center lg:space-x-3 md:space-x-2 sm:space-x-3 xs:space-x-3 lg:mb-3 md:mb-2">
            <div className={`lg:w-8 lg:h-8 md:w-5 md:h-5 rounded-lg flex items-center justify-center`} 
                 style={{backgroundColor: `${item.color}20`}}>
              <span style={{color: item.color}}>{item.logo}</span>
            </div>
            <div>
              <h3 className="lg:font-semibold md:font-medium sm:font-bold xs:font-bold text-gray-800">{item.label}</h3>
              <p className="lg:text-sm md:text-xs text-gray-400">Date: {item.date}</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full lg:h-2 md:h-1">
            <div 
              className="lg:h-2 md:h-1 rounded-full" 
              style={{
                backgroundColor: item.color,
                width: item.status === 'good' ? '85%' : '60%'
              }}
            ></div>
          </div>
        </div>
        );
      })}
    </div>
  )
}
