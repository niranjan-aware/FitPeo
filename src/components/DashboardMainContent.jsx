import React from 'react'
import AnatomySection from './AnatomySection'
import HealthStatusCards from './HealthStatusCards'
import ActivityFeed from './ActivityFeed'
import CalendarView from './CalendarView'


export default function DashboardMainContent() {
  return (
    <main className="main-dashboard flex-1 p-6 bg-gray-50">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#3634a6]">Dashboard</h1>
      </div>
      
      <div className="flex flex-row">
        <div className=" left-section flex flex-col space-y-6">
          <div className="flex flex-row gap-4">
            <AnatomySection />
          <HealthStatusCards />
          </div>
          <ActivityFeed />
        </div>
        <div className="right-section flex flex-col space-y-6">
          <CalendarView />
          
        </div>
      </div>
    </main>
  )
}
