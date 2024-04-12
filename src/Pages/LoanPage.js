import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ApplyLoan from "./ApplyLoan";
import ApplyPersonal from "./ApplyPersonal";
import ApplyContactDetails from "./ApplyContactDetails";
import ApplyWorkStatus from "./ApplyWorkStatus";
import ApplyNext from "./ApplyNext";

import loanDetails from "../assets/loanblack.png";
import personalInfo from "../assets/personalinfoblack.png";
import contact from "../assets/contactblack.png";
import workStatus from "../assets/workblack.png";
import nextOfKin from "../assets/familyblack.png";
import AcceptTerms from "../Components/AcceptTerms";

const LoanPage = () => {
  const [activeSection, setActiveSection] = useState(0);

  const [formData, setFormData] = useState({
    loanAmount: "",
    loanDuration: "",
    loanPurpose: "",
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

  const handleLoanFormChange = (data) => {
    setFormData({ ...formData, ...data });
  };

  const sections = [
    {
      id: 0,
      label: "Loan Details",
      icon: loanDetails,
      component: (
        <ApplyLoan formData={formData} onFormChange={handleLoanFormChange} />
      ),
    },
    {
      id: 1,
      label: "Personal Information",
      icon: personalInfo,
      component: (
        <ApplyPersonal
          formData={formData}
          onFormChange={handleLoanFormChange}
        />
      ),
    },
    {
      id: 2,
      label: "Contact Details",
      icon: contact,
      component: (
        <ApplyContactDetails
          formData={formData}
          onFormChange={handleLoanFormChange}
        />
      ),
    },
    {
      id: 3,
      label: "Work Status",
      icon: workStatus,
      component: (
        <ApplyWorkStatus
          formData={formData}
          onFormChange={handleLoanFormChange}
        />
      ),
    },
    {
      id: 4,
      label: "Next of Kin Information",
      icon: nextOfKin,
      component: (
        <ApplyNext formData={formData} onFormChange={handleLoanFormChange} />
      ),
    },
  ];

  const handleNext = () => {
    setActiveSection(activeSection + 1);
  };

  const handleBack = () => {
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
      loanAmount: "",
      loanDuration: "",
      loanPurpose: "",
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
                className={`flex items-center gap-4 cursor-pointer font-poppins text-sm border rounded-xl px-3 py-3 md:w-full ${
                  activeSection === section.id
                    ? "text-white px-3 py-3 border rounded-xl bg-buttonColor"
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
                className="bg-homeColor text-white border rounded-xl border-solid px-5 py-3 hover:bg-buttonColor"
              >
                Back
              </button>
            )}
            <div className="ml-auto">
              {activeSection !== sections.length - 1 && (
                <button
                  onClick={handleNext}
                  className="bg-buttonColor text-white border rounded-xl border-solid px-5 py-3 hover:bg-homeColor"
                >
                  Next
                </button>
              )}

              {activeSection === sections.length - 1 && (
                <button
                  onClick={handleSubmit}
                  className="bg-buttonColor text-white border rounded-xl border-solid px-5 py-3 hover:bg-homeColor uppercase"
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

export default LoanPage;
