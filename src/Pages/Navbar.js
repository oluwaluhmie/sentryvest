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
        className={`fixed top-0 left-0 right-0 z-50 flex flex-col justify-between items-center px-4 md:px-12 lg:px-32 bg-white ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        {/* Web Menus */}
        <div className="flex items-center justify-between h-18 md:h-20 lg:h-25 lg:pt-3 w-full lg:min-w-300">
          <div className="flex items-center">
            {/* Sentryvest Logo */}
            <div className="lg:pr-12">
              <Link to="/">
                <img src={logo} alt="Logo" className="w-32 md:w-36 lg:w-44" />
              </Link>
            </div>
            {/* Menus */}
            <div className="hidden lg:flex lg:justify-between lg:items-center lg:gap-5 lg:left-0 text-base text-homeColor font-poppins">
              <Link
                to="/"
                className="lg:p-2 hover:text-buttonColor"
                onClick={() => scrollToSection("heroSection")}
              >
                Home
              </Link>
              <Link
                to="/"
                className="lg:p-2 hover:text-buttonColor"
                onClick={() => scrollToSection("servicesSection")}
              >
                Services
              </Link>
              <Link
                to="/"
                className="lg:p-2 hover:text-buttonColor"
                onClick={() => scrollToSection("workSection")}
              >
                How we work?
              </Link>
              <Link
                to="/"
                className="lg:p-2 hover:text-buttonColor"
                onClick={() => scrollToSection("aboutSection")}
              >
                About us
              </Link>
            </div>
          </div>
          {/* Contact us Button */}
          <div className="hidden lg:block bg-white text-homeColor border border-buttonColor hover:bg-buttonColor hover:text-white rounded-xl">
            <button
              className="text-base font-raleway font-semibold md:px-5 md:py-3"
              onClick={() => {
                scrollToSection("footerSection");
              }}
            >
              Contact us
            </button>
          </div>
          <div className="ml-auto lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img
                src={isMenuOpen ? closeIcon : menu}
                alt={isMenuOpen ? "Close" : "Menu"}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menus */}
        <div
          className={`relative flex flex-col w-full inset-0 z-40 bg-white lg:hidden overflow-hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col mt-6 h-screen w-full font-DMsans">
            <div className="flex flex-col h-full">
              <div className="px-2 py-4">
                <Link
                  to="/"
                  className="text-base text-homeColor hover:text-buttonColor"
                  onClick={() => {
                    scrollToSection("heroSection");
                    setIsMenuOpen(false);
                  }}
                >
                  Home
                </Link>
              </div>
              <div className="px-2 py-4">
                <Link
                  to="/"
                  className="text-base text-homeColor hover:text-buttonColor"
                  onClick={() => {
                    scrollToSection("servicesSection");
                    setIsMenuOpen(false);
                  }}
                >
                  Services
                </Link>
              </div>
              <div className="px-2 py-4">
                <Link
                  to="/"
                  className="text-base text-homeColor hover:text-buttonColor"
                  onClick={() => {
                    scrollToSection("workSection");
                    setIsMenuOpen(false);
                  }}
                >
                  How we work?
                </Link>
              </div>
              <div className="px-2 py-4">
                <Link
                  to="/"
                  className="text-base text-homeColor hover:text-buttonColor"
                  onClick={() => {
                    scrollToSection("aboutSection");
                    setIsMenuOpen(false);
                  }}
                >
                  About us
                </Link>
              </div>
              <div className="pt-12">
                <button
                  className="text-lg bg-buttonColor text-white border-2 border-buttonColor hover:text-homeColor w-full py-4"
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
