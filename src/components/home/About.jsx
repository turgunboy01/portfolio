import React from "react";
import img from "../../../public/image.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
const About = () => {
  return (
    <div className="bg-[#fff]  px-[20px] sm:px-[50px] py-[80px]">
      <div>
        <h1 className=" pb-8 lg:text-[48px] lg:leading-[38px] md:text-[40px] md:leading-[50px] sm:text-[32px] sm:leading-[40px] text-[28px] leading-[34px]  font-extrabold aos-init aos-animate">
          About Me
        </h1>
        <div className="w-[120px] h-[4px] rounded-lg bg-[#0db39f]" />

        <div className="pt-[30px]">
          <p className="text-[14px] xl:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            reprehenderit ipsa dignissimos molestiae, dolor eos voluptatem,
            necessitatibus rem tenetur dicta voluptas sequi at earum eum fugit.
            Veniam placeat dicta sed. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Saepe obcaecati quis id rem nulla accusamus?
            Doloremque, eaque a voluptate totam laborum, qui consequuntur soluta
            veritatis perferendis reiciendis aperiam, obcaecati adipisci.
          </p>
        </div>
        <div className="flex gap-[30px] flex-col lg:flex-row pt-[50px]">
          <img
            src={img}
            className="h-[500px] w-[320px] xl:w-[400px] flex-[.3] rounded-lg object-cover"
            alt=""
          />
          <div className="">
            <h2 className="text-[30px] xl:text-[50px] font-extrabold text-[#0db39f]">
              Front-End Developer!
            </h2>
            <p className="text-[14px] xl:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              veritatis earum quibusdam ducimus in esse voluptatum dolores
              incidunt, laborum temporibus?
            </p>
            <div className="pt-[50px] flex flex-col 2xl:flex-row gap-[16px] justify-between">
              <div className="">
                <span className="flex xl:flex-row  gap-2 flex-col  text-[18px] ">
                  <span className="flex gap-1 ">
                    <MdKeyboardArrowRight
                      className="text-[#0db39f] xl:rotate-0 rotate-90 
                   text-[25px]"
                    />
                    <p className="font-bold">Birthday:</p>
                  </span>
                  <p className=" pl-7 xl:pl-0"> 5 Oct 2001</p>
                </span>
                <p className="flex  xl:flex-row gap-2 flex-col text-[18px] py-[20px] ">
                  <div className="flex gap-1">
                    <MdKeyboardArrowRight
                      className="text-[#0db39f] xl:rotate-0 rotate-90 
                   text-[25px]"
                    />{" "}
                    <strong className="font-bold">Phone :</strong>
                  </div>
                  <p className=" pl-7 xl:pl-0"> +99 895 633 23 92</p>
                </p>
                <p className="flex text-[18px] flex-col xl:flex-row gap-2 ">
                  <div className="flex gap-1">
                    <MdKeyboardArrowRight
                      className="text-[#0db39f] xl:rotate-0 rotate-90 
                   text-[25px]"
                    />{" "}
                    <strong className="font-bold">Email :</strong>
                  </div>
                  <p className=" pl-7 xl:pl-0">turgunboy.channel@gmail.com</p>
                </p>
              </div>

              <div className="">
                <p className="flex text-[18px] flex-col xl:flex-row">
                  <div className="flex gap-1">
                    <MdKeyboardArrowRight
                      className="text-[#0db39f] xl:rotate-0 rotate-90 
                   text-[25px]"
                    />{" "}
                    <strong className="font-bold">Age :</strong>
                  </div>
                  <p className=" pl-8 xl:pl-0">23</p>
                </p>
                <p className="flex text-[18px] py-[17px] flex-col xl:flex-row">
                  <div className="flex gap-1">
                    <MdKeyboardArrowRight
                      className="text-[#0db39f] xl:rotate-0 rotate-90 
                   text-[25px]"
                    />{" "}
                    <strong className="font-bold">Degree :</strong>
                  </div>
                  <p className=" pl-7 xl:pl-0">Strong Junior</p>
                </p>{" "}
                <p className="flex text-[18px] flex-col xl:flex-row">
                  <div className="flex gap-1">
                    <MdKeyboardArrowRight
                      className="text-[#0db39f] xl:rotate-0 rotate-90 
                   text-[25px]"
                    />
                    <strong className="font-bold">City :</strong>
                  </div>
                  <p className=" pl-8 xl:pl-0">Uzbekistan, Namangan</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
