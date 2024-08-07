import React from "react";
import checkmob from "../assets/checkmob.png";
import { Link } from "react-router-dom";

const Complete = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center lg:justify-center bg-white w-full h-screen lg:w-1/2 overflow-hidden">
        <div className="flex flex-col px-5 md:px-12 lg:px-16 py-6 md:py-16 lg:py-24 md:gap-16 lg:gap-12">
          {/* Content */}
          <div className="flex flex-col items-center justify-center gap-16 pt-12 md:pt-0 pb-16 md:pb-0">
            {/* Heading */}
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 w-full max-w-160">
              <div>
                <img
                  src={checkmob}
                  alt="checkmob"
                  className="w-24 h-24 lg:w-32 lg:h-32"
                />
              </div>
              <span className="font-gotham text-xl md:text-2xl lg:text-3xl text-homeColor">
                You have successfully submitted your Details.
              </span>
              <p className="text-mobileMenuColor text-base">
                Your information has been sent to Sentryvest Limited and you will be notified as soon as all details have been verified.
                <br />
                <br />
                If you have any questions or wish to speak to us directly, feel
                free to Contact Us.
              </p>
            </div>
            {/* Button */}
            <Link
              to="/"
              className="w-full md:flex md:flex-col md:items-end md:w-160"
            >
              <button className="flex items-center justify-center text-lg border-2 border-buttonColor text-white bg-buttonColor h-12 w-full md:w-54.75 hover:bg-homeColor">
                Back to homepage
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complete;
