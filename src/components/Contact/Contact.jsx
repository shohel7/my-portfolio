import React from "react";
import Lottie from "lottie-react";
import message from "../../../public/lottieMessage.json";

const Contact = () => {
  return (
    <div className="pb-10" id="contact">
      <h3 className="text-3xl text-center text-slate-200 ">Get In Touch</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-16 items-center">
        <div className="p-5">
          <form className="flex flex-col gap-4">
            <div>
              <label className="text-gray-200">Full Name *</label>
              <input
                type="text"
                className="w-full mt-1 py-2.5 px-5 rounded-md focus:outline-indigo-900 placeholder:text-base"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="text-gray-200">Email *</label>
              <input
                type="email"
                className="w-full mt-1 py-2.5 px-5 rounded-md focus:outline-indigo-900 placeholder:text-base"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="text-gray-200">Message *</label>
              <textarea
                rows={6}
                type="text"
                className="w-full mt-1 py-2.5 px-5 rounded-md focus:outline-indigo-900 placeholder:text-base"
                placeholder="message . . ."
              />
            </div>
            <button className="bg-indigo-900 text-gray-200 w-full rounded-s-md py-2.5 hover:bg-indigo-800 duration-300">
              Send Message
            </button>
          </form>
        </div>
        <div className="">
          <Lottie loop={true} animationData={message} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
