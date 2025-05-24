import React from 'react'

export default function SimpleAppointmentCard({title, startTime, endTime, description}) {
  return (
    <div className='appointment-card bg-[#dde2f9] rounded-3xl p-5 mr-3'>
      <div className="title flex flex-row">
        <h1 className=" font-semibold">{title}</h1>
        <span className="logo">{}</span>
      </div>
      <h3 className="timing text-sm">{startTime} - {endTime}</h3>
      <h3 className="doctor-name text-sm">{description}</h3>
    </div>
  )
}
