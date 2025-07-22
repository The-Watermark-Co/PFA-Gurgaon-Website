import React from "react";
import Navbar from "../components/Navbar";
import puppy from "../assets/contact-image.png";

const Contact = () => {
  return (
    <div className="w-full bg-zinc-100">
      {/* Navigation Bar */}
      <Navbar />

      {/* -------------------- Hero Section -------------------- */}
      <div
        className="w-full h-[100vh] bg-no-repeat bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${puppy})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            “ Your haven for comfort, connection, and endless possibilities.”
          </p>
        </div>
      </div>

      {/* -------------------- Contact Section -------------------- */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* ---------- Left: Contact Form ---------- */}
          <form className="flex-1 bg-white p-8 rounded-lg shadow space-y-6">
            {/* Name Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="text-sm font-medium">Subject</label>
              <input
                type="text"
                placeholder="Enter your Subject"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                placeholder="Enter your Message here..."
                rows="4"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-teal-400 text-white rounded-md hover:bg-teal-500 transition"
            >
              Send Your Message
            </button>
          </form>

          {/* ---------- Right: Contact Info ---------- */}
          <div className="w-full md:w-[300px] lg:w-[350px] bg-white p-8 rounded-lg shadow space-y-6">
            <div className="flex items-center space-x-4">
              <i className="fas fa-envelope text-xl text-gray-600" />
              <span className="text-gray-700">support@skillbridge.com</span>
            </div>

            <div className="flex items-center space-x-4">
              <i className="fas fa-phone text-xl text-gray-600" />
              <span className="text-gray-700">+91 00000 00000</span>
            </div>

            <div className="flex items-center space-x-4">
              <i className="fas fa-map-marker-alt text-xl text-gray-600" />
              <span className="text-gray-700">Somewhere in the World</span>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Social Profiles</p>
              <div className="flex space-x-4 text-xl">
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
