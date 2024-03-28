import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InputWithLabel from "../Components/inputWithLabel";
import InputWithDropdown from "../Components/InputWithDropdown";
import AcceptTerms from "../Components/AcceptTerms";

const ApplyNext = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 py-6 pt-20 text-center md:px-10 md:py-10 md:pt-12">
        <h1 className="font-bold text-3xl md:text-4xl"> </h1>
      </div>
      <Formik
        initialValues={{
          fullName: "",
          nPhoneNumber: "",
          nEmail: "",
          nOccupation: "",
          nRelationship: "",
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
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

export default ApplyNext;
