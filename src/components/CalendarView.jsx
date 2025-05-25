import React from 'react'
import UpcomingSchedule from './UpcomingSchedule'
import SimpleAppointmentCard from './SimpleAppointmentCard'

const calendarData = {
  month : "October 2021",
  days : [
    {id: "mon", day: "Mon", date: "25", apointments : [
      {time:"10:00",isScheduled:true,appt_details:{title:"Dentist", start_time:"09:00", end_time:"11:00", desc:"Dr. Cameron Williamson"}},
      {time:"11.00",isScheduled:false,appt_details:{}},
      {time:"12:00",isScheduled:false,appt_details:{}}, ]},
    {id: "Tues", day: "Tues", date: "26", apointments : [
      {time:"8:00",isScheduled:false,appt_details:{}},
      {time:"9.00",isScheduled:true,appt_details:{title:"Dentist", start_time:"09:00", end_time:"11:00", desc:"Dr. Cameron Williamson"}},
      {time:"11:00",isScheduled:true,appt_details:{title:"Physiotherapy Appointment", start_time:"11:00", end_time:"12:00", desc:"Dr. Kevin Djones"}},]},
    {id: "wed", day: "Wed", date: "27", apointments : [
      {time:"12:00",isScheduled:false,appt_details:{}},
      {time:"---",isScheduled:false,appt_details:{}},
      {time:"13:00",isScheduled:false,appt_details:{}},
    ]},
    {id: "thurs", day: "Thurs", date: "28", apointments : [
      {time:"10.00",isScheduled:true,appt_details:{title:"Health checkup complet", start_time:"10:00", end_time:"11:00", desc:"Dr. Niranja Aware"}},
      {time:"11:00",isScheduled:true,appt_details:{title:"Opathlmogist", start_time:"11:00", end_time:"13:00", desc:"Dr. Cameron Williamson"}},
      {time:"---",isScheduled:false,appt_details:{}},
    ]},
    {id: "fri", day: "Fri", date: "29", apointments : [
      {time:"---",isScheduled:false,appt_details:{}},
      {time:"14.00",isScheduled:true,appt_details:{title:"Health checkup complete", start_time:"14:00", end_time:"15:00", desc:"Dr. Niranja Aware"}},
      {time:"16:00",isScheduled:false,appt_details:{title:"Opathlmogist", start_time:"16:00", end_time:"18:00", desc:"Dr. Cameron Williamson"}},
    ]},
    {id: "sat", day: "Sat", date: "30", apointments : [
      {time:"12.00",isScheduled:true,appt_details:{title:"Cardiologist", start_time:"12:00", end_time:"14:00", desc:"Dr. Cameron Williamson"}},
      {time:"14:00",isScheduled:false,appt_details:{}},
      {time:"15:00",isScheduled:false,appt_details:{title:"Neurologist", start_time:"09:00", end_time:"11:00", desc:"Dr. Cameron Williamson"}},
    ]},
    {id: "sun", day: "Sun", date: "31", apointments : [
      {time:"9:00",isScheduled:true,appt_details:{title:"Dentist", start_time:"09:00", end_time:"11:00", desc:"Dr. Cameron Williamson"}},
      {time:"10.00",isScheduled:false,appt_details:{}},
      {time:"11:00",isScheduled:false,appt_details:{}},
    ]}
  ]
};

export default function CalendarView() {
  return (
    <div className="container  text-[#3634a6]  shadow-md rounded-2xl  xl:px-5 lg:px-2 md:px-2 sm:px-8 xs:px-3  bg-[#f6faff] flex items-center flex-col md:ml-3 sm:ml-0 xs:ml-0 ">
    <div className="month-title font-bold text-xl pb-4 ">{calendarData.month}</div>
    <div className='calender flex flex-row xl:gap-x-3 lg:gap-x-0  md:gap-x-1 sm:gap-x-8  xs:gap-x-2'>
      
      {calendarData.days.map((item)=>{
        return(
          <div key={item.id} className={`day lg:text-base md:text-xs xs:text-xs flex flex-col lg:gap-y-3 md:gap-y-2 sm:gap-y-3 xs:gap-y-3 ${item.day === "Tues" ? 'bg-[#ecf4ff]' : 'bg-[#f6faff]'}  rounded-xl lg:mr-3`}>
            <h3 className="day font-semibold xs:font-medium">{item.day}</h3>
            <h1 className='date ml-3'>{item.date}</h1>
            {item.apointments.map((apt)=>{
              return (
                <div className={`time lg:p-2 md:p-1 xs:p-0 items-center rounded-lg xs:rounded-sm ${apt.isScheduled ? 'bg-[#3634a6] text-white' : item.day === "Tues" ? 'bg-[#ecf4ff]' : 'bg-[#f6faff]'}` }>
                  <h3 key={apt.time} className="timings">{apt.time}</h3>
                </div>
              )
            })}
            
          </div>
        );
      })}
    </div>
    <div className="todays-schedule mt-10">
     <div className="card flex flex-row">
       {
        calendarData.days.find(day => day.day === "Tues")?.apointments.map((apt, index)=>{
          return(
             <div key={index} className="mb-2">
        {apt.isScheduled && (
          <SimpleAppointmentCard 
            title={apt.appt_details.title} 
            startTime={apt.appt_details.start_time} 
            endTime={apt.appt_details.end_time} 
            description={apt.appt_details.desc} 
          />
        )}
      </div>
          )
        })
      }
     </div>
    </div>
    <div className="upcoming-schedule ">
      <h1 className='lg:text-2xl sm:text-xl md:text-xl font-semibold text-[#3634a6] pt-3 lg:pb-3 sm:pb-1 md:pb-1 xs:pb-1'>Upcoming schedule </h1>
      <div className="day-title lg:text-xl md:text-base sm:text-base lg:pb-3 sm:pb-2 md:pb-1 xs:pb-3 font-semibold text-gray-400">
        <h1 className=' '>On Thursday</h1>
      </div>
      <div className="cards flex flex-row">
        {
        calendarData.days.find(day => day.day === "Thurs")?.apointments.map((apt, index)=>{
          return(
             <div key={index} className="mb-2">
        {apt.isScheduled && (
          <SimpleAppointmentCard 
            title={apt.appt_details.title} 
            startTime={apt.appt_details.start_time} 
            endTime={apt.appt_details.end_time} 
            description={apt.appt_details.desc} 
          />
        ) }
      </div>
          )
        })
      }
      </div>
      <div className="day-title lg:text-xl md:text-base sm:text-base lg:pb-3 md:pb-1 sm:pb-2 xs:pb-3 font-semibold text-gray-400">
        <h1 className=''>On Saturday</h1>
      </div>
     <div className="card flex flex-row">
       {
        calendarData.days.find(day => day.day === "Sat")?.apointments.map((apt, index)=>{
          return(
             <div key={index} className="mb-2">
        {apt.isScheduled && (
          <SimpleAppointmentCard 
            title={apt.appt_details.title} 
            startTime={apt.appt_details.start_time} 
            endTime={apt.appt_details.end_time} 
            description={apt.appt_details.desc} 
          />
        )}
      </div>
          )
        })
      }
     </div>
    </div>
    </div>
  )
}
