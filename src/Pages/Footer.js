import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/SentryVestWhite.png";
import facebook from "../assets/facebook.svg";
import phone from "../assets/phone.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import call from "../assets/call.png";
import mail from "../assets/mail.png";
import location from "../assets/location.png";

const Footer = () => {
  return (
    <footer className="bg-homeColor text-white">
      <div className="container mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-start">
        {/* Left Section */}
        <div className="w-full md:px-14 md:w-1/2">
          <img src={logo} alt="SentryVest" className="w-48 md:w-26" />
          <p className="mt-4 text-sm md:text-sm md:w-96">
            Our mission is to democratize access to wealth-building
            opportunities by providing tailored financial products, education,
            and support to underserved communities.
          </p>
          <div className="flex mt-4 gap-4">
            <Link to="https://www.facebook.com/sentryvest">
              <img src={facebook} alt="Facebook" />
            </Link>
            <Link to="https://wa.me/2347067887356">
              <img src={phone} alt="Phone" />
            </Link>
            <Link to="https://www.instagram.com/sentryvest">
              <img src={instagram} alt="Instagram" />
            </Link>
            <Link to="https://www.linkedin.com/sentryvestlimited">
              <img src={linkedin} alt="LinkedIn" />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2 text-sm">
              <p className="font-semibold">OUR SERVICES</p>
              <p>Personal loan</p>
              <p>Business loan</p>
              <p>Investment</p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <p className="font-semibold">CONTACT US</p>
              <div className="flex items-center gap-2">
                <img src={call} alt="Call" />
                <p>+234 706 788 7356</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={mail} alt="Email" />
                <p>social@realifesentry.com</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={location} alt="Location" />
                <p>
                  Afin-Iyanu close off Springfield <br />
                  Hotel Ologuneru Ibadan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
