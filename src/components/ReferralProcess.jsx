import { useState } from "react";
import { FaUserPlus, FaClipboardList, FaWallet } from "react-icons/fa";
import ReferralModal from "./ReferralModal";

const steps = [
  {
    icon: <FaUserPlus className="h-6 w-6 text-white" />,
    text: "Submit referrals easily via our website’s referral section.",
  },
  {
    icon: <FaClipboardList className="h-6 w-6 text-white" />,
    text: "Earn rewards once your referral joins an Accredian program.",
  },
  {
    icon: <FaWallet className="h-6 w-6 text-white" />,
    text: "Referrer receives a bonus 30 days after program enrollment.",
  },
];

export default function ReferralProcess() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-blue-50 py-16 px-4 rounded-lg">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-2xl font-bold mb-16">
          How Do I <span className="text-blue-500">Refer</span>?
        </h2>

        <div className="relative">
          {/* Process Steps */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-full shadow-lg p-8 w-64 h-64 flex flex-col items-center justify-center text-center"
              >
                <div className="bg-blue-500 p-3 rounded-full mb-4">
                  {step.icon}
                </div>
                <p className="text-gray-800 font-medium">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition duration-300"
          >
            Refer Now
          </button>
        </div>
      </div>
      {isModalOpen && <ReferralModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
