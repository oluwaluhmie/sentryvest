import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InputWithLabel from "../Components/inputWithLabel";
import InputWithDropdown from "../Components/InputWithDropdown";
import AcceptTerms from "../Components/AcceptTerms";

const Apply = () => {
  const loanDuration = [
    { value: "option1", label: "1 Month" },
    { value: "option2", label: "2 Months" },
    { value: "option3", label: "3 Months" },
    { value: "option4", label: "4 Months" },
    { value: "option5", label: "5 Months" },
    { value: "option6", label: "6 Months" },
    { value: "option7", label: "7 Months" },
    { value: "option8", label: "8 Months" },
    { value: "option9", label: "9 Months" },
    { value: "option10", label: "10 Months" },
    { value: "option11", label: "11 Months" },
    { value: "option12", label: "12 Months" },
  ];

  const loanPurpose = [
    { value: "option1", label: "Rental" },
    { value: "option2", label: "Travel" },
    { value: "option3", label: "Car" },
    { value: "option4", label: "Business" },
    { value: "option5", label: "Investment" },
    { value: "option6", label: "Party" },
    { value: "option7", label: "Item Purchase" },
    { value: "option8", label: "Emergency" },
    { value: "option9", label: "Project(s)" },
    { value: "option10", label: "Other" },
  ];

  const genderOptions = [
    { value: "option1", label: "Male" },
    { value: "option2", label: "Female" },
  ];

  const maritalStatus = [
    { value: "option1", label: "Single" },
    { value: "option1", label: "Married" },
    { value: "option1", label: "Divorced" },
    { value: "option1", label: "In a Relationship" },
  ];

  const employmentStatus = [
    { value: "option1", label: "Employed" },
    { value: "option1", label: "Self Employed" },
    { value: "option1", label: "Unemployed" },
    { value: "option1", label: "Student" },
    { value: "option1", label: "Pensioner" },
    { value: "option1", label: "Retired" },
  ];

  const monthlyIncome = [
    { value: "option1", label: "N50,000 - N250,000" },
    { value: "option1", label: "N251,000 - N350,000" },
    { value: "option1", label: "N351,000 - N500,000" },
    { value: "option1", label: "N501,000 & above" },
  ];

  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleTermsChange = (isChecked) => {
    setTermsAccepted(isChecked);
  };


  return (
    <div>
      <Navbar />
      <div className="px-4 py-6 pt-20 text-center md:px-10 md:py-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-4xl">
          Fill out an application form with your correct details
        </h1>
      </div>
      <Formik
        initialValues={{
          loanAmount: "",
          loanDuration: "",
          purpose: "",
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
          companyStatus: "",
          monthlyIncome: "",
          fullName: "",
          nPhoneNumber: "",
          nEmail: "",
          nOccupation: "",
          nRelationship: "",
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          loanAmount: Yup.number()
            .typeError("Loan amount must be a number")
            .required("Loan amount is required")
            .positive("Loan amount must be a positive number"),
          loanDuration: Yup.string().required("Please select an option"),
          purpose: Yup.string().required("Please select an option"),
          firstName: Yup.string().required("First name is required"),
          middleName: Yup.string(),
          lastName: Yup.string().required("last name is required"),
          gender: Yup.string().required("Please select an option"),
          maritalStatus: Yup.string().required("Please select an option"),
          dob: Yup.date()
            .required("Date of birth is required")
            .max(new Date(), "Date of birth cannot be in the future")
            .test(
              "minimumAge",
              "You must be at least 22 years old",
              function (value) {
                const today = new Date();
                const minimumDate = new Date(
                  today.getFullYear() - 22,
                  today.getMonth(),
                  today.getDate()
                );
                return value <= minimumDate;
              }
            ),
          soo: Yup.string().required("State of Origin is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          phoneNumber: Yup.string()
            .matches(/^\d{11}$/, "Phone number must be exactly 11 digits")
            .required("Phone number is required"),
          address: Yup.string().required("Address is required"),
          city: Yup.string().required("City is required"),
          state: Yup.string().required("State is required"),
          lgt: Yup.string().required("State is required"),
          employmentStatus: Yup.string().required("Please select an option"),
          companyStatus: Yup.string().required("Company Status is required"),
          monthlyIncome: Yup.string().required("Please select an option"),
          fullName: Yup.string().required("Next of kin Full name is required"),
          nPhoneNumber: Yup.string()
            .matches(/^\d{11}$/, "Phone number must be exactly 11 digits")
            .required("Next of kin Phone number is required"),
          nEmail: Yup.string()
            .email("Invalid email address")
            .required("Next of kin Email is required"),
          nOccupation: Yup.string().required(
            "Next of kin Occupation is required"
          ),
          nRelationship: Yup.string().required(
            "Relationship with next of kin is required"
          ),
          acceptTerms: Yup.boolean().oneOf(
            [true],
            "You must accept the terms and conditions"
          ),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          console.log(values); // Handle form submission here
          resetForm(); // clear form after submission
        }}
      >
        {(
          { values, errors, handleChange, setFieldValue, isSubmitting } // Receive handleChange from Formik context
        ) => (
          <Form className="flex flex-col justify-end gap-4 px-4 py-4 md:py-8 md:px-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <InputWithLabel
                labelName="Loan Amount"
                inputType="number"
                inputName="loanAmount"
                placeholder="Loan Amount"
                inputValue={values.loanAmount}
                inputOnChange={handleChange}
                inputError={errors.loanAmount}
              />
              <InputWithDropdown
                labelName="Loan Duration"
                options={loanDuration}
                selectedValue={values.loanDuration}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "loanDuration",
                      value: event.target.value,
                    },
                  });
                }}
                inputError={errors.loanDuration}
              />
              <InputWithDropdown
                labelName="Purpose"
                options={loanPurpose}
                selectedValue={values.purpose}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "purpose",
                      value: event.target.value,
                    },
                  });
                }}
                inputError={errors.purpose}
              />
            </div>
            <span className="font-bold text-lg text-homeColor">
              Personal Information
            </span>
            <hr />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <InputWithLabel
                labelName="First name"
                inputType="text"
                inputName="firstName"
                placeholder="First Name"
                inputValue={values.firstName}
                inputOnChange={handleChange}
                inputError={errors.firstName}
              />
              <InputWithLabel
                labelName="Middle name"
                inputType="text"
                inputName="middleName"
                placeholder="Middle Name"
                inputValue={values.middleName}
                inputOnChange={handleChange}
                inputError={errors.middleName}
              />
              <InputWithLabel
                labelName="Last name"
                inputType="text"
                inputName="lastName"
                placeholder="Last Name"
                inputValue={values.lastName}
                inputOnChange={handleChange}
                inputError={errors.lastName}
              />
              <InputWithDropdown
                labelName="Gender"
                options={genderOptions}
                selectedValue={values.gender}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "gender",
                      value: event.target.value,
                    },
                  });
                }}
                inputError={errors.gender}
              />
              <InputWithDropdown
                labelName="Marital Status"
                options={maritalStatus}
                selectedValue={values.maritalStatus}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "maritalStatus",
                      value: event.target.value,
                    },
                  });
                }}
                inputError={errors.maritalStatus}
              />
              <InputWithLabel
                labelName="Date of birth"
                inputType="date"
                inputName="dob"
                inputValue={values.dob}
                inputOnChange={handleChange}
                inputError={errors.dob}
              />
              <InputWithLabel
                labelName="State of Origin"
                inputType="text"
                inputName="soo"
                placeholder="State of Origin"
                inputValue={values.soo}
                inputOnChange={handleChange}
                inputError={errors.soo}
              />
            </div>
            <span className="font-bold text-lg text-homeColor">
              Contact Details
            </span>
            <hr />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <InputWithLabel
                labelName="Phone Number"
                inputType="text"
                inputName="phoneNumber"
                placeholder="Phone Number"
                inputValue={values.phoneNumber}
                inputOnChange={handleChange}
                inputError={errors.phoneNumber}
              />
              <InputWithLabel
                labelName="Email"
                inputType="email"
                inputName="email"
                placeholder="Email Address"
                inputValue={values.email}
                inputOnChange={handleChange}
                inputError={errors.email}
              />
              <InputWithLabel
                labelName="Address"
                inputType="text"
                inputName="address"
                placeholder="Address"
                inputValue={values.address}
                inputOnChange={handleChange}
                inputError={errors.address}
              />
              <InputWithLabel
                labelName="City"
                inputType="text"
                inputName="city"
                placeholder="City"
                inputValue={values.city}
                inputOnChange={handleChange}
                inputError={errors.city}
              />
              <InputWithLabel
                labelName="State"
                inputType="text"
                inputName="state"
                placeholder="State"
                inputValue={values.state}
                inputOnChange={handleChange}
                inputError={errors.state}
              />
              <InputWithLabel
                labelName="Local Government"
                inputType="text"
                inputName="lgt"
                placeholder="Local Government"
                inputValue={values.lgt}
                inputOnChange={handleChange}
                inputError={errors.lgt}
              />
            </div>
            <span className="font-bold text-lg text-homeColor">
              Work Status
            </span>
            <hr />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <InputWithDropdown
                labelName="Employment Status"
                options={employmentStatus}
                selectedValue={values.employmentStatus}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "employmentStatus",
                      value: event.target.value,
                    },
                  });
                }}
                inputError={errors.employmentStatus}
              />
              <InputWithLabel
                labelName="Company Status"
                inputType="text"
                inputName="companyStatus"
                placeholder="Company Status"
                inputValue={values.companyStatus}
                inputOnChange={handleChange}
                inputError={errors.companyStatus}
              />
              <InputWithDropdown
                labelName="Monthly Income"
                options={monthlyIncome}
                selectedValue={values.monthlyIncome}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "monthlyIncome",
                      value: event.target.value,
                    },
                  });
                }}
                inputError={errors.monthlyIncome}
              />
            </div>
            <span className="font-bold text-lg text-homeColor">
              Next of Kin Information
            </span>
            <hr />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <InputWithLabel
                labelName="Full name"
                inputType="text"
                inputName="fullName"
                placeholder="Full Name"
                inputValue={values.fullName}
                inputOnChange={handleChange}
                inputError={errors.fullName}
              />
              <InputWithLabel
                labelName="Phone Number"
                inputType="text"
                inputName="nPhoneNumber"
                placeholder="Phone Number"
                inputValue={values.nPhoneNumber}
                inputOnChange={handleChange}
                inputError={errors.nPhoneNumber}
              />
              <InputWithLabel
                labelName="Email"
                inputType="email"
                inputName="nEmail"
                placeholder="Email Address"
                inputValue={values.nEmail}
                inputOnChange={handleChange}
                inputError={errors.nEmail}
              />
              <InputWithLabel
                labelName="Occupation"
                inputType="text"
                inputName="nOccupation"
                placeholder="Occupation"
                inputValue={values.nOccupation}
                inputOnChange={handleChange}
                inputError={errors.nOccupation}
              />
              <InputWithLabel
                labelName="Relationship"
                inputType="text"
                inputName="nRelationship"
                placeholder="Relationship"
                inputValue={values.nRelationship}
                inputOnChange={handleChange}
                inputError={errors.nRelationship}
              />
            </div>
            <AcceptTerms
              name="acceptTerms"
              checked={termsAccepted}
              onChange={handleTermsChange}
            />
            <div className="flex justify-center">
              <div className="border rounded-xl bg-buttonColor text-white hover:bg-homeColor hover:text-white">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="py-3 px-8 font-DMsans text-base uppercase md:text-xl"
                >
                  Submit
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <Footer />
    </div>
  );
};

export default Apply;
