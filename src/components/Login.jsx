
import { useState } from "react";

function generateCaptcha() 
{
  return Math.floor(10000 + Math.random() * 90000).toString();
}

export default function Login({ onLoginSuccess, goHome })
 {
    const [fullName, setFullName] = useState("");
    const [mobile, setMobile] = useState("");
    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [captchaInput, setCaptchaInput] = useState("");
    const [showTerms, setShowTerms] = useState(false);
    const [logoError, setLogoError] = useState(false);

    const handleRefreshCaptcha = () => {
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
    };

    const handleSubmit = () => {
      if (!fullName.trim()) {
        alert("Please enter your full name");
        return;
      }
      if (!/^\d{6,12}$/.test(mobile)) {
        alert("Please enter a valid mobile number (6 to 12 digits)");
        return;
      }
      if (captchaInput !== captcha) {
        alert("Captcha does not match");
        return;
      }

      alert(`Registered Successfully!\nName: ${fullName}\nMobile: ${mobile}`);

      onLoginSuccess?.();
    };

    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gray-50">
        <div className="text-center mb-10">
          <button
            type="button"
            onClick={() => goHome?.()}
            className="mx-auto mb-4 flex flex-col items-center focus:outline-none"
            title="Back to Home"
          >
            {!logoError ? (
              <img
                src="https://logos-world.net/wp-content/uploads/2021/08/Dominos-Emblem.png"
                alt="Domino's Logo"
                className="w-20 mx-auto hover:opacity-80 transition"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="w-20 h-20 mx-auto rounded-full bg-red-600 flex items-center justify-center text-3xl hover:opacity-80 transition">
                🍕
              </div>
            )}
          </button>
          <h1 className="text-3xl md:text-4xl font-extrabold text-red-600 drop-shadow-md tracking-wide">
            Welcome to Domino’s Login
          </h1>
          <p className="text-gray-600 mt-2 text-base md:text-lg">
            Sign in to enjoy exclusive offers and track your pizza orders 
          </p>
        </div>

        <div className="max-w-xl w-full p-8 rounded-xl shadow-lg bg-white">
          <label className="block mb-2 text-gray-700 font-semibold">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <label className="block mb-2 text-gray-700 font-semibold">Mobile Number</label>
          <input
            type="tel"
            maxLength={15}
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "");
              setMobile(val);
            }}
            className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <label className="block mb-2 text-gray-700 font-semibold">Captcha</label>
          <div className="flex items-center mb-4 gap-4">
            <div className="select-none bg-gray-200 text-gray-800 font-mono text-xl px-5 py-2 rounded-md tracking-widest">
              {captcha}
            </div>
            <button
              type="button"
              onClick={handleRefreshCaptcha}
              className="text-red-600 font-semibold underline hover:text-red-800"
            >
              Refresh
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter captcha"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value.trim())}
            className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <p className="text-xs text-gray-500 mb-2">
            By going forward you accept our{" "}
            <button
              onClick={() => setShowTerms(!showTerms)}
              className="text-red-600 underline hover:text-red-800 focus:outline-none"
            >
              Terms & Conditions
            </button>
          </p>

          {showTerms && (
            <div className="mb-6 p-4 bg-gray-100 border border-gray-300 rounded text-sm text-gray-700 max-h-48 overflow-auto">
              <h2 className="font-semibold mb-2">Domino's Terms & Conditions</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>All orders are subject to availability.</li>
              <li>Promotions and offers may vary by location and time.</li>
              <li>Loyalty points are credited only after order completion.</li>
              <li>Payments must be made through authorized channels.</li>
              <li>Personal data is collected in accordance with Domino's privacy policy.</li>
              <li>Customers must be 18+ to register for the loyalty program.</li>
              <li>Domino's reserves the right to cancel or modify orders at any time.</li>
            </ul>
            </div>
            )}

            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 hover:bg-red-700 text-white font-bold py-3 rounded transition"
            >
              Register
            </button>
          </div>
        </div>
      );
    }

