import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/logo.svg";
import MenuCircle from "../assets/menucircle.svg";
import File from "../assets/file.svg";
import User from "../assets/user.svg";
import Customer from "../assets/customer.svg";
import Delivery from "../assets/truck-delivery.svg";
import Userlist from "../assets/user-list.svg";
import Eco from "../assets/eco.svg";
import Alert from "../assets/alert.svg";
import Target from "../assets/target.svg";
import Solar from "../assets/solar.svg";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    {
      name: "Dashboard",
      icon: (
        <img
          src={MenuCircle}
          alt="Dashboard Icon"
          className="w-[20px] h-[20px]"
        />
      ),
    },
    {
      name: "Documentaion",
      icon: (
        <img src={File} alt="Dashboard Icon" className="w-[20px] h-[20px]" />
      ),
    },
    {
      name: "Employee Training",
      icon: <img src={User} alt="User Icon" className="w-[20px] h-[20px]" />,
    },
    {
      name: "Customer Management",
      icon: (
        <img src={Customer} alt="Customer Icon" className="w-[20px] h-[20px]" />
      ),
    },
    {
      name: "Supplier Management",
      icon: (
        <img src={Delivery} alt="Delivery Icon" className="w-[20px] h-[20px]" />
      ),
    },
    {
      name: "User Management",
      icon: (
        <img src={Userlist} alt="Userlist Icon" className="w-[20px] h-[20px]" />
      ),
    },
    {
      name: "Energy Management",
      icon: <img src={Eco} alt="Eco Icon" className="w-[20px] h-[20px]" />,
    },
    {
      name: "Correction",
      icon: <img src={Alert} alt="Alert Icon" className="w-[20px] h-[20px]" />,
    },
    {
      name: "Objectives & Targets",
      icon: <img src={Target} alt="Target Icon" className="w-[20px] h-[20px]" />,
    },
    {
      name: "Solar Management",
      icon: <img src={Solar} alt="Solar Icon" className="w-[20px] h-[20px]" />,
    },
  ];
  return (
    <div className="font-switzer flex">
      {/* Hamburger Menu for Mobile */}
      <button
        className="lg:hidden p-4 text-gray-700"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars className="text-xl" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen w-[272px] bg-[#F7F7F7] shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-20">
          <img
            src={Logo}
            alt="Logo"
            className="h-[40px] w-[151px] top-[35px] left-[61px]"
          />
        </div>

        {/* Menu Section */}
        <div className="lg:flex hidden">
          <nav className="flex-grow p-4 w-full sm:w-[200px] lg:w-[212px]">
            <p className="text-xs text-gray-500 mb-4">MENU</p>
            <ul>
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeMenu === item.name 
                      ? "bg-[#1E4DA1] text-white"
                      : "hover:bg-blue-100 text-[#677487]"
                  }`}
                  onClick={() => setActiveMenu(item.name)}
                >
                  {item.icon}
                  <span className="font-[400] text-[16px]">{item.name}</span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
