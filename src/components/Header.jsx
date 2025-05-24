import React from "react";
import { FaBell } from "react-icons/fa6";

import { Search, User, Plus } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between w-full px-6 py-4 ">
      <div className="flex items-center space-x-8">
        <h1 className="text-2xl font-bold text-[#04e1f1]">
          Health<span className="text-[#3634a6]">care.</span>{" "}
        </h1>
        <div className="relative shadow-lg rounded-lg">
          <Search className="input absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 bg-gray-100 border border-gray-100  shadow-inner rounded-lg w-80 focus:outline-none focus:ring-1 focus:ring-teal-200  "
          />
        </div>
        
      </div>
      <div className="btns flex items-center space-x-6">
          <button className="bell w-10 h-10 bg-gray-100 border-b shadow-inner flex justify-center items-center rounded-lg text-[#3634a6] hover:text-white hover:bg-[#3634a6] duration-1000 transition-colors ease-in-out border-[2px] border-gray-100 ">
            <FaBell className="input right-3 top-1/2 w-6 h-6 " />
          </button>
          <button className="profile w-10 h-10 bg-[#04e1f1] hover:bg-gray-50 text-white hover:text-[#04e1f1] flex items-center justify-center rounded-lg shadow-lg duration-1000 transition-colors ease-in-out hover:border-[1px] hover:shadow-inner hoverborder-gray-100">
            <User className=" w-6 h-6 " />
          </button>
          <button className="add w-10 h-10 bg-[#3634a6] hover:bg-gray-50 text-white hover:text-[#3634a6] flex items-center justify-center rounded-lg shadow-lg duration-1000 transition-colors ease-in-out hover:border-[1px] hover:shadow-inner hover:border-gray-100">
            <Plus className="w-6 h-6 " />
          </button>
        </div>
    </header>
  );
}
