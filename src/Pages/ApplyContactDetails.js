import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InputWithLabel from "../Components/inputWithLabel";
import { Link } from "react-router-dom";

const ApplyContactDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 py-6 pt-20 text-center md:px-10 md:py-10 md:pt-12">
        {" "}
      </div>
      <Formik
        initialValues={{
          email: "",
          phoneNumber: "",
          address: "",
          city: "",
          state: "",
          lgt: "",
        }}
        validationSchema={Yup.object({
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
              Contact Details
            </span>
            <hr />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
            <div className="flex justify-center">
              <div className="border rounded-xl bg-buttonColor text-white hover:bg-homeColor hover:text-white">
                <Link to={"/apply2"}>
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

export default ApplyContactDetails;
