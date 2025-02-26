import { useState } from "react";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("refer");

  const tabs = [
    { id: "refer", label: "Refer" },
    { id: "benefits", label: "Benefits" },
    { id: "faqs", label: "FAQs" },
    { id: "support", label: "Support" }
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Tabs Navigation Outside Container */}
      <div className="relative top-[30px] left-1/2 transform -translate-x-1/2 flex justify-center bg-blue-100 rounded-full p-2 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl overflow-x-auto whitespace-nowrap z-20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-2 text-gray-700 rounded-full transition-all whitespace-nowrap ${
              activeTab === tab.id ? "font-semibold text-blue-600" : "hover:text-blue-500"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />}
          </button>
        ))}
      </div>

      {/* Main Content Container */}
      <section className="relative w-full max-w-4xl mx-auto h-auto sm:h-[472px] top-[57px] bg-[#EEF5FF] shadow-xl rounded-[29px] py-10 z-10 overflow-hidden" style={{ boxShadow: "0px 4px 65px 1px #00072B36" }}>
        {/* Content Section */}
        <div className="mt-16 mx-auto max-w-4xl px-4">
          {activeTab === "refer" && (
            <div className="relative flex flex-col md:flex-row items-center">
              {/* Left Section - Image Text */}
              <div className="w-full md:w-1/2 text-center md:text-left relative z-10">
                <img src="/assets/lets-learn-and-earn-image.png" alt="Let's Learn & Earn" className="w-full max-w-xs mx-auto md:mx-0 mb-4" />
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700 relative z-20">
                  Refer Now
                </button>
              </div>

              {/* Right Section - Image */}
              <div className="w-full md:w-1/2 mt-6 md:mt-0 relative flex justify-center items-center">
                {/* Flying Money Images */}
                <img src="/assets/money-image.png" alt="Flying Money Top Middle" className="absolute top-2 left-1/2 w-12 sm:w-16 md:w-20 z-0 transform -translate-x-1/2 rotate-[250deg]" />
                <img src="/assets/money-image.png" alt="Flying Money Top Right" className="absolute -top-30 -right-0 w-16 md:w-20 z-0 transform rotate-270" />
                <img src="/assets/money-image.png" alt="Flying Money Bottom Left" className="absolute bottom-12 left-5 w-12 sm:w-16 md:w-20 z-20 transform rotate-0" />
                <img src="/assets/money-image.png" alt="Flying Money Bottom Right" className="absolute bottom-40 right-2.5 w-12 sm:w-16 md:w-20 z-0 transform rotate-180" />
                <img src="/assets/money-image.png" alt="Flying Money Top Left" className="absolute -top-32.5 -left-110 w-12 sm:w-16 md:w-20 z-0 transform rotate-180" />
                
                {/* Main Image */}
                <img src="/assets/person-add-image.png" alt="Refer Image" className="relative z-10 w-full max-w-xs sm:max-w-md mx-auto" />
              </div>
            </div>
          )}
          {activeTab === "benefits" && <div className="text-center">Benefits Content...</div>}
          {activeTab === "faqs" && <div className="text-center">FAQs Content...</div>}
          {activeTab === "support" && <div className="text-center">Support Content...</div>}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
