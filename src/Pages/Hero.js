import React from "react";
import hero from "../assets/hero.png";
import Slider from "../Components/slider";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      id="heroSection"
      className="flex flex-col justify-between items-center w-full h-screen mt-48 md:mt-24 md:p-20 lg:p-24 md:flex-row"
    >
      <div className="flex flex-col items-center gap-8 w-full md:items-start md:w-1/2">
        <Slider />
        <div className="flex justify-center bg-white text-homeColor items-center rounded-xl border-2 border-solid border-buttonColor px-5 py-3 md:ml-12 hover:bg-buttonColor hover:text-white">
          <Link to={"/apply"}>
            <button className="font-DMsans text-base font-medium">
              Get started
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full mt-8 md:w-fit">
        <img src={hero} alt="" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;
