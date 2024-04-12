import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../Components/inputWithLabel";

const ApplyContactDetails = ({ formData, onFormChange }) => {
  return (
    <div>
      <Formik
        initialValues={formData}
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
        onSubmit={(values, { resetForm }) => {
          console.log(values); // Handle form submission here
          resetForm(); // Clear form after submission
        }}
      >
        {({ values, errors, handleChange }) => (
          <Form className="flex flex-col justify-end px-4 py-4 md:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <InputWithLabel
                labelName="Phone Number"
                inputType="text"
                inputName="phoneNumber"
                placeholder="Phone Number"
                inputValue={values.phoneNumber}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ phoneNumber: event.target.value });
                }}
                inputError={errors.phoneNumber}
              />
              <InputWithLabel
                labelName="Email"
                inputType="email"
                inputName="email"
                placeholder="Email Address"
                inputValue={values.email}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ email: event.target.value });
                }}
                inputError={errors.email}
              />
              <InputWithLabel
                labelName="Address"
                inputType="text"
                inputName="address"
                placeholder="Address"
                inputValue={values.address}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ address: event.target.value });
                }}
                inputError={errors.address}
              />
              <InputWithLabel
                labelName="City"
                inputType="text"
                inputName="city"
                placeholder="City"
                inputValue={values.city}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ city: event.target.value });
                }}
                inputError={errors.city}
              />
              <InputWithLabel
                labelName="State"
                inputType="text"
                inputName="state"
                placeholder="State"
                inputValue={values.state}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ state: event.target.value });
                }}
                inputError={errors.state}
              />
              <InputWithLabel
                labelName="Local Government"
                inputType="text"
                inputName="lgt"
                placeholder="Local Government"
                inputValue={values.lgt}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ lgt: event.target.value });
                }}
                inputError={errors.lgt}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ApplyContactDetails;
