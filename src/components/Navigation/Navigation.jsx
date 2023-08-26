import React, { useState } from "react";
import { FaAlignJustify, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  //   w-full fixed top-0 left-0

  const [open, setOpen] = useState(false);
  return (
    <div className=" w-full fixed top-0 left-0 text-white bg-indigo-950 z-20">
      <div className="md:flex items-center justify-between py-4 md:px-24 px-7">
        <span className="text-gray-300 text-2xl font-semibold">
          Shohel Rana
        </span>
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <FaTimes /> : <FaAlignJustify />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-indigo-900 md:bg-indigo-950 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
            open
              ? "top-16 opacity-100"
              : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 text-base md:my-0 my-5">
              <a
                href={link.link}
                className="text-gray-100 hover:text-[#39F4ED] duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="border-2 md:ml-7 ml-0 border-[#39F4ED] py-2 px-3 hover:bg-[#39F4ED] transition-all duration-300">
            Hire Now
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
