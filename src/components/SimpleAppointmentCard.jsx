import React from 'react'

export default function SimpleAppointmentCard({title, startTime, endTime, description}) {
  return (
    <div className={`appointment-card md:rounded-2xl lg:rounded-3xl sm:rounded-xl md:p-2 sm:p-5 md:mr-2 lg:p-5 lg:mr-3 sm:mr-3 xs:mr-3 xs:rounded-xl xs:p-3 ${startTime === "09:00" ? 'bg-[#3634a6] text-white' : 'bg-[#dde2f9]'}`}>
      <div className="title flex flex-row">
        <h1 className="md:text-sm lg:text-lg font-semibold">{title}</h1>
        <span className="logo">{}</span>
      </div>
      <h3 className="timing lg:text-sm md:text-xs">{startTime} - {endTime}</h3>
      <h3 className="doctor-name text-sm">{description}</h3>
    </div>
  )
}
