import React, { useState } from "react";
import {
  Grid3X3,
  Clock,
  Calendar,
  Users,
  BarChart3,
  ChartLine,
  MessageCircle,
  HelpCircle,
  Settings,
  PanelRightClose,
  PanelRightOpen,
} from "lucide-react";
const sideBarData = [
  { id: "dashboard", label: "Dashboard", icon: Grid3X3 },
  { id: "history", label: "History", icon: Clock },
  { id: "calendar", label: "Calendar", icon: Calendar },
  { id: "appointments", label: "Appointments", icon: Users },
  { id: "statistics", label: "Statistics", icon: BarChart3 },
  { id: "tests", label: "Tests", icon: ChartLine },
];

export default function Sidebar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  return (
    <aside className="w-64 bg-[#f6faff] border-r border-gray-100 shadow-lg rounded-r-2xl h-screen">
      <div className="sidebar-header flex items-center justify-between w-full px-6 pt-10 pb-5">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
          General
        </h2>
        <button onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
          {isSideBarOpen ? (
            <PanelRightOpen className="w-5 h-5 text-gray-400 hover:text-[#3634a6] hover:transition-all hover:duration-300 hover:shadow-2xl" />
          ) : (
            <PanelRightClose className=" h-5 w-5 text-gray-400" />
          )}
        </button>
      </div>
      <div className=" sidebar pr-6 pl-6 ">
        <nav className="space-y-2">
          {sideBarData.map((data) => {
            const Icon = data.icon;
            return (
              <div
                key={data.id}
                className={
                  "flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer  hover:bg-indigo-50 hover:text-[#3634a6] text-gray-400 bg-gray-50 transition-colors duration-300 "
                }
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{data.label}</span>
              </div>
            );
          })}
          <div className="contact-section space-y-2 pt-28">
            <div
              className={
                "flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer  hover:bg-indigo-50 hover:text-[#3634a6] text-gray-400 bg-gray-50 transition-colors duration-300 "
              }
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Chat</span>
            </div>
            <div
              className={
                "flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer  hover:bg-indigo-50 hover:text-[#3634a6] text-gray-400 bg-gray-50 transition-colors duration-300 "
              }
            >
              <HelpCircle className="w-5 h-5" />
              <span className="font-medium">Support</span>
            </div>
          </div>
          <div className="settings-footer-section pt-40">
            <div
              className={
                "flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer  hover:bg-indigo-50 hover:text-[#3634a6] text-gray-400 bg-gray-50 transition-colors duration-300 "
              }
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Setting</span>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
