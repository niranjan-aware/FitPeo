import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardMainContent from "./components/DashboardMainContent";

export default function App() {
  return (
    <div className="main flex flex-row  h-screen bg-gray-50 ">
      <Sidebar />
      <div className=" flex-1 flex flex-col overflow-hidden">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}
