export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between border-b border-gray-700 pb-6">
            <div>
              <h2 className="text-xl font-semibold">accredian</h2>
              <p className="text-sm text-gray-400">credentials that matter</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Schedule 1-on-1 Call Now
            </button>
          </div>
  
          <div className="grid grid-cols-3 gap-10 mt-6">
            {/* Programs Section */}
            <div>
              <h3 className="text-lg font-semibold">Programs</h3>
              <ul className="mt-2 space-y-2">
                {[
                  "Data Science & AI",
                  "Product Management",
                  "Business Analytics",
                  "Digital Transformation",
                  "Business Management",
                  "Project Management",
                  "Strategy & Leadership",
                  "Senior Management",
                  "Fintech",
                ].map((program, index) => (
                  <li key={index} className="flex items-center gap-2 cursor-pointer">
                    <span className="text-xl">+</span> {program}
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <ul className="mt-2 space-y-2 text-gray-400 text-sm">
                <li>Email us (For Data Science Queries): admissions@accredian.com</li>
                <li>Email us (For Product Management Queries): pm@accredian.com</li>
                <li>Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</li>
                <li>Product Management Admission Helpline: +91 9625811095</li>
                <li>Enrolled Student Helpline: +91 7969232507</li>
                <li>
                  Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,
                  Haryana 122015
                </li>
              </ul>
  
              <h3 className="mt-4 text-lg font-semibold">Why Accredian</h3>
              <h3 className="mt-4 text-lg font-semibold">Follow Us</h3>
              <div className="flex items-center gap-4 mt-2">
                {[
                  "assets/facebook.png",
                  "assets/linkdin.png",
                  "assets/twitter.png",
                  "assets/instagram.png",
                  "assets/youtube.png",
                ].map((platform, index) => (
                    <img key={index} src={platform} alt="Social Icon" className="w-6 h-6 cursor-pointer" />
                ))}
              </div>
            </div>
  
            {/* Accredian Links */}
            <div>
              <h3 className="text-lg font-semibold">Accredian</h3>
              <ul className="mt-2 space-y-2 text-gray-400 text-sm">
                {[
                  "About",
                  "Career",
                  "Blog",
                  "Admission Policy",
                  "Referral Policy",
                  "Privacy Policy",
                  "Terms Of Service",
                  "Master FAQs",
                ].map((link, index) => (
                  <li key={index} className="cursor-pointer hover:text-white">{link}</li>
                ))}
              </ul>
            </div>
          </div>
  
          <p className="text-center text-gray-500 text-sm mt-8">
            © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </footer>
    );
  }
  