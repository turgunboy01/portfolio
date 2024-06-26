import React from "react";
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
  FaUser,
} from "react-icons/fa";
import img from "../../../public/image.jpg";
import { IoBriefcase } from "react-icons/io5";
import { HiOutlineServerStack } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";

const Sidebar = () => {
  return (
    <div>
      <div className="flex justify-center  flex-col relative pt-10">
        <div className="text-[#fff] p-[30px] flex flex-col items-center gap-5">
          <img
            src={img}
            className="rounded-full w-[200px] h-[200px] object-cover border-[4px] "
            alt=""
          />
          <h2 className="text-white text-center lg:text-[38px] lg:leading-[38px] md:text-[40px] md:leading-[50px] sm:text-[32px] sm:leading-[40px] text-[28px] leading-[34px] pb-[15px] font-bold aos-init aos-animate">
            Turgunboy Makhmudjonov
          </h2>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-[#282f40] hover:bg-[#3b465f] w-[40px] flex items-center justify-center text-[30px]  h-[40px] rounded-full"
            >
              <FaTelegramPlane size={25} />
            </a>
            <a
              href="#"
              className="bg-[#282f40] hover:bg-[#3b465f] w-[40px] flex items-center justify-center text-[30px]  h-[40px] rounded-full"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="#"
              className="bg-[#282f40] hover:bg-[#3b465f] w-[40px] flex items-center justify-center text-[30px]  h-[40px] rounded-full"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="#"
              className="bg-[#282f40] hover:bg-[#3b465f] w-[40px] flex items-center justify-center text-[30px]  h-[40px] rounded-full"
            >
              <FaLinkedin size={25} />
            </a>
          </div>
        </div>
        <div className="p-[20px]  items-center flex flex-col gap-5">
          <li className="flex flex-col gap-4">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              href="#"
              className="text-[#fff] flex items-center gap-3  text-center text-[25px] leading-[34px] font-bold "
            >
              <FaHome size={30} />
              Home
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              href="#"
              className="text-[#fff] flex items-center gap-3  text-center text-[25px] leading-[34px] font-bold "
            >
              <FaUser />
              About Me
            </Link>{" "}
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              href="#"
              className="text-[#fff] flex items-center gap-3  text-center text-[25px] leading-[34px] font-bold "
            >
              <IoBriefcase />
              Portfolio
            </Link>{" "}
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              href="#"
              className="text-[#fff] flex items-center gap-3  text-center text-[25px] leading-[34px] font-bold "
            >
              <MdEmail />
              Contact
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
