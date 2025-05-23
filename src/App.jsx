import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardMainContent from "./components/DashboardMainContent";

export default function App() {
  return (
    <div className="main flex flex-row  h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}
