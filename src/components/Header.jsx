import React from "react";
import { FaBell } from "react-icons/fa6";
import { Search, User, Plus } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="w-full flex items-center justify-between">
       <div className=" flex flex-row space-x-4">
         <h1 className="text-2xl font-bold text-[#04e1f1]">
          Health<span className="text-[#3634a6]">care.</span>
        </h1>
        <div className="w-[500px] md:w-[300px] xs:hidden md:block">
        <div className="relative w-full max-w-md mx-auto md:mx-0 shadow-lg rounded-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-1 bg-gray-100 border border-gray-100 shadow-inner rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-teal-200"
          />
        </div>
      </div>
       </div>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 bg-gray-100 border-b shadow-inner flex justify-center items-center rounded-lg text-[#3634a6] hover:text-white hover:bg-[#3634a6] transition-colors duration-500">
            <FaBell className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-[#04e1f1] hover:bg-gray-50 text-white hover:text-[#04e1f1] flex items-center justify-center rounded-lg shadow-lg transition-colors duration-500 hover:border hover:shadow-inner">
            <User className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-[#3634a6] hover:bg-gray-50 text-white hover:text-[#3634a6] flex items-center justify-center rounded-lg shadow-lg transition-colors duration-500 hover:border hover:shadow-inner">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="w-full md:w-auto md:hidden">
        <div className="relative w-full max-w-md mx-auto md:mx-0 shadow-lg rounded-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 bg-gray-100 border border-gray-100 shadow-inner rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-teal-200"
          />
        </div>
      </div>
    </header>
  );
}