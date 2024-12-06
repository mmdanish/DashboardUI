import React from "react";
import CardIcon1 from "../assets/cardIcon1.svg";
import CardIcon2 from "../assets/cardIcon2.svg";
import CardIcon3 from "../assets/cardIcon3.svg";
import CardIcon4 from "../assets/cardIcon4.svg";

const DashboardCards = () => {
  const cards = [
    {
      icon: <img src={CardIcon1} alt="icon1" classname="w-6 h-6" />,
      title: "Total No. of NCRs",
      count: 1500,
      growth: "8%+ from Weekly",
      growthColor: "text-[#1BC42D]",
    },
    {
      icon: <img src={CardIcon2} alt="icon2" classname="w-6 h-6" />,
      title: "Total No. of Complaints",
      count: 300,
      growth: "5% from yesterday",
      growthColor: "text-[#1BC42D]",
    },
    {
      icon: <img src={CardIcon3} alt="icon3" classname="w-6 h-6" />,
      title: "Total Meetings",
      count: 14,
      growth: "0.5% from yesterday",
      growthColor: "text-[#1BC42D]",
    },
    {
      icon: <img src={CardIcon4} alt="icon4" classname="w-6 h-6" />,
      title: "Documentation",
      count: 512,
      growth: "0.5% from yesterday",
      growthColor: "text-[#1BC42D]",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between w-[264.5px] h-[142px] cursor-pointer"
        >
          {/* Top Section: Icon and Count */}
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full">
              {card.icon}
            </div>
            <p className="text-black text-2xl font-bold">{card.count}</p>
          </div>

          {/* Middle Section: Title */}
          <div className="mt-4">
            <p className="text-black gray-500 text-sm font-bold">{card.title}</p>
          </div>

          {/* Bottom Section: Growth Info */}
          <p className={`text-xs font-medium mt-2 ${card.growthColor}`}>
            {card.growth}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
