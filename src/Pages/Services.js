import React from "react";
import personalLoan from "../assets/personaloan.png";
import businessLoan from "../assets/businessloan.png";
import investment from "../assets/investment.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div
      id="servicesSection"
      className="flex flex-col items-center bg-servicesBg overflow-hidden"
    >
      <div className="flex flex-col w-97.5 md:w-176 lg:w-300 py-16 lg:py-32 gap-8 md:gap-12 lg:gap-16">
        <span className="text-2xl md:text-3xl lg:text-4xl text-homeColor font-gotham">
          Our Services
        </span>
        <div className="grid grid-cols-1 gap-5 lg:gap-6 lg:grid-cols-3">
          {/* Personal Loan */}
          <div className="flex flex-col md:flex-row lg:flex-col md:w-176 lg:w-96 rounded-3xl border-2 bg-opacity-20 bg-gray-300 shadow-md">
            <img src={personalLoan} alt="" className="md:w-88 lg:w-96" />
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-5 px-4 md:px-6 lg:px-6 pt-5 md:pt-6 lg:pt-6 pb-6 md:pb-6 lg:pb-9">
              <div className="flex flex-col gap-1 w-87.5 md:w-76 lg:w-84">
                <span className="text-xl lg:text-2xl text-homeColor font-gotham">
                  Personal Loan
                </span>
                <p className="text-base text-homeColor font-poppins h-18">
                  Personal loans provide borrowers with flexibility in how they
                  use the funds.
                </p>
              </div>
              <Link to="/applyloan">
                <button className="text-homeColor items-center border-2 border-homeColor border-opacity-30 px-5 py-3 hover:bg-buttonColor hover:text-white rounded-xl">
                  Apply now
                </button>
              </Link>
            </div>
          </div>
          {/* Business Loan */}
          <div className="flex flex-col md:flex-row lg:flex-col md:w-176 lg:w-96 rounded-3xl border-2 bg-opacity-20 bg-gray-300 shadow-md">
            <img src={businessLoan} alt="" className="md:w-88 lg:w-96" />
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-5 px-4 md:px-6 lg:px-6 pt-5 md:pt-6 lg:pt-6 pb-6 md:pb-6 lg:pb-9">
              <div className="flex flex-col gap-1 w-87.5 md:w-76 lg:w-84">
                <span className="text-xl lg:text-2xl text-homeColor font-gotham">
                  Business Loan
                </span>
                <p className="text-base text-homeColor font-poppins h-18">
                  Business Loan Services provide financial assistance to
                  businesses for various purposes.
                </p>
              </div>
              <Link to="/applyloan">
                <button className="text-homeColor items-center border-2 border-homeColor border-opacity-30 px-5 py-3 hover:bg-buttonColor hover:text-white rounded-xl">
                  Apply now
                </button>
              </Link>
            </div>
          </div>
          {/* Investment */}
          <div className="flex flex-col md:flex-row lg:flex-col md:w-176 lg:w-96 rounded-3xl border-2 bg-opacity-20 bg-gray-300 shadow-md">
            <img src={investment} alt="" className="md:w-88 lg:w-96" />
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-5 px-4 md:px-6 lg:px-6 pt-5 md:pt-6 lg:pt-6 pb-6 md:pb-6 lg:pb-9">
              <div className="flex flex-col gap-1 w-87.5 md:w-76 lg:w-84">
                <span className="text-xl lg:text-2xl text-homeColor font-gotham">
                  Investment
                </span>
                <p className="text-base text-homeColor font-poppins h-18">
                  We have an array of investment packages that suits your
                  lifestyle.
                </p>
              </div>
              <Link to="/applyinvestment">
                <button className="text-homeColor items-center border-2 border-homeColor border-opacity-30 px-5 py-3 hover:bg-buttonColor hover:text-white rounded-xl">
                  Apply now
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <span className="flex justify-center items-center border-0 border-solid bg-buttonColor w-full md:w-52 px-4 md:px- py-2 md:py-3 gap-2 md:gap-3 hover:bg-homeColor">
          <button className="text-white text-base md:text-lg font-medium">
            View more
          </button>
        </span> */}
      </div>
    </div>
  );
};

export default Services;
