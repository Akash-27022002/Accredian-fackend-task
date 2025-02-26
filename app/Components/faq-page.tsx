import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaHeadset } from "react-icons/fa";

const faqs = [
  {
    question:
      "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
    answer:
      "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
  },
  {
    question: "What is the minimum system configuration required?",
    answer: "Details about system configuration will be provided soon.",
  },
];

export default function FAQPage() {
  const [selectedTab, setSelectedTab] = useState("Eligibility");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const tabItems = ["Eligibility", "How To Use?", "Terms & Conditions"];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-center mb-6">
        Frequently Asked <span className="text-blue-500">Questions</span>
      </h2>

      {/* Sidebar and FAQ Section */}
      <div className="flex gap-8">
        {/* Sidebar Buttons */}
        <div className="flex flex-col space-y-3">
          {tabItems.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`w-64 h-16 text-left px-4 font-medium rounded-[14px] border-0.5 transition-all duration-200 ${
                selectedTab === tab
                  ? "bg-white border-gray-300 shadow-lg"
                  : "bg-gray-200 border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="flex-1">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-4">
              <button
                className="flex justify-between w-full text-left text-blue-600 font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-600 text-white p-6 mt-8 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FaHeadset className="text-4xl" />
          <div>
            <p className="text-lg font-semibold">
              Want to delve deeper into the program?
            </p>
            <p className="text-sm">
              Share your details to receive expert insights from our program
              team!
            </p>
          </div>
        </div>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-200">
          Get in touch
        </button>
      </div>
    </div>
  );
}
