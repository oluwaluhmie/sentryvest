import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../Components/InputWithLabel";

const ApplyNext = ({ formData, onFormChange }) => {
  return (
    <div>
      <Formik
        initialValues={formData}
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
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values); // Handle form submission here
          resetForm();
        }}
      >
        {({ values, errors, handleChange, isSubmitting }) => (
          <Form className="flex flex-col justify-end px-4 py-4 mt-11 md:px-10">
            <span className="text-base font-bold text-homeColor pb-2 md:hidden">
              Next of Kin Details
            </span>
            <hr className="border-t-2 border-buttonColor pb-5 md:hidden" />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <InputWithLabel
                labelName="Full name"
                inputType="text"
                inputName="fullName"
                placeholder="Full Name"
                inputValue={values.fullName}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ fullName: event.target.value });
                }}
                inputError={errors.fullName}
              />
              <InputWithLabel
                labelName="Phone Number"
                inputType="text"
                inputName="nPhoneNumber"
                placeholder="Phone Number"
                inputValue={values.nPhoneNumber}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ nPhoneNumber: event.target.value });
                }}
                inputError={errors.nPhoneNumber}
              />
              <InputWithLabel
                labelName="Email"
                inputType="email"
                inputName="nEmail"
                placeholder="Email Address"
                inputValue={values.nEmail}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ nEmail: event.target.value });
                }}
                inputError={errors.nEmail}
              />
              <InputWithLabel
                labelName="Occupation"
                inputType="text"
                inputName="nOccupation"
                placeholder="Occupation"
                inputValue={values.nOccupation}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ nOccupation: event.target.value });
                }}
                inputError={errors.nOccupation}
              />
              <InputWithLabel
                labelName="Relationship"
                inputType="text"
                inputName="nRelationship"
                placeholder="Relationship"
                inputValue={values.nRelationship}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ nRelationship: event.target.value });
                }}
                inputError={errors.nRelationship}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ApplyNext;
