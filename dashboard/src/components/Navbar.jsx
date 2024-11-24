import React from "react";
import SearchIcon from "../assets/search.svg";
import NotificationIcon from "../assets/notification.svg";
import SettingsIcon from "../assets/settingsIcon.svg";
import Line from "../assets/line.svg";
import Profile from "../assets/profile.jpg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-solid ml-[272px]">
      {/* Left - Greetings */}
      <div className="flex items-center gap-2">
        <p className="text-[#677487] text-sm">
          Welcome Back, <br />
          <span className="text-xl font-bold text-black">AliMuhammad</span>
        </p>
        <span role="img" aria-label="wave">
          👋
        </span>
      </div>

      {/* Center + Right - Searchbar, Icons, and Profile */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-5 pr-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <img
            src={SearchIcon}
            alt="search"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          />
        </div>

        {/* Notification Button */}
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-solid hover:bg-gray-200 transition">
          <img src={NotificationIcon} alt="notification" className="w-5 h-5" />
        </button>

        {/* Settings Button */}
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-solid hover:bg-gray-200 transition">
          <img src={SettingsIcon} alt="settings" className="w-5 h-5" />
        </button>

        {/* Profile Section */}
        <div className="flex items-center gap-3 border-l border-gray-300 pl-4">
          {/* Profile Image */}
          <img
            src={Profile}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          {/* Greetings & User Info */}
          <div className="text-right">
            <p className="text-gray-700 text-sm font-medium">
              Hello, alimuhammadtn
            </p>
            <p className="text-[#677487] text-xs text-left">
              example@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
