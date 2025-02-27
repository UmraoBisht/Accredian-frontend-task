import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";

const ReferralModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    course: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.referrerName) newErrors.referrerName = "Required";
    if (!formData.referrerEmail || !/\S+@\S+\.\S+/.test(formData.referrerEmail))
      newErrors.referrerEmail = "Valid email required";
    if (!formData.refereeName) newErrors.refereeName = "Required";
    if (!formData.refereeEmail || !/\S+@\S+\.\S+/.test(formData.refereeEmail))
      newErrors.refereeEmail = "Valid email required";
    if (!formData.course) newErrors.course = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/referrals`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );
        if (response.ok) {
          alert("Referral submitted successfully!");
          onClose();
        } else {
          alert("Submission failed.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-xs p-4 overflow-y-auto">
      <motion.div
        className="bg-white p-8 rounded-lg w-full max-w-md shadow-xl relative my-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          {/* <X className="h-5 w-5" /> */}
          close
        </button>

        <div className="flex items-center justify-center mb-6">
          <FaUsers className="h-8 w-8 text-blue-500 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">Refer a Friend</h2>
        </div>

        <p className="text-gray-600 text-center mb-6">
          Share the gift of learning and earn rewards when your friend joins
          Accredian
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.referrerName}
              onChange={(e) =>
                setFormData({ ...formData, referrerName: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
            />
            {errors.referrerName && (
              <p className="text-red-500 text-sm mt-1">{errors.referrerName}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={formData.referrerEmail}
              onChange={(e) =>
                setFormData({ ...formData, referrerEmail: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
            />
            {errors.referrerEmail && (
              <p className="text-red-500 text-sm mt-1">
                {errors.referrerEmail}
              </p>
            )}
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-gray-700 font-medium mb-2">
              Friend's Information
            </h3>
            <input
              type="text"
              placeholder="Friend's Name"
              value={formData.refereeName}
              onChange={(e) =>
                setFormData({ ...formData, refereeName: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
            />
            {errors.refereeName && (
              <p className="text-red-500 text-sm mt-1">{errors.refereeName}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Friend's Email"
              value={formData.refereeEmail}
              onChange={(e) =>
                setFormData({ ...formData, refereeEmail: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
            />
            {errors.refereeEmail && (
              <p className="text-red-500 text-sm mt-1">{errors.refereeEmail}</p>
            )}
          </div>

          <div>
            <select
              value={formData.course}
              onChange={(e) =>
                setFormData({ ...formData, course: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition bg-white"
            >
              <option value="">Select a Course</option>
              <option value="web-development">Web Development</option>
              <option value="data-science">Data Science</option>
              <option value="machine-learning">Machine Learning</option>
              <option value="ui-ux-design">UI/UX Design</option>
            </select>
            {errors.course && (
              <p className="text-red-500 text-sm mt-1">{errors.course}</p>
            )}
          </div>

          <div className="flex justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition duration-300 flex items-center"
            >
              {/* <Send className="h-4 w-4 mr-2" /> */}
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ReferralModal;
