import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Investmentform from "./Investment/investmentform";
import Personalinfo from "./Investment/personalinfo";
import Nextkin from "./Investment/nextkin";
import AcceptTerms from "../Components/AcceptTerms";

const Investment = () => {
  const [activeSection, setActiveSection] = useState(0);

  const [formData, setFormData] = useState({
    investmentRange: "",
    amount: "",
    investmentDuration: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    maritalStatus: "",
    dob: "",
    soo: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    lgt: "",
    employmentStatus: "",
    companyName: "",
    monthlyIncome: "",
    fullName: "",
    nPhoneNumber: "",
    nEmail: "",
    nOccupation: "",
    nRelationship: "",
    acceptedTerms: false,
  });

  const handleInvestmentFormChange = (data) => {
    setFormData({ ...formData, ...data });
  };

  const sections = [
    {
      id: 0,
      label: "Investment Details",
      // icon: investmenticon,
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
      // icon: personalInfo,
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
      // icon: nextOfKin,
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
      investmentRange: "",
      amount: "",
      investmentDuration: "",
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      maritalStatus: "",
      dob: "",
      soo: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      state: "",
      lgt: "",
      employmentStatus: "",
      companyName: "",
      monthlyIncome: "",
      fullName: "",
      nPhoneNumber: "",
      nEmail: "",
      nOccupation: "",
      nRelationship: "",
      acceptedTerms: formData.acceptedTerms, // Keep the acceptedTerms value
    });

    // Show alert
    alert("Form submitted successfully!");

    // Set active section back to the first section
    setActiveSection(0);
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="px-4 pt-20 w-1/4 text-homeColor md:px-10 md:py-12 md:pt-24">
          <div className="flex flex-col items-start gap-7 mt-28 mb-7 md:mt-8">
            {sections.map((section) => (
              <div
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-4 cursor-pointer font-poppins text-sm border px-3 py-3 md:w-full ${
                  activeSection === section.id
                    ? "text-white px-3 py-3 border bg-buttonColor"
                    : ""
                }`}
              >
                <img
                  src={section.icon}
                  alt={section.label}
                  className="w-10 h-8"
                />
                <p className="hidden md:block md:text-base">{section.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 py-6 pt-20 w-3/4 md:px-10">
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
          <div className="flex justify-between mt-24">
            {activeSection !== 0 && (
              <button
                onClick={handleBack}
                className="bg-homeColor text-white border border-solid px-5 py-3 hover:bg-buttonColor"
              >
                Back
              </button>
            )}
            <div className="ml-auto">
              {activeSection !== sections.length - 1 && (
                <button
                  onClick={handleNext}
                  className="bg-buttonColor text-white border border-solid px-5 py-3 hover:bg-homeColor"
                >
                  Next
                </button>
              )}

              {activeSection === sections.length - 1 && (
                <button
                  onClick={handleSubmit}
                  className="bg-buttonColor text-white border border-solid px-5 py-3 hover:bg-homeColor uppercase"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Investment;
