import React, { useState, useEffect } from "react";
import logo from "../assets/SentryVest.png";
import menu from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-10 lg:px-24 bg-white ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="flex items-center w-full justify-between">
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="w-48" />
            </Link>
          </div>
          <div className="flex items-center w-1/2 justify-between">
            <div className="hidden md:block font-DMsans">
              <Link
                to="/"
                className="text-lg font-normal text-homeColor mr-6 hover:text-buttonColor"
                onClick={() => scrollToSection("heroSection")}
              >
                Home
              </Link>
              <Link
                to="/"
                className="text-lg font-normal text-homeColor mr-6 hover:text-buttonColor"
                onClick={() => scrollToSection("servicesSection")}
              >
                Services
              </Link>
              <Link
                to="/"
                className="text-lg font-normal text-homeColor mr-6 hover:text-buttonColor"
                onClick={() => scrollToSection("workSection")}
              >
                How we work?
              </Link>
              <Link
                to="/"
                className="text-lg font-normal text-homeColor mr-6 hover:text-buttonColor"
                onClick={() => scrollToSection("aboutSection")}
              >
                About us
              </Link>
            </div>
            <div className="bg-buttonColor hidden md:block rounded-xl text-white border hover:bg-homeColor">
              <button
                className="text-base md:px-5 md:py-3"
                onClick={() => {
                  scrollToSection("footerSection");
                }}
              >
                Contact us
              </button>
            </div>
            <div className="ml-auto md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <img
                  src={isMenuOpen ? closeIcon : menu}
                  alt={isMenuOpen ? "Close" : "Menu"}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-40 bg-white md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full font-DMsans">
          <Link
            to="/"
            className="text-lg font-normal text-homeColor mr-6 hover:text-buttonColor"
            onClick={() => {
              scrollToSection("heroSection");
              setIsMenuOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-lg font-normal text-homeColor mb-6 hover:text-buttonColor"
            onClick={() => {
              scrollToSection("servicesSection");
              setIsMenuOpen(false);
            }}
          >
            Services
          </Link>
          <Link
            to="/"
            className="text-lg font-normal text-homeColor mb-6 hover:text-buttonColor"
            onClick={() => {
              scrollToSection("workSection");
              setIsMenuOpen(false);
            }}
          >
            How we work?
          </Link>
          <Link
            to="/"
            className="text-lg font-normal text-homeColor mb-6 hover:text-buttonColor"
            onClick={() => {
              scrollToSection("aboutSection");
              setIsMenuOpen(false);
            }}
          >
            About us
          </Link>
          <div className="bg-white text-homeColor rounded-xl border border-solid border-buttonColor mt-6 hover:bg-buttonColor hover:text-white">
            <button
              className="text-xl px-20 py-4"
              onClick={() => {
                scrollToSection("footerSection");
                setIsMenuOpen(false);
              }}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
