import React from "react";
import yogaImg from "../../assets/images/yoga-zone.png";
import animalImg from "../../assets/images/Animal-toys.png";
import recipeImg from "../../assets/images/italian-recipe.png";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  const projectsData = [
    {
      title: "Yoga Zone",
      imgUrl: yogaImg,
      technologies: "React | Express.JS | MongoDB | Stripe",
      liveUrl: "https://yoga-zone-40088.web.app/",
      gitUrl: "https://github.com/shohel7/yoga-zone-client",
    },
    {
      title: "Animal Toys",
      imgUrl: animalImg,
      technologies: "React | Node.Js | Express.JS | MongoDB",
      liveUrl: "https://animal-toys-c0f6c.web.app/",
      gitUrl: "https://github.com/shohel7/animal-toys-client",
    },
    {
      title: "Italian Recipe",
      imgUrl: recipeImg,
      technologies: "React | Node.Js | Express.JS",
      liveUrl: "https://italiano-recipe.web.app/",
      gitUrl: "https://github.com/shohel7/italian-recipe-client",
    },
  ];

  return (
    <div className="py-32" id="projects">
      <h3 className="text-3xl text-center text-slate-200 mb-12">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projectsData.map((item, index) => (
          <Tilt key={index}>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="bg-indigo-900 p-5 rounded-md"
            >
              <div className="portfolio__img">
                <img src={item.imgUrl} alt="images" className="w-full h-48" />
              </div>

              <div className="text-gray-400 space-y-2 mt-3">
                <h3 className="text-gray-200 font- text-xl">{item.title}</h3>
                <p>
                  <a href={item.liveUrl}>Live Site</a> |
                  <a href={item.gitUrl}>GitHub</a>
                </p>
                <p>{item.technologies}</p>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Projects;
