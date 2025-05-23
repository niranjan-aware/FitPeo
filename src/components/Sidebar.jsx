import React from "react";
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
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen">
      <div className=" sidebar p-6 ">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">
          General
        </h2>
        <nav className="space-y-2">
          {sideBarData.map((data) => {
            const Icon = data.icon;
            return (
              <div
                key={data.id}
                className={
                  "flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer  hover:bg-indigo-50 hover:text-indigo-600 text-gray-400 bg-gray-50"
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
                "flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer  hover:bg-indigo-50 hover:text-indigo-600 text-gray-400 bg-gray-50"
              }
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Chat</span>
            </div>
            <div
              className={
                "flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer  hover:bg-indigo-50 hover:text-indigo-600 text-gray-400 bg-gray-50"
              }
            >
              <HelpCircle className="w-5 h-5" />
              <span className="font-medium">Support</span>
            </div>
          </div>
          <div className="settings-footer-section pt-40">
            <div
              className={
                "flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer  hover:bg-indigo-50 hover:text-indigo-600 text-gray-400 bg-gray-50"
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
