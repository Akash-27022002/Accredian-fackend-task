import { useState } from "react";
import SignupModal from "./SignupModal";

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSignup, setShowSignup] = useState(false);

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleLogin = () => {
    if (!isFormValid) {
      setError("All fields are mandatory");
    } else {
      setError("");
      // Handle login logic here
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {showSignup ? (
        <SignupModal isOpen={showSignup} onClose={() => setShowSignup(false)} />
      ) : (
        <div className="fixed inset-0 backdrop-blur-sm bg-gray-100 bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-[40rem] relative flex z-50">
            <img 
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/Auth/login.webp" 
              alt="Login Illustration" 
              className="w-1/2 mr-6"
            />
            <div className="w-1/2">
              <h2 className="text-2xl font-semibold mb-6">Sign in</h2>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mb-3 border rounded-lg"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mb-5 border rounded-lg"
              />
              {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
              <div className="flex justify-between items-center">
                <button 
                  onClick={handleLogin} 
                  disabled={!isFormValid} 
                  className={`px-5 py-3 rounded-lg ${isFormValid ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}>
                  LOGIN
                </button>
                <a href="#" className="text-blue-500 text-sm">
                  Lost your password?
                </a>
              </div>
              <p className="text-center mt-6 text-sm">
                Don't have an account? 
                <button 
                  onClick={() => setShowSignup(true)} // Removed onClose() here
                  className="text-blue-500">
                  Sign up here
                </button>
              </p>
            </div>
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
}
