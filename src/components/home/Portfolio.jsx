import React from "react";
import img1 from "../../../public/img12.png";
import img2 from "../../../public/img1.png";
import img3 from "../../../public/img2.png";
import img4 from "../../../public/img3.png";
import img5 from "../../../public/img4.png";
import img6 from "../../../public/img5.png";
import img7 from "../../../public/img6.png";
import img8 from "../../../public/img7.png";
import img9 from "../../../public/img8.png";
import img10 from "../../../public/img9.png";
import img11 from "../../../public/img10.png";
import img12 from "../../../public/img11.png";
import { IoIosGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const data = [
  {
    img: img2,
    title: "UIC Group Clone",
    link: "https://ts-4-green.vercel.app/",
    githublink: "https://github.com/turgunboy01/ts-4",
  },
  {
    img: img3,
    title: "Udevs Clone",
    link: "https://udevs-seven.vercel.app/",
    githublink: "https://github.com/turgunboy01/udevs",
  },
  {
    img: img4,
    title: "Netflix Clone",
    link: "https://netflix-clone-psi-olive.vercel.app",
    githublink: "https://netflix-cone-pink.vercel.app",
  },
  {
    img: img5,
    title: "Green shop clone",
    link: "https://green-shop-gray.vercel.app",
    githublink: "https://github.com/turgunboy01/green-shop",
  },
  {
    img: img6,
    title: "Cuntry Appliicate",
    link: "https://country-app-lemon-chi.vercel.app/",
    githublink: "https://github.com/turgunboy01/country-app",
  },
  {
    img: img7,
    title: "Crypto Application",
    link: "https://crypto-humter.vercel.app/",
    githublink: "https://github.com/turgunboy01/cryptoHumter",
  },
  {
    img: img9,
    title: "Food Shop Application",
    link: "https://examenwork.netlify.app/",
    githublink: "https://github.com/turgunboy01/home10",
  },
  {
    img: img10,
    title: "Travel Application",
    link: "https://my-travel-ap.netlify.app/",
    githublink: "",
  },
  {
    img: img11,
    title: "Eccommerce Application",
    link: "https://shop-ap.netlify.app/",
    githublink: "https://github.com/turgunboy01/shop-app",
  },
  {
    img: img12,
    title: "Cource WebSite",
    link: "https://cours-app.netlify.app/",
    githublink: "https://github.com/turgunboy01/course-app",
  },
  {
    img: img8,
    title: "Age Calculator Application",
    link: "https://hove7.vercel.app/",
    githublink: "https://github.com/turgunboy01/hove7/tree/master/src",
  },
  {
    img: img1,
    title: "Movix Movie Application ",
    link: "https://elaborate-pithivier-ddd52a.netlify.app",
    githublink: "https://github.com/turgunboy01/movie-App",
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio" className="w-full px-[20px] sm:px-[50px] py-[80px]">
      <h1 className=" pb-8 lg:text-[48px] lg:leading-[38px] md:text-[40px] md:leading-[50px] sm:text-[32px] sm:leading-[40px] text-[28px] leading-[34px]  font-extrabold aos-init aos-animate">
        Skills
      </h1>
      <div className="w-[120px] h-[4px] rounded-lg bg-[#0db39f]" />
      <div className="pt-[30px] flex flex-col">
        <span className="text-[22px] font-semibold"> Technical skills: </span>
        <span className="text-[22px]">
          HTML5, CSS3, SCSS, Bootstrap5, TailwindCss, JavaScript,
          Redux/Toolkit/Thunk, Zustand, Material UI, Semantic UI, Ant Design,
          React Js, Vite
        </span>
      </div>
      <div className="pt-[30px] flex flex-col">
        <span className="text-[22px] font-semibold">Soft Skills:</span>{" "}
        <span className="text-[22px]">
          {" "}
          Communication, Leadership, Adaptability, Problem solving.
        </span>
      </div>
      <div className="pt-[100px]">
        <h1 className=" pb-8 lg:text-[48px] lg:leading-[38px] md:text-[40px] md:leading-[50px] sm:text-[32px] sm:leading-[40px] text-[28px] leading-[34px]  font-extrabold aos-init aos-animate">
          Portfolio
        </h1>
        <div className="w-[120px] h-[4px] rounded-lg bg-[rgb(13,179,159)]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] py-[40px]">
          {data.map((item) => (
            <div className="group  relative h-[250px] shadow-lg overflow-hidden rounded-md">
              <img
                src={item.img}
                className="object-cover w-full h-full"
                alt=""
              />
              <div className="w-full absolute group-hover:translate-y-0 duration-500 group-hover:translate-x-[0] top-0 translate-x-[100%] translate-y-[100%] h-full flex items-center justify-center glass flex-col bg-[#0db3a0cc]  ">
                <h2 className="text-[22px] text-center text-[#fff] tracking-wide font-semibold">
                  {item.title}
                </h2>
                <div className="flex gap-3 pt-[10px]">
                  <a
                    href={item.githublink}
                    className="hover:text-[#fff]"
                    target="_blank"
                  >
                    <FaGithub size={25} />
                  </a>
                  <a
                    href={item.link}
                    className="hover:text-[#fff]"
                    target="_blank"
                  >
                    <IoIosGlobe size={27} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
