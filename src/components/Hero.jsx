import React, { useState } from "react";
import happy_people from "../assets/happy-people.png";
import ReferralModal from "./ReferralModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative">
      {/* Top Navigation */}
      <div className="absolute top-0 left-0 right-0 z-1">
        <div className="flex justify-center mt-4">
          <div className="bg-blue-100 rounded-full px-8 py-2 flex space-x-8">
            <div className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
              Refer
            </div>
            <div className="text-gray-600">Benefits</div>
            <div className="text-gray-600">FAQs</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
      {/* Main Card */}
      <div className="relative w-full max-w-5xl bg-blue-50 rounded-3xl overflow-hidden shadow-lg">
        {/* Money Decoration - Top Left */}
        <div className="absolute top-20 left-10">
          <div className="w-16 h-12 bg-green-300 rounded-lg rotate-12 opacity-80"></div>
        </div>

        {/* Money Decoration - Top Right */}
        <div className="absolute top-20 right-10">
          <div className="w-16 h-12 bg-green-300 rounded-lg -rotate-12 opacity-80"></div>
        </div>

        {/* Money Decoration - Bottom Left */}
        <div className="absolute bottom-40 left-20">
          <div className="w-16 h-12 bg-green-300 rounded-lg rotate-45 opacity-60"></div>
        </div>

        {/* Money Decoration - Bottom Right */}
        <div className="absolute bottom-40 right-20">
          <div className="w-16 h-12 bg-green-300 rounded-lg -rotate-45 opacity-60"></div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center pt-24 pb-12 px-8 md:px-16">
          {/* Left Side Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            {/* Main Heading */}
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Let's Learn <br /> & Earn
            </h1>

            {/* Offer Text */}
            <p className="text-xl text-gray-700 mb-2">
              Get a chance to win <br />
              up-to{" "}
              <span className="text-blue-500 text-3xl font-bold">
                Rs. 15,000
              </span>
            </p>

            {/* CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg mt-6"
            >
              Refer Now
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            {/* People Image */}
            <img src={happy_people} alt="Happy_people" className="object-fit" />
          </div>
        </div>
      </div>
      {isModalOpen && <ReferralModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default HeroSection;
