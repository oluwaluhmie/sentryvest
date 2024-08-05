import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../Components/InputWithLabel";
import InputWithDropdown from "../../Components/InputWithDropdown";
import FileInput from "../../Components/FileInput";

const Nextkin = ({ formData, onFormChange }) => {
  const ntitle = [
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
          ntitle: Yup.string().required("Title is required"),
          nfullName: Yup.string().required("Full name is required"),
          nphoneNumber: Yup.string()
            .matches(/^\d{11}$/, "Phone number must be exactly 11 digits")
            .required("Phone number is required"),
          nemail: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          noccupation: Yup.string().required("Occupation is required"),
          nrelationship: Yup.string().required("Relationship is required"),
          nsignature: Yup.mixed()
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
          resetForm(); // Clear form after submission
        }}
      >
        {({ values, errors, setFieldValue, touched, handleChange }) => (
          <Form className="flex flex-col">
            <div className="grid grid-cols-1 gap-8">
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <InputWithDropdown
                  labelName="Title"
                  options={ntitle}
                  selectedValue={values.ntitle}
                  onChange={(event) => {
                    handleChange({
                      target: {
                        name: "ntitle",
                        value: event.target.value,
                      },
                    });
                    onFormChange({ ...values, ntitle: event.target.value });
                  }}
                  inputError={errors.ntitle}
                />
                <InputWithLabel
                  labelName="Full Name"
                  inputType="text"
                  inputName="nfullName"
                  placeholder="Enter full name"
                  inputValue={values.nfullName}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ nfullName: event.target.value });
                  }}
                  inputError={errors.nfullName}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <InputWithLabel
                  labelName="Phone Number"
                  inputType="text"
                  inputName="nphoneNumber"
                  placeholder="Enter your phone number"
                  inputValue={values.nphoneNumber}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      nphoneNumber: event.target.value,
                    });
                  }}
                  inputError={errors.nphoneNumber}
                />
                <InputWithLabel
                  labelName="Email Address"
                  inputType="email"
                  inputName="nemail"
                  placeholder="Enter your email"
                  inputValue={values.nemail}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      nemail: event.target.value,
                    });
                  }}
                  inputError={errors.nemail}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <InputWithLabel
                  labelName="Occupation"
                  inputType="text"
                  inputName="noccupation"
                  placeholder="Enter your occupation"
                  inputValue={values.noccupation}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      noccupation: event.target.value,
                    });
                  }}
                  inputError={errors.noccupation}
                />
                <InputWithLabel
                  labelName="Relationship"
                  inputType="text"
                  inputName="nrelationship"
                  placeholder="State your relationship"
                  inputValue={values.nrelationship}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      nrelationship: event.target.value,
                    });
                  }}
                  inputError={errors.nrelationship}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <FileInput
                  labelName="Signature"
                  onChange={(event) => {
                    setFieldValue("nsignature", event.currentTarget.files[0]);
                    onFormChange({
                      ...values,
                      nsignature: event.currentTarget.files[0],
                    });
                  }}
                  inputError={touched.nsignature && errors.nsignature}
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
