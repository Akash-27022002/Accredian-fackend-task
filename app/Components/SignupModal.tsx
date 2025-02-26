import { useState } from "react";
import LoginModal from "./LoginModal";

export default function SignupModal({ isOpen, onClose }) {
  const [showLogin, setShowLogin] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      {showLogin ? (
        <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      ) : (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg flex w-[60%] max-w-4xl relative">
            {/* Left Side - Signup Form */}
            <div className="w-1/2 pr-6">
              <h2 className="text-2xl font-bold mb-4">Sign up</h2>
              <form>
                <label className="block text-gray-700">First Name *</label>
                <input
                  type="text"
                  className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="First Name"
                />
                <label className="block text-gray-700">Last Name *</label>
                <input
                  type="text"
                  className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Last Name"
                />
                <label className="block text-gray-700">Email *</label>
                <input
                  type="email"
                  className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Register
                </button>
              </form>
              <p className="mt-4 text-gray-600">
                Already have an account? 
                <button 
                  onClick={() => { setShowLogin(true); onClose(); }}
                  className="text-blue-500"
                >
                  Login
                </button>
              </p>
            </div>

            {/* Right Side - Illustration */}
            <div className="w-1/2 flex justify-center items-center">
              <img
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/Auth/signup.webp"
                alt="Signup Illustration"
                className="w-full"
              />
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
}
