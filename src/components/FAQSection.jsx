import { useState } from "react";
import { FaHeadset } from "react-icons/fa";

const faqs = [
  {
    question: "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
    answer: "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
  },
  {
    question: "What is the minimum system configuration required?",
    answer: "",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="p-8">
      <h2 className="text-center text-2xl font-bold mb-6">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-2">
          <button className="bg-white shadow-md py-2 px-4 rounded-md font-semibold text-blue-600">
            Eligibility
          </button>
          <button className="bg-white shadow-md py-2 px-4 rounded-md border">
            How To Use?
          </button>
          <button className="bg-white shadow-md py-2 px-4 rounded-md border">
            Terms & Conditions
          </button>
        </div>
        <div className="flex-1">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <button
                className="text-blue-600 font-semibold w-full text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
              </button>
              {openIndex === index && <p className="text-gray-700 mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-blue-600 text-white p-6 mt-8 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FaHeadset className="text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Want to delve deeper into the program?</h3>
            <p className="text-sm">Share your details to receive expert insights from our program team!</p>
          </div>
        </div>
        <button className="bg-white text-blue-600 py-2 px-4 rounded-md font-semibold">
          Get in touch →
        </button>
      </div>
    </div>
  );
}
