import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Portfolio from "../components/home/Portfolio";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Portfolio />
      <div className=" absolute bottom-3 mt-[30px] right-3 text-[18px] text-[#333]   text-center">
        <p>&copy; Copyright 2024</p>
      </div>
    </div>
  );
};

export default Home;
