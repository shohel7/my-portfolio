import React from "react";
import aboutImg from "../../assets/images/about.jpg";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <div className="mb-28 mt-56 md:mt-0 text-white" id="about">
      <h3 className="text-3xl text-center text-slate-200 mb-12 mt-8">
        About Me
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="order-2 md:order-1 flex justify-center"
        >
          <Tilt>
            <img
              className="h-96 rounded-md"
              src={aboutImg}
              alt="about-images"
            />
          </Tilt>
        </div>

        <div
          className="space-y-4 order-1 md:order-2"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <p className="font-serif text-gray-400 md:text-lg text-base text-justify">
            Hello there! I am a web developer, and I am very passionate and
            dedicated to my work. With 1+ years experience as a professional web
            developer. I have completed my graduation in software engineering
            from daffodil international university.I love to acquirer skills and
            knowledge. I am hardworking person and also i am a first learner. I
            never give up in any station in my life. I also love to travel,
            reading books and watching movies.
          </p>
          <span className="flex gap-x-4">
            <Tilt>
              <div
                data-aos="flip-left"
                data-aos-easing="linear"
                data-aos-duration="700"
                data-aos-delay="300"
                className="text-center bg-indigo-900 p-4 rounded-md shadow-2xl w-28"
              >
                <span className="text-3xl font-bold font-mono">1</span> <br />
                <span className="font-serif text-gray-400">
                  Year <br /> Experience
                </span>
              </div>
            </Tilt>
            <Tilt>
              <div
                data-aos="flip-left"
                data-aos-easing="linear"
                data-aos-duration="700"
                data-aos-delay="400"
                className="text-center bg-indigo-900 p-4 rounded-md shadow-2xl w-28"
              >
                <span className="text-3xl font-bold font-mono">7</span> <br />
                <span className="font-serif text-gray-400">
                  Projects <br /> Completed
                </span>
              </div>
            </Tilt>
            <Tilt>
              <div
                data-aos="flip-left"
                data-aos-easing="linear"
                data-aos-duration="700"
                data-aos-delay="500"
                className="text-center bg-indigo-900 p-4 rounded-md shadow-2xl w-28"
              >
                <span className="text-3xl font-bold font-mono">5</span> <br />
                <span className="font-serif text-gray-400">
                  Happy <br /> Clients
                </span>
              </div>
            </Tilt>
          </span>
          <button className="border-2 border-[#39F4ED] py-2 px-3 hover:bg-[#39F4ED] transition-all duration-300 ">
            Contact with Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
