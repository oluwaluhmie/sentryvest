import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../Components/InputWithLabel";
import FileInput from "../../Components/FileInput";

const Guarantor = ({ formData, onFormChange }) => {
  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      <div className="py-3 border-b border-homeColor/15 md:hidden">
        <span className="font-bold text-buttonColor text-xs">
          Guarantor's Information
        </span>
      </div>
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          guarantorName: Yup.string().required("Full name is required"),
          guarantorPhoneNumber: Yup.string()
            .matches(/^\d{11}$/, "Phone number must be exactly 11 digits")
            .required("Phone number is required"),
          guarantorEmailAddress: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          guarantorPassport: Yup.mixed()
            .required("Passport photograph is required")
            .test(
              "fileSize",
              "File too large",
              (value) => !value || (value && value.size <= 1024 * 1024) // 1MB
            )
            .test(
              "fileFormat",
              "Unsupported format",
              (value) =>
                !value ||
                (value && ["image/jpeg", "image/png"].includes(value.type))
            ),
          guarantorHomeAddress: Yup.string().required(
            "Home address is required"
          ),
          guarantorOccupation: Yup.string().required("Occupation is required"),
          guarantorOfficeAddress: Yup.string().required(
            "Office address is required"
          ),
          relationshipToApplicant: Yup.string().required(
            "Relationship is required"
          ),
          guarantorSignature: Yup.mixed()
            .required("A signature is required")
            .test(
              "fileSize",
              "File size too large",
              (value) => value && value.size <= 1024 * 1024 // 1MB
            )
            .test(
              "fileFormat",
              "Unsupported file format",
              (value) =>
                value && ["image/jpeg", "image/png"].includes(value.type)
            ),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values); // Handle form submission here
          onFormChange(values); // Send updated form data to parent component
        }}
      >
        {({ values, errors, setFieldValue, touched, handleChange }) => (
          <Form className="flex flex-col">
            <div className="grid grid-cols-1 gap-8">
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <InputWithLabel
                  labelName="Full Name"
                  inputType="text"
                  inputName="guarantorName"
                  placeholder="Enter full name"
                  inputValue={values.guarantorName}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ guarantorName: event.target.value });
                  }}
                  inputError={errors.guarantorName}
                />
                <InputWithLabel
                  labelName="Phone Number"
                  inputType="text"
                  inputName="guarantorPhoneNumber"
                  placeholder="Enter your phone number"
                  inputValue={values.guarantorPhoneNumber}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      guarantorPhoneNumber: event.target.value,
                    });
                  }}
                  inputError={errors.guarantorPhoneNumber}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <InputWithLabel
                  labelName="Email Address"
                  inputType="email"
                  inputName="guarantorEmailAddress"
                  placeholder="Enter your email"
                  inputValue={values.guarantorEmailAddress}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      guarantorEmailAddress: event.target.value,
                    });
                  }}
                  inputError={errors.guarantorEmailAddress}
                />
                <FileInput
                  labelName="Passport"
                  onChange={(event) => {
                    setFieldValue(
                      "guarantorPassport",
                      event.currentTarget.files[0]
                    );
                    onFormChange({
                      ...values,
                      guarantorPassport: event.currentTarget.files[0],
                    });
                  }}
                  inputError={
                    touched.guarantorPassport && errors.guarantorPassport
                  }
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <InputWithLabel
                  labelName="Occupation"
                  inputType="text"
                  inputName="guarantorOccupation"
                  placeholder="Enter your occupation"
                  inputValue={values.guarantorOccupation}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      guarantorOccupation: event.target.value,
                    });
                  }}
                  inputError={errors.guarantorOccupation}
                />
                <InputWithLabel
                  labelName="Relationship"
                  inputType="text"
                  inputName="relationshipToApplicant"
                  placeholder="Relationship to Applicant"
                  inputValue={values.relationshipToApplicant}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      relationshipToApplicant: event.target.value,
                    });
                  }}
                  inputError={errors.relationshipToApplicant}
                />
              </div>
              <InputWithLabel
                labelName="Home Address"
                inputType="text"
                inputName="guarantorHomeAddress"
                placeholder="Enter your home address"
                inputValue={values.guarantorHomeAddress}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({
                    ...values,
                    guarantorHomeAddress: event.target.value,
                  });
                }}
                inputError={errors.guarantorHomeAddress}
              />
              <InputWithLabel
                labelName="Office Address"
                inputType="text"
                inputName="guarantorOfficeAddress"
                placeholder="Enter your office address"
                inputValue={values.guarantorOfficeAddress}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({
                    ...values,
                    guarantorOfficeAddress: event.target.value,
                  });
                }}
                inputError={errors.guarantorOfficeAddress}
              />
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <FileInput
                  labelName="Signature"
                  onChange={(event) => {
                    setFieldValue(
                      "guarantorSignature",
                      event.currentTarget.files[0]
                    );
                    onFormChange({
                      ...values,
                      guarantorSignature: event.currentTarget.files[0],
                    });
                  }}
                  inputError={
                    touched.guarantorSignature && errors.guarantorSignature
                  }
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Guarantor;
