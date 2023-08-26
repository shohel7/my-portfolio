import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-gray-200 flex flex-col items-center space-y-4 bg-indigo-900 py-5">
      <div className="flex space-x-4">
        <a href="https://github.com/shohel7" target="_black">
          <FaGithub className="bg-gray-200 hover:bg-gray-400 duration-300 text-4xl text-indigo-950 p-2 rounded-full cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/shohel-ranac/" target="_black">
          <FaLinkedinIn className="bg-gray-200 hover:bg-gray-400 duration-300 text-4xl text-indigo-950 p-2 rounded-full cursor-pointer" />
        </a>
        <a href="https://web.facebook.com/akash.shohel" target="_black">
          <FaFacebookF className="bg-gray-200 hover:bg-gray-400 duration-300 text-4xl text-indigo-950 p-2 rounded-full cursor-pointer" />
        </a>
      </div>
      <p className="text-center">
        Copyright © 2023 - All right reserved by Shohel Rana.
      </p>
    </div>
  );
};

export default Footer;
