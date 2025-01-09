import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Desk from "../Assets/desk.png";

function Email() {
  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "acd0bb6c-1da5-4b9a-a2fe-4a077d87d62d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setShowPopup(true); // Show the popup
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section: Image */}
        <div className="flex justify-center" data-aos="fade-right">
          <img
            src={Desk}
            alt="Desk Setup"
            className="md:mr-56 mr-24"
          />
        </div>

        {/* Right Section: Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg" data-aos="fade-left">
          <h2 className="text-yellow-500 text-2xl font-bold mb-6 text-center">
            GET IN TOUCH
          </h2>
          <form className="space-y-5" onSubmit={onSubmit}>
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="What's your name?"
                className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="What's your email?"
                className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                required
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject of the message"
                className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="What you want to say?"
                className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-yellow-500 text-xl font-bold mb-4">
              Success!
            </h3>
            <p className="text-gray-200 mb-6">Your message has been sent successfully.</p>
            <button
              className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Email;
