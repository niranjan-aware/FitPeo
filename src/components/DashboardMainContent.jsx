import React from 'react'
import AnatomySection from './AnatomySection'
import HealthStatusCards from './HealthStatusCards'
import ActivityFeed from './ActivityFeed'
import CalendarView from './CalendarView'
import UpcomingSchedule from './UpcomingSchedule'

export default function DashboardMainContent() {
  return (
    <main className="main-dashboard flex-1 p-6 bg-gray-50">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#3634a6]">Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-12 gap-6">
        <div className=" left-section col-span-4 space-y-6">
          <AnatomySection />
          <HealthStatusCards />
          <ActivityFeed />
        </div>
        <div className="right-section col-span-8 space-y-6">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  )
}
