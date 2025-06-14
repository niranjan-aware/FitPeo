import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardMainContent from "./components/DashboardMainContent";

export default function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="main flex flex-row   bg-gray-50 ">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
  
  {sidebarOpen && (
    <div
      onClick={() => setSidebarOpen(false)}
      className="fixed inset-0 bg-black/70 z-30 md:hidden"
    />
  )}
      
      <div className=" flex-1 flex flex-col overflow-hidden">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}
