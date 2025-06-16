// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f5faff] border-t border-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-[#003049] mb-4">ProHire</h2>
          <p className="text-sm text-gray-700 max-w-xs">
            Connecting talent with opportunity. Find your next big break here.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-[#003049] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-[#007BFF]">
                Home
              </a>
            </li>
            <li>
              <a href="/jobs" className="hover:text-[#007BFF]">
                Jobs
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#007BFF]">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#007BFF]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-[#003049] mb-4">
            Popular Categories
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Engineering</li>
            <li>Marketing</li>
            <li>Design</li>
            <li>Sales</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-[#003049] mb-4">
            Stay Updated
          </h3>
          <p className="text-sm text-gray-600 mb-3 text-center md:text-left">
            Subscribe to job alerts and updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 w-full max-w-xs">
            <input
              type="email"
              placeholder="Email address"
              className="px-3 py-2 rounded border border-gray-300 text-sm w-full focus:outline-none"
            />
            <button className="bg-[#1E88E5] text-white px-4 py-2 rounded text-sm hover:bg-[#1565C0] w-full sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t pt-4 px-4">
        © {new Date().getFullYear()} ProHire. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
