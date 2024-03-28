import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InputWithLabel from "../Components/inputWithLabel";
import InputWithDropdown from "../Components/InputWithDropdown";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <Navbar />
      <div className="px-4 py-6 pt-20 text-center md:px-10 md:py-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-4xl">
          Fill our application form with your correct details
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
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values); // Handle form submission here
          if (values.acceptTerms) {
            setSubmitting(false);
            resetForm(); // Clear form after submission if terms accepted
          } else {
            setSubmitting(false);
          }
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
            <div className="flex justify-center">
              <div className="border rounded-xl bg-buttonColor text-white hover:bg-homeColor hover:text-white">
              <Link to={"/apply1"}>
                  <button className="py-3 px-8 font-DMsans text-base uppercase md:text-xl">
                    Next
                  </button>
                </Link>
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
