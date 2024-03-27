import React from "react";
import personalLoan from "../assets/personaloan.png";
import businessLoan from "../assets/businessloan.png";
import investment from "../assets/investment.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div
      id="servicesSection"
      className="px-4 bg-servicesBg w-full mt-24 md:px-24"
    >
      <div className="flex flex-col justify-center items-center gap-10 pt-6 pb-12 md:pt-9 md:pb-24">
        <span className="font-bold text-2xl text-center text-homeColor md:text-4xl">
          Our Services
        </span>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-3xl border-2 bg-opacity-20 bg-gray-300 shadow-sm gap-4 px-4 py-6 md:px-5 md:py-7">
            <img src={personalLoan} alt="" className="h-48" />
            <span className="text-xl text-homeColor font-semibold md:text-3xl">
              Personal Loan
            </span>
            <p className="text-base font-poppins font-normal text-center text-homeColor md:text-base md:w-80">
              Personal loans provide borrowers with flexibility in how they{" "}
              <br />
              use the funds.
            </p>
            <div className="flex justify-center items-center text-homeColor rounded-xl border-2 border-solid border-buttonColor gap-2 py-3 px-5 md:py-3 md:px-5 hover:bg-buttonColor hover:text-white">
              <Link to={"/apply"}>
                <button className="font-DMsans text-base font-medium md:text-lg">
                  Apply now
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center rounded-3xl border-2 bg-opacity-20 bg-gray-300 shadow-sm gap-4 px-4 py-6 md:px-5 md:py-7">
            <img src={businessLoan} alt="" className="h-48" />
            <span className="text-xl text-homeColor font-semibold md:text-3xl">
              Business Loan
            </span>
            <p className="text-base font-poppins font-normal text-center text-homeColor md:text-base md:w-80">
              Business Loan Services provide financial assistance to businesses
              for various purposes.
            </p>
            <div className="flex justify-center items-center text-homeColor rounded-xl border-2 border-solid border-buttonColor gap-2 py-3 px-5 md:py-3 md:px-5 hover:bg-buttonColor hover:text-white">
              <Link to={"/apply"}>
                <button className="font-DMsans text-base font-medium md:text-lg">
                  Apply now
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center rounded-3xl border-2 bg-opacity-20 bg-gray-300 shadow-sm gap-4 px-4 py-6 md:px-5 md:py-7">
            <img src={investment} alt="" className="h-48" />
            <span className="text-xl text-homeColor font-semibold md:text-3xl">
              Investment
            </span>
            <p className="text-base font-poppins font-normal text-center text-homeColor md:text-base md:w-80">
              We have an array of investment packages that suits your <br />
              lifestyle.
            </p>
            <div className="flex justify-center items-center text-homeColor rounded-xl border-2 border-solid border-buttonColor gap-2 py-3 px-5 md:py-3 md:px-5 hover:bg-buttonColor hover:text-white">
              <Link to={"/apply"}>
                <button className="font-DMsans text-base font-medium md:text-lg">
                  Apply now
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <span className="flex justify-center items-center rounded-full border-0 border-solid bg-buttonColor w-full md:w-52 px-4 md:px- py-2 md:py-3 gap-2 md:gap-3 hover:bg-homeColor">
          <button className="text-white font-DMsans text-base md:text-lg font-medium">
            View more
          </button>
        </span> */}
      </div>
    </div>
  );
};

export default Services;
