import { useState } from "react";
import * as Switch from "@radix-ui/react-switch";
import { ChevronDown, ChevronRight } from "lucide-react";

const categories = [
  "All Programs",
  "Product Management",
  "Strategy & Leadership",
  "Business Management",
  "Fintech",
  "Senior Management",
  "Data Science",
  "Digital Transformation",
  "Business Analytics",
];

const programData = {
  "All Programs": [
    { name: "Professional Certificate Program in Product Management", category: "Product Management", referrerBonus: 7000, refereeBonus: 9000 },
    { name: "PG Certificate Program in Strategic Product Management", category: "Strategy & Leadership", referrerBonus: 9000, refereeBonus: 11000 },
    { name: "Executive Program in Data Driven Product Management", category: "Product Management", referrerBonus: 10000, refereeBonus: 10000 },
    { name: "Executive Program in Product Management and Digital Transformation ", category: "Digital Transformation", referrerBonus: 10000, refereeBonus: 10000 },
    { name: "Executive Program in Product Management", category: "Product Management", referrerBonus: 10000, refereeBonus: 10000 },
    { name: "Advanced Certification in Product Management", category: "Product Management", referrerBonus: 10000, refereeBonus: 10000 },
    { name: "Executive Program in Product Management and Project Management", category: "Business Management", referrerBonus: 10000, refereeBonus: 10000 },
  ],
};

categories.slice(1).forEach((category) => {
  programData[category] = programData["All Programs"].filter((program) => program.category === category);
});

export default function ReferralBenefits() {
  const [enrolled, setEnrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Programs");
  const programs = programData[selectedCategory] || [];

  return (
    <div className="flex justify-center p-6">
      <div className="flex w-full max-w-7xl">
        {/* Sidebar */}
        <div className="w-[270px] mt-[96px]">
          <div className="bg-white shadow-lg p-4 rounded-[14px] box-border" style={{ boxShadow: "0px 1px 24.4px 1px #00000029" }}>
            <ul>
              {categories.map((category, index) => (
                <li
                  key={category}
                  className={`p-3 flex justify-between cursor-pointer border-b text-gray-800 font-medium ${selectedCategory === category ? "bg-blue-500 text-white font-bold" : ""} ${index === 0 ? "rounded-t-[14px]" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category} <ChevronRight size={16} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4 ml-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            What Are The <span className="text-blue-500">Referral Benefits?</span>
          </h2>

          {/* Enrolled Toggle */}
          <div className="flex justify-end items-center mb-4">
            <span className="mr-2">Enrolled</span>
            <Switch.Root
              className="w-10 h-5 bg-gray-300 rounded-full relative transition-all"
              checked={enrolled}
              onCheckedChange={setEnrolled}
            >
              <Switch.Thumb className="block w-4 h-4 bg-white rounded-full shadow transition-transform transform translate-x-1 data-[state=checked]:translate-x-5" />
            </Switch.Root>
          </div>

          {/* Programs Table */}
          <div className="w-[921px] h-[470px] bg-[#EBF3FF59] shadow-lg rounded-[14px] overflow-hidden pb-3 flex flex-col" style={{ boxShadow: "0px 1px 24.4px 1px #00000029" }}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-0 bg-[#1A73E859]">
                  <th className="p-3">Programs</th>
                  <th className="p-3 relative">
                    <div className="absolute top-0 bottom-0 right-45 w-[2px] bg-[#00000038] transform -translate-x-1/2"></div>
                    Referrer Bonus
                    <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-[#00000038] transform -translate-x-1/2"></div>
                  </th>
                  <th className="p-3">Referee Bonus</th>
                </tr>
              </thead>
              <tbody className="h-[400px] overflow-auto">
                {programs.length > 0 ? (
                  programs.map((program, index) => (
                    <tr key={index} className="border-0">
  <td className="p-3 pl-6  pl-0 ">
    <span className="inline-block">
      <img src="assets/hat.png" alt="Hat" className="w-6 h-6 inline" />
    </span>
    <span className="inline-block ml-1">{program.name}</span>
  </td>
  <td className="p-3 relative">
    <div className="absolute top-0 bottom-0 right-45 w-[2px] bg-[#00000038] transform -translate-x-1/2"></div>
    ₹ {program.referrerBonus.toLocaleString()}
    <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-[#00000038] transform -translate-x-1/2"></div>
  </td>
  <td className="p-3">₹ {program.refereeBonus.toLocaleString()}</td>
</tr>

                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center text-gray-500 p-6">No programs available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-8 -ml-10 w-full">
            <button className="text-gray-600 flex items-center ml-auto rounded-lg shadow p-2">
              Show More <ChevronDown className="ml-1" size={16} />
            </button>
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
              Refer Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
