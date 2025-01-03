import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-8 mt-8 md:mt-0 md:py-10">
      <p className="text-sm md:text-base">
        &copy; 2024 Calendar Tracker. All Rights Reserved.
      </p>
      <div className="space-x-6 mt-4 flex justify-center md:justify-start">
        <a href="/privacy-policy" className="hover:text-indigo-200">
          Privacy Policy
        </a>
        <a href="/terms-of-service" className="hover:text-indigo-200">
          Terms of Service
        </a>
        <a href="/contact" className="hover:text-indigo-200">
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
