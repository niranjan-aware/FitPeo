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
      {time:"10:00",isScheduled:false,appt_details:{}},]},
    {id: "wed", day: "Wed", date: "27", apointments : [
      {time:"8:00",isScheduled:false,appt_details:{}},
      {time:"9.00",isScheduled:true,appt_details:{title:"Dentist", start_time:"09:00", end_time:"11:00", desc:"Dr. Cameron Williamson"}},
      {time:"10:00",isScheduled:false,appt_details:{}},
    ]},
    {id: "thurs", day: "Thurs", date: "28", apointments : [
      {time:"8:00",isScheduled:false,appt_details:{}},
      {time:"9.00",isScheduled:true,appt_details:{title:"Dentist", start_time:"09:00", end_time:"11:00", desc:"Dr. Cameron Williamson"}},
      {time:"10:00",isScheduled:false,appt_details:{}},
    ]},
    {id: "fri", day: "Fri", date: "29", apointments : [
      {time:"8:00",isScheduled:false,appt_details:{}},
      {time:"9.00",isScheduled:true,appt_details:{title:"Dentist", start_time:"09:00", end_time:"11:00", desc:"Dr. Cameron Williamson"}},
      {time:"10:00",isScheduled:false,appt_details:{}},
    ]},
    {id: "sat", day: "Sat", date: "30", apointments : [
      {time:"8:00",isScheduled:false,appt_details:{}},
      {time:"9.00",isScheduled:true,appt_details:{title:"Dentist", start_time:"09:00", end_time:"11:00", desc:"Dr. Cameron Williamson"}},
      {time:"10:00",isScheduled:false,appt_details:{}},
    ]},
    {id: "sun", day: "Sun", date: "31", apointments : [
      {time:"8:00",isScheduled:false,appt_details:{}},
      {time:"9.00",isScheduled:true,appt_details:{title:"Dentist", start_time:"09:00", end_time:"11:00", desc:"Dr. Cameron Williamson"}},
      {time:"10:00",isScheduled:false,appt_details:{}},
    ]}
  ]
};

export default function CalendarView() {
  return (
    <div className="container text-[#3634a6] ml-5 shadow-md rounded-2xl p-5 bg-[#f6faff] flex flex-col">
    <div className="month-title font-bold pb-6">{calendarData.month}</div>
    <div className='calender flex flex-row gap-x-5 '>
      
      {calendarData.days.map((item)=>{
        return(
          <div key={item.id} className={`day flex flex-col gap-y-3 ${item.day === "Tues" ? 'bg-[#ecf4ff]' : 'bg-[#f6faff]'}  rounded-xl`}>
            <h3 className="day font-semibold ">{item.day}</h3>
            <h1 className='date ml-3'>{item.date}</h1>
            {item.apointments.map((apt)=>{
              return (
                <div className={`time p-2 items-center rounded-lg ${apt.isScheduled ? 'bg-[#3634a6] text-white' : item.day === "Tues" ? 'bg-[#ecf4ff]' : 'bg-[#f6faff]'}` }>
                  <h3 key={apt.time} className="timings">{apt.time}</h3>
                </div>
              )
            })}
            
          </div>
        );
      })}
    </div>
    <div className="todays-schedule pt-5">
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
    <div className="upcoming-schedule ">
      <h1 className='text-2xl font-semibold text-[#3634a6] pt-3 pb-5'>Upcoming schedule </h1>
      <div className="day-title text-xl font-semibold text-gray-400">
        <h1 className=''>On Thursday</h1>
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
      <div className="day-title text-xl font-semibold text-gray-400">
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
