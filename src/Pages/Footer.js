import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/SentryVestWhite.png";
import facebook from "../assets/facebook.svg";
import phone from "../assets/phone.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <footer
      id="footerSection"
      className="flex flex-col items-center bg-homeColor text-white"
    >
      <div className="flex flex-col w-97.5 md:w-176 lg:w-300 overflow-hidden">
        <div className="flex flex-col py-12 gap-12 md:gap-12 lg:gap-20">
          <div className="flex flex-col gap-6 md:gap-12 lg:flex-row lg:gap-12 w-full">
            {/* Logo */}
            <div className="flex flex-col gap-6 lg:w-1/2">
              <Link to="/">
                <img src={logo} alt="SentryVest" className="w-48" />
              </Link>
              <span className="text-base md:w-128">
                Our mission is to democratize access to wealth-building
                opportunities by providing tailored financial products,
                education, and support to underserved communities.
              </span>
            </div>
            {/* Services */}
            <div className="flex flex-col items-center gap-10 md:flex-row md:gap-5 lg:w-1/2">
              <div className="flex flex-row w-full gap-10">
                <div className="flex flex-col w-1/2 gap-2 md:gap-3 lg:gap-6 lg:w-52">
                  <span className="text-sm md:text-base font-gotham">
                    Our Services
                  </span>
                  <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
                    <p className="hover:text-textColor text-sm md:text-base">
                      Personal Loan
                    </p>
                    <p className="hover:text-textColor text-sm md:text-base">
                      Business Loan
                    </p>
                    <p className="hover:text-textColor text-sm md:text-base">
                      Investments
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-1/2 gap-2 md:gap-3 lg:gap-6 lg:w-52">
                  <span className="text-sm md:text-base font-gotham">
                    Contact Us
                  </span>
                  <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
                    <p className="hover:text-textColor text-sm md:text-base">
                      +234 707 038 6014
                    </p>
                    <p className="hover:text-textColor text-sm md:text-base">
                      hello@sentryvest.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="opacity-20" />
          <div className="flex flex-col gap-6 text-sm md:text-base">
            <div className="flex gap-4">
              <Link to="https://www.facebook.com/sentryvest">
                <img src={facebook} alt="Facebook" />
              </Link>
              <Link to="https://wa.me/2347067887356">
                <img src={phone} alt="Phone" />
              </Link>
              <Link to="https://www.instagram.com/sentryvest">
                <img src={instagram} alt="Instagram" />
              </Link>
              <Link to="https://www.linkedin.com/company/sentryvestlimited">
                <img src={linkedin} alt="LinkedIn" />
              </Link>
            </div>
            <span>
              Afin-Iyanu close off Springfield Hotel Ologuneru Ibadan.
            </span>
            <span>© 2024 Sentryvest Limited.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
