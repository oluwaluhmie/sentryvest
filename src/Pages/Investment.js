import React, { useState } from "react";
import Investmentform from "./Investment/investmentform";
import Personalinfo from "./Investment/personalinfo";
import Nextkin from "./Investment/nextkin";
import invest from "../assets/investicon.svg";
import personal from "../assets/personalgreen.svg";
import nextkin from "../assets/guarantorgreen.svg";
import AcceptTerms from "../Components/AcceptTerms";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import investgraphic from "../assets/investgraphic.png";

const Investment = () => {
  const [activeSection, setActiveSection] = useState(0);

  const [formData, setFormData] = useState({
    amountRange: "",
    amount: "",
    investmentDuration: "",
    startDate: "",
    endDate: "",
    relocationCountry: "",
    receiverAddress: "",
    title: "",
    fullName: "",
    phoneNumber: "",
    email: "",
    passport: null,
    maritalStatus: "",
    homeAddress: "",
    lga: "",
    dob: "",
    bvn: "",
    stateOrigin: "",
    pob: "",
    occupation: "",
    dataPage: "",
    signature: null,
    ntitle: "",
    nfullName: "",
    nphoneNumber: "",
    nemail: "",
    noccupation: "",
    nrelationship: "",
    nsignature: null,
    acceptedTerms: false,
  });

  const handleInvestmentFormChange = (data) => {
    setFormData({ ...formData, ...data });
  };

  const sections = [
    {
      id: 0,
      label: "Investment Details",
      icon: invest,
      component: (
        <Investmentform
          formData={formData}
          onFormChange={handleInvestmentFormChange}
        />
      ),
    },
    {
      id: 1,
      label: "Personal Information",
      icon: personal,
      component: (
        <Personalinfo
          formData={formData}
          onFormChange={handleInvestmentFormChange}
        />
      ),
    },
    {
      id: 2,
      label: "Next of Kin Information",
      icon: nextkin,
      component: (
        <Nextkin
          formData={formData}
          onFormChange={handleInvestmentFormChange}
        />
      ),
    },
  ];

  const handleNext = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    setActiveSection(activeSection + 1);
  };

  const handleBack = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    setActiveSection(activeSection - 1);
  };

  const handleCheckboxChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      acceptedTerms: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form Data:", formData);

    // Reset all form fields to initial values except acceptedTerms
    setFormData({
      amountRange: "",
      amount: "",
      investmentDuration: "",
      startDate: "",
      endDate: "",
      relocationCountry: "",
      receiverAddress: "",
      title: "",
      fullName: "",
      phoneNumber: "",
      email: "",
      passport: null,
      maritalStatus: "",
      homeAddress: "",
      lga: "",
      dob: "",
      bvn: "",
      stateOrigin: "",
      pob: "",
      state: "",
      occupation: "",
      dataPage: "",
      signature: null,
      ntitle: "",
      nfullName: "",
      nphoneNumber: "",
      nemail: "",
      noccupation: "",
      nrelationship: "",
      nsignature: null,
      acceptedTerms: formData.acceptedTerms, // Keep the acceptedTerms value
    });

    // Show alert
    alert("Form submitted successfully!");

    // Set active section back to the first section
    setActiveSection(0);
  };

  return (
    <div className="flex flex-col items-center w-100 md:w-200 lg:w-full">
      <div className="flex flex-row md:justify-between px-6 md:px-12 lg:px-48 py-8 md:py-12 lg:py-15 md:h-44 lg:h-56 w-full md:w-200 lg:w-400 overflow-hidden relative">
        <span className="text-homeColor text-3xl lg:text-5xl font-bold w-67.5 md:w-70 lg:w-120 md:items-start">
          Grow Your Wealth with Confidence
        </span>
        <div className="hidden md:flex overflow-visible absolute md:right-12 md:top-8 lg:right-52 lg:top-12">
          <img
            src={investgraphic}
            alt="investgraphic"
            className="h-40 w-64 lg:h-52.57 lg:w-93.9825 max-h-none max-w-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 md:gap-12 border-t border-homeColor/10 px-6 md:px-12 lg:px-48 py-8 md:py-12 lg:py-15 md:w-200 lg:w-400">
        <span className="text-sm lg:text-base text-homeColor w-88 md:w-90 lg:w-120">
          Please fill our application form with your correct details
        </span>
        <div className="flex h-fit lg:w-300">
          {/* Left side */}
          <div className="flex flex-col py-3 gap-2.25">
            {sections.map((section) => (
              <div
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex flex-row gap-3 px-4 py-3 w-12.5 md:w-56 lg:w-80 cursor-pointer ${
                  activeSection === section.id
                    ? "text-buttonColor border-l rounded-l-xl font-bold border-t border-b border-homeColor/15 bg-buttonColor/10"
                    : ""
                }`}
              >
                <img src={section.icon} alt={section.label} />
                <p className="hidden md:block md:text-sm">{section.label}</p>
              </div>
            ))}
          </div>
          {/* Right side */}
          <div className="flex flex-col gap-6 md:gap-10 px-4 md:px-6 md:py-8 pt-1.5 pb-6 w-full md:w-120 lg:w-220 border border-homeColor/15 rounded-xl shadow-form">
            {sections.map(
              (section) =>
                activeSection === section.id && (
                  <div key={section.id}>{section.component}</div>
                )
            )}
            {activeSection === sections.length - 1 && (
              <AcceptTerms
                formData={formData}
                checked={formData.acceptedTerms}
                onChange={handleCheckboxChange} // Pass the handleCheckboxChange function
              />
            )}
            <div className="flex gap-3 w-full lg:w-78">
              <button
                onClick={handleBack}
                disabled={activeSection === 0}
                className={`flex gap-1.5 items-center justify-center bg-white text-buttonColor border border-buttonColor rounded-xl px-5 py-2.5 shadow-button w-1/2 ${
                  activeSection === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <img src={left} alt="left" />
                Back
              </button>
              <div className="w-1/2 flex justify-end">
                {activeSection !== sections.length - 1 && (
                  <button
                    onClick={handleNext}
                    className="flex gap-1.5 items-center justify-center bg-buttonColor text-white border border-homeColor/15 rounded-xl px-5 py-2.5 w-full shadow-button"
                  >
                    Next
                    <img src={right} alt="right" />
                  </button>
                )}

                {activeSection === sections.length - 1 && (
                  <button
                    onClick={handleSubmit}
                    className="flex gap-1.5 items-center bg-buttonColor text-white border border-homeColor/15 rounded-xl px-5 py-2.5 w-full justify-center shadow-button"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
