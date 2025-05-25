import React from "react";


export default function ActivityFeed() {
  const weeklyStats = [
    { label: "Mon", count: 30 },
    { label: "Tues", count: 80 },
    { label: "Wed", count: 45 },
    { label: "Thurs", count: 60 },
    { label: "Fri", count: 90 },
    { label: "Sat", count: 70 },
    { label: "Sun", count: 40 },
  ];

  const highestValue = Math.max(...weeklyStats.map((entry) => entry.count));

  return (
    <div className=" bar-graph-container lg:p-4 md:p-3 sm:p-3 xs:p-4 bg-[#f6faff] shadow-lg rounded-lg">
      <div className="flex justify-between items-center lg:mb-6 md:mb-2">
        <div>
          <h3 className="title text-lg font-semibold text-gray-900">Weekly Activity</h3>
          <p className="description text-sm text-gray-500">Summary of appointments by day</p>
        </div>
        <span className="text-xs font-medium px-3 py-1 bg-[#dde2f9] text-[#3634a6] rounded-md">3 active days</span>
      </div>
      <div className=" bar flex gap-3 items-end h-40">
        {weeklyStats.map((dayItem, idx) => {
          const scaledHeight = (dayItem.count / highestValue) * 100;
          return (
            <div key={idx} className="flex flex-col items-center flex-1">
              <div className="w-full bg-[#04e1f1] rounded-t-md transform transition-transform duration-300 hover:scale-105" style={{ height: `${scaledHeight}px` }}></div>
              <span className="text-xs text-gray-600 mt-2">{dayItem.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
