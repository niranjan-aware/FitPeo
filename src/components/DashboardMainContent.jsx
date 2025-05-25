import React from 'react'
import AnatomySection from './AnatomySection'
import HealthStatusCards from './HealthStatusCards'
import ActivityFeed from './ActivityFeed'
import CalendarView from './CalendarView'


export default function DashboardMainContent() {
  return (
    <main className="main-dashboard flex-1 mx-3 bg-gray-50">
      <div className="p-5">
        <h1 className="text-3xl font-bold text-[#3634a6]">Dashboard</h1>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-evenly sm:space-y-7">
        <div className=" left-section flex flex-col space-y-6 ">
          <div className="flex xs:flex-col sm:flex-row lg:gap-x-2 xl:gap-4 sm:gap-x-14  md:gap-4 xs:gap-y-5 gap-y-0">
            <AnatomySection />
          <HealthStatusCards />
          </div>
          <ActivityFeed />
        </div>
        <div className="right-section xs:mt-5 mt-0 xs:p-10">
          <CalendarView />
          
        </div>
      </div>
    </main>
  )
}
