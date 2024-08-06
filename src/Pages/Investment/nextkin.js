import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../Components/InputWithLabel";
import InputWithDropdown from "../../Components/InputWithDropdown";
import FileInput from "../../Components/FileInput";

const Nextkin = ({ formData, onFormChange }) => {
  const nextKinTitle = [
    { value: "Miss", label: "Miss." },
    { value: "Mr", label: "Mr." },
    { value: "Mrs", label: "Mrs." },
  ];

  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      <div className="py-3 border-b border-homeColor/15 md:hidden">
        <span className="font-bold text-buttonColor text-xs">
          Next of Kin's Information
        </span>
      </div>
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          nextKinTitle: Yup.string().required("Title is required"),
          nextKinFullName: Yup.string().required("Full name is required"),
          nextKinPhoneNumber: Yup.string()
            .matches(/^\d{11}$/, "Phone number must be exactly 11 digits")
            .required("Phone number is required"),
          nextKinEmailAddress: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          nextKinOccupation: Yup.string().required("Occupation is required"),
          nextKinRelationship: Yup.string().required(
            "Relationship is required"
          ),
          nextKinSignature: Yup.mixed()
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
                <InputWithDropdown
                  labelName="Title"
                  options={nextKinTitle}
                  selectedValue={values.nextKinTitle}
                  onChange={(event) => {
                    handleChange({
                      target: {
                        name: "nextKinTitle",
                        value: event.target.value,
                      },
                    });
                    onFormChange({
                      ...values,
                      nextKinTitle: event.target.value,
                    });
                  }}
                  inputError={errors.nextKinTitle}
                />
                <InputWithLabel
                  labelName="Full Name"
                  inputType="text"
                  inputName="nextKinFullName"
                  placeholder="Enter full name"
                  inputValue={values.nextKinFullName}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ nextKinFullName: event.target.value });
                  }}
                  inputError={errors.nextKinFullName}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <InputWithLabel
                  labelName="Phone Number"
                  inputType="text"
                  inputName="nextKinPhoneNumber"
                  placeholder="Enter your phone number"
                  inputValue={values.nextKinPhoneNumber}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      nextKinPhoneNumber: event.target.value,
                    });
                  }}
                  inputError={errors.nextKinPhoneNumber}
                />
                <InputWithLabel
                  labelName="Email Address"
                  inputType="email"
                  inputName="nextKinEmailAddress"
                  placeholder="Enter your email"
                  inputValue={values.nextKinEmailAddress}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      nextKinEmailAddress: event.target.value,
                    });
                  }}
                  inputError={errors.nextKinEmailAddress}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <InputWithLabel
                  labelName="Occupation"
                  inputType="text"
                  inputName="nextKinOccupation"
                  placeholder="Enter your occupation"
                  inputValue={values.nextKinOccupation}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      nextKinOccupation: event.target.value,
                    });
                  }}
                  inputError={errors.nextKinOccupation}
                />
                <InputWithLabel
                  labelName="Relationship"
                  inputType="text"
                  inputName="nextKinRelationship"
                  placeholder="State your relationship"
                  inputValue={values.nextKinRelationship}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      nextKinRelationship: event.target.value,
                    });
                  }}
                  inputError={errors.nextKinRelationship}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <FileInput
                  labelName="Signature"
                  onChange={(event) => {
                    setFieldValue(
                      "nextKinSignature",
                      event.currentTarget.files[0]
                    );
                    onFormChange({
                      ...values,
                      nextKinSignature: event.currentTarget.files[0],
                    });
                  }}
                  inputError={
                    touched.nextKinSignature && errors.nextKinSignature
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

export default Nextkin;
