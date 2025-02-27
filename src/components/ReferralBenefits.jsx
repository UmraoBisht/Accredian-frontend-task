import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight, FaGraduationCap } from 'react-icons/fa';

const ReferralBenefits = () => {
  const [activeCategory, setActiveCategory] = useState("ALL PROGRAMS");
  const [showMore, setShowMore] = useState(false);

  const menuCategories = [
    "ALL PROGRAMS",
    "PRODUCT MANAGEMENT",
    "STRATEGY & LEADERSHIP",
    "BUSINESS MANAGEMENT",
    "FINTECH",
    "SENIOR MANAGEMENT",
    "DATA SCIENCE",
    "DIGITAL TRANSFORMATION",
    "BUSINESS ANALYTICS"
  ];

  const programs = [
    {
      title: "Professional Certificate Program in Product Management",
      category: "PRODUCT MANAGEMENT",
      referrerBonus: "₹ 7,000",
      refereeBonus: "₹ 9,000"
    },
    {
      title: "PG Certificate Program in Strategic Product Management",
      category: "PRODUCT MANAGEMENT",
      referrerBonus: "₹ 9,000",
      refereeBonus: "₹ 11,000"
    },
    {
      title: "Executive Program in Data Driven Product Management",
      category: "DATA SCIENCE",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000"
    },
    {
      title: "Executive Program in Product Management and Digital Transformation",
      category: "DIGITAL TRANSFORMATION",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000"
    },
    {
      title: "Executive Program in Product Management",
      category: "PRODUCT MANAGEMENT",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000"
    },
    {
      title: "Advanced Certification in Product Management",
      category: "PRODUCT MANAGEMENT",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000"
    },
    {
      title: "Executive Program in Product Management and Project Management",
      category: "PRODUCT MANAGEMENT",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000"
    }
  ];

  // Filter programs based on active category
  const filteredPrograms = activeCategory === "ALL PROGRAMS" 
    ? programs 
    : programs.filter(program => program.category === activeCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 relative">
      {/* User Avatar */}
      <div className="absolute top-0 right-0 mt-2 mr-2 flex items-center gap-4">
        <span className="text-sm text-gray-600">Enrolled</span>
      </div>

      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-xl font-medium">
          What Are The <span className="text-blue-500">Referral Benefits?</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Sidebar */}
        <div className="md:w-72 bg-white rounded-lg shadow-md overflow-hidden">
          {menuCategories.map((category, index) => (
            <div 
              key={index} 
              className={`flex justify-between items-center px-4 py-3 cursor-pointer border-b border-gray-100 hover:bg-gray-50 ${activeCategory === category ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-gray-700'}`}
              onClick={() => setActiveCategory(category)}
            >
              <span className="text-sm font-medium">{category}</span>
              <FaChevronRight size={16} />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-blue-100 text-sm font-medium">
            <div className="p-4 text-blue-900">Programs</div>
            <div className="p-4 text-blue-900 text-center">Referrer Bonus</div>
            <div className="p-4 text-blue-900 text-center">Referee Bonus</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {filteredPrograms.map((program, index) => (
              <div key={index} className="grid grid-cols-3 hover:bg-gray-50">
                <div className="p-4 flex items-start gap-2">
                  <FaGraduationCap className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm text-gray-700">{program.title}</span>
                </div>
                <div className="p-4 text-center text-sm text-gray-700">{program.referrerBonus}</div>
                <div className="p-4 text-center text-sm text-gray-700">{program.refereeBonus}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Show More Button */}
      <div className="mt-4 flex justify-center">
        <button 
          onClick={() => setShowMore(!showMore)}
          className="flex items-center gap-1 text-gray-500 border border-gray-300 rounded-md px-4 py-2 text-sm"
        >
          Show More
          <FaChevronDown size={16} />
        </button>
      </div>

      {/* Refer Now Button */}
      <div className="mt-6 flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
          Refer Now
        </button>
      </div>
    </div>
  );
};

export default ReferralBenefits;