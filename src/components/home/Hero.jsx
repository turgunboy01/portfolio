import React from "react";
import bg from "../../../public/a.jpg";
// import { TypeAnimation } from "react-type-animation";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <div
      id="home"
      className="w-full h-[100vh] flex items-center"
      style={{ backgroundImage: `url('${bg}')`, backgroundSize: "100% 100%" }}
    >
      <div className="pl-[30px] sm:pl-[60px] lg:pl-[100px] ">
        <h2 className="text-white pb-8 lg:text-[50px] xl:text-[58px] lg:leading-[38px] md:text-[40px] md:leading-[50px] sm:text-[32px] sm:leading-[40px] text-[28px] leading-[34px]  font-bold ">
          Hi, My name is
        </h2>
        <h2 className="text-white  lg:text-[50px] xl:text-[58px] lg:leading-[56px] md:text-[40px] md:leading-[50px] sm:text-[32px] sm:leading-[40px] text-[28px] leading-[34px] pb-[15px] font-bold ">
          Turgunboy Makhmudjonov<span className="text-[#0db39f]">.</span>
        </h2>
        <h2 className="text-white flex gap-3 pt-5 lg:text-[38px] lg:leading-[38px] md:text-[40px] md:leading-[50px] sm:text-[32px] sm:leading-[40px] text-[20px] leading-[34px] font-bold ">
          I am a{" "}
          <div className="text-[#0db39f]">
            <Typewriter
              options={{
                strings: ["Front-End Developer!"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
