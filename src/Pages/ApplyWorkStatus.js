import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InputWithLabel from "../Components/inputWithLabel";
import InputWithDropdown from "../Components/InputWithDropdown";
import AcceptTerms from "../Components/AcceptTerms";

const ApplyWorkStatus = () => {
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

  return (
    <div>
      <Navbar />
      <div className="px-4 py-6 pt-20 text-center md:px-10 md:py-10 md:pt-12">
        <h1 className="font-bold text-3xl md:text-4xl">
          {" "}
        </h1>
      </div>
      <Formik
        initialValues={{
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
            <AcceptTerms name="acceptTerms" className="mr-2" />

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

export default ApplyWorkStatus;
