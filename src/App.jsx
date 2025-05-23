import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import DashboardMainContent from './components/DashboardMainContent'

export default function App() {
  return (
    <div className="main  h-screen bg-gray-50">
      <Sidebar/>
      <Header/>
      <DashboardMainContent/>
    </div>
  )
}
