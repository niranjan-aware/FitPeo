import React from "react";
import {
  Grid3X3,
  Clock,
  Calendar,
  Users,
  BarChart3,
  MessageCircle,
  HelpCircle,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen">
      <div className="p-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">
          General
        </h2>
        <nav className="space-y-2">
           <div
            className={"flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer  hover:bg-indigo-50 hover:text-indigo-600 text-gray-600 bg-gray-50"
            }
          >
            <Clock className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </div>
         
        </nav>
      </div>
    </aside>
  );
}
