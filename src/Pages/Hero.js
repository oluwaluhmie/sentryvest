import React from "react";
import Slider from "../Components/slider";
import ImagesSlider from "../Components/ImagesSlider";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="heroSection"
      className="flex flex-col items-center overflow-hidden"
    >
      <div className="flex flex-col w-97.5 md:w-176 lg:w-300">
        <div className="flex flex-col lg:flex-row gap-8 py-16 lg:py-24 lg:mt-25 w-97.5 md:w-176 lg:w-300">
          <div className="flex flex-col items-start gap-8 w-full lg:w-1/2 h-100">
            <Slider />
            <div className="flex justify-center bg-white text-homeColor items-center border-2 border-buttonColor px-5 py-3 hover:bg-buttonColor hover:text-white rounded-xl">
              <button
                className="text-base"
                onClick={() => {
                  scrollToSection("servicesSection");
                }}
              >
                Get started
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <ImagesSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
