import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { logo } from "../assets/icons";

const Menu = () => (
  <>
    <p className="text-nav">
      <a href="#personal">Personal</a>
    </p>
    <p className="text-nav">
      <a href="#business">Business</a>
    </p>
    <p className="text-nav">
      <a href="#developer">Developer</a>
    </p>
    <p className="text-nav">
      <a href="#help">Help</a>
    </p>
  </>
);

const Nav = () => {
  const [toogleMenu, setToggleMenu] = useState(false);
  return (
    <header className="flex bg-white justify-between items-center w-full py-5 padding-x">
      <div className="flex-1 flex justify-start items-center">
        <div className="mr-8">
          <img className="w-12 h-10" src={logo} alt="logo" />
        </div>
        <div className="md:flex hidden items-center  flex-row">
          <Menu />
        </div>
      </div>
      <div className=" md:flex hidden justify-end  items-center gap-2">
        <button className="px-6 py-2 font-medium text-base leading-6 rounded-full outline-none cursor-pointer border-2 border-[#08246c] text-[#08246c]">
          Log In
        </button>
        <button
          className="px-6 py-2 font-medium text-base leading-6 rounded-full outline-none cursor-pointer bg-[#08246c] text-white"
          type="button"
        >
          Sign Up
        </button>
      </div>
      <div className="ml-4 md:hidden relative flex">
        {toogleMenu ? (
          <RiCloseLine
            color="#08246c"
            size={27}
            className="cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#08246c"
            size={27}
            className="cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toogleMenu && (
          <div className="absolute bg-white top-20 right-0 mt-2 flex flex-col justify-end items-end text-right p-5 rounded-md shadow-md min-w-52 transform scale-110 transition-transform duration-300 ease-in-out">
            <div className="md:hidden flex flex-col ">
              <Menu />

              <div className="md:hidden flex flex-col gap-3 px-5 mt-2 ">
                <button className="btn border-2 border-[#08246c] text-[#08246c]  px-4 py-1 font-medium text-sm leading-2 rounded-md outline-none cursor-pointer">
                  Log In
                </button>
                <button
                  className="btn bg-[#08246c] text-white px-4 py-1 font-medium text-sm leading-2 rounded-md outline-none cursor-pointer"
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
