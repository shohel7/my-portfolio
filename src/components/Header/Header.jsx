import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import heroImg from "../../assets/images/hero-image.png";
import resume from "../../assets/resume/Resume_of_Shohel_Rana.pdf";
import Tilt from "react-parallax-tilt";
import ReactTyped from "react-typed";

const Header = () => {
  return (
    <div className="pt-5 md:h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 text-white h-screen items-center mt-24 md:mt-0">
        <div className="flex space-x-4">
          <div className="space-y-6 mt-3 flex flex-col items-center">
            <a href="https://github.com/shohel7" target="_black">
              <FaGithub className="bg-gray-400 text-3xl text-indigo-950 p-1 rounded-md cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/shohel-ranac/" target="_black">
              <FaLinkedinIn className="bg-gray-400 text-3xl text-indigo-950 p-1.5 rounded-md cursor-pointer" />
            </a>
            <a href="https://web.facebook.com/akash.shohel" target="_black">
              <FaFacebookF className="bg-gray-400 text-3xl text-indigo-950 p-1 rounded-md cursor-pointer" />
            </a>
            <div className="border-white border-e-2 w-0 h-24"></div>
          </div>
          <div className="space-y-3">
            <h5 className="text-[#39F4ED]">Hi, I am</h5>
            <h1 className="text-4xl md:text-6xl font-sans font-bold text-slate-300">
              <ReactTyped
                strings={["Md Shohel Rana"]}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="300"
              className="text-3xl md:text-5xl font-sans font-semibold text-slate-400"
            >
              MERN Stack Developer
            </h1>
            <p className="font-serif md:text-lg text-base text-gray-400 text-justify pb-6">
              I am a passionate web developer, Each & every single bug teaches
              me two things. one is to when I find a solution to learn from it
              and the other one is my mind says you are not weak, just a little
              bit up your spirit and maintain your consistency that brings your
              success immediately.
            </p>
            <a
              className="border-2 border-[#39F4ED] py-2 px-3 hover:bg-[#39F4ED] transition-all duration-300"
              href={resume}
              download
            >
              Download Resume
            </a>
          </div>
        </div>
        <Tilt>
          <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-delay="200"
            data-aos-duration="500"
            className="bg-indigo-900 rounded-md md:w-2/3 flex justify-center md:ml-48"
          >
            <img className="h-96 w-100" src={heroImg} alt="hero-image" />
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Header;
