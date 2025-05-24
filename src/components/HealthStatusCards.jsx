
import React from 'react'

const healthData = [
  { id: 'lungs', label: 'Lungs', date: '26 Oct 2021', status: 'warning', color: '#ff6b6b', logo :'🫁' },
  { id: 'teeth', label: 'Teeth', date: '26 Oct 2021', status: 'good', color: '#51cf66' , logo :'🦷'},
  { id: 'bone', label: 'Bone', date: '26 Oct 2021', status: 'warning', color: '#ff9f43' , logo :'🦴'}
];

const card = (item) => {
  return(
    <div className="card-contianer  bg-[#f6faff] flex flex-col justify-center">
      <div className="title flex flex-row justify-center">
        <h1 className='text-2xl font-bold text-[#3634a6]'>item.label</h1>
        <img src="" alt={item.label} />
      </div>
      <h3 className="date">{item.date}</h3>
    </div>
  );
}

export default function HealthStatusCards() {
  return (
    <div className="main space-y-4">
      {healthData.map((item) => {
        return (
          <div key={item.id} className="bg-[#f6faff] rounded-xl p-4 shadow-md w-48 h-40 transform transition-transform duration-300 hover:scale-105">
          <div className="flex items-center space-x-3 mb-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center`} 
                 style={{backgroundColor: `${item.color}20`}}>
              {item.id === 'lungs' && <span style={{color: item.color}}>{item.logo}</span>}
              {item.id === 'teeth' && <span style={{color: item.color}}>{item.logo}</span>}
              {item.id === 'bone' && <span style={{color: item.color}}>{item.logo}</span>}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{item.label}</h3>
              <p className="text-sm text-gray-500">Date: {item.date}</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="h-2 rounded-full" 
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
