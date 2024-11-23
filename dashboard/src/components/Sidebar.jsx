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
import Meeting from "../assets/meeting.svg";
import Risk from "../assets/risk.svg";
import Reports from "../assets/reports.svg";
import Compliance from "../assets/compliance.svg";
import Backup from "../assets/backup.svg";
import Docs from "../assets/doc.svg";
import Graph from "../assets/graph.svg";

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
      name: "Documentation",
      icon: (
        <img
          src={File}
          alt="Documentation Icon"
          className="w-[20px] h-[20px]"
        />
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
        <img
          src={Userlist}
          alt="User List Icon"
          className="w-[20px] h-[20px]"
        />
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
      icon: (
        <img src={Target} alt="Target Icon" className="w-[20px] h-[20px]" />
      ),
    },
    {
      name: "Solar Management",
      icon: <img src={Solar} alt="Solar Icon" className="w-[20px] h-[20px]" />,
    },
  ];

  const reportItems = [
    {
      name: "Meetings",
      icon: (
        <img src={Meeting} alt="Meeting Icon" className="w-[20px] h-[20px]" />
      ),
    },
    {
      name: "Risks",
      icon: <img src={Risk} alt="Risks Icon" className="w-[20px] h-[20px]" />,
    },
    {
      name: "Reports & Analysis",
      icon: (
        <img src={Reports} alt="Reports Icon" className="w-[20px] h-[20px]" />
      ),
    },
    {
      name: "Compliance",
      icon: (
        <img
          src={Compliance}
          alt="Compliance Icon"
          className="w-[20px] h-[20px]"
        />
      ),
    },
    {
      name: "Backup",
      icon: (
        <img src={Backup} alt="Backup Icon" className="w-[20px] h-[20px]" />
      ),
    },
    {
      name: "Non Conformity Report",
      icon: <img src={Docs} alt="Docs Icon" className="w-[20px] h-[20px]" />,
    },
    {
      name: "Analysis Graph",
      icon: <img src={Graph} alt="Graph Icon" className="w-[20px] h-[20px]" />,
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile Hamburger Menu */}
      <button
        className="lg:hidden p-4 text-gray-700"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars className="text-xl" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 w-[272px] bg-[#F7F7F7] shadow-lg overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-20">
          <img src={Logo} alt="Logo" className="h-[40px] w-[151px]" />
        </div>

        {/* Menu Items */}
        <div className="p-4">
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
                <span className="font-light text-[16px]">{item.name}</span>
              </li>
            ))}
          </ul>

          <p className="text-xs text-gray-500 mt-6 mb-4">REPORTS</p>
          <ul>
            {reportItems.map((item) => (
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
                <span className="font-light text-[16px]">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
