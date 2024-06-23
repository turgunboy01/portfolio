import React, { useContext } from "react";
import Home from "./container/Home";
import Sidebar from "./components/sidebar/Sidebar";
import { ToggleMenuContext } from "./context/useMenuContext";
import { SlMenu } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const App = () => {
  const { menu, setMenu } = useContext(ToggleMenuContext);

  return (
    <div className="flex relative">
      <div
        className={` lg:w-[350px] ${
          menu ? "w-[100%] opacity-100" : "w-0 opacity-0 lg:opacity-100"
        } fixed z-40  duration-300 overflow-hidden h-[100vh] bg-[#030c13]`}
      >
        <Sidebar />
      </div>
      <div className="  lg:ml-[350px]  h-[100%] w-full">
        <Home />
      </div>
      <div
        onClick={() => setMenu(!menu)}
        className="fixed lg:hidden right-9 z-50 top-9 w-[40px] h-[40px] bg-[#0db39f] text-[#fff] flex justify-center items-center rounded-full"
      >
        {menu ? <MdClose size={20} /> : <GiHamburgerMenu size={20} />}
      </div>
    </div>
  );
};

export default App;
