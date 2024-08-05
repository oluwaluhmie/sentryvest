import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../Components/InputWithLabel";
import InputWithDropdown from "../../Components/InputWithDropdown";
import FileInput from "../../Components/FileInput";

const Personalinfo = ({ formData, onFormChange }) => {
  const title = [
    { value: "Miss", label: "Miss." },
    { value: "Mr", label: "Mr." },
    { value: "Mrs", label: "Mrs." },
  ];

  const maritalStatus = [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
    { value: "Divorced", label: "Divorced" },
    { value: "In a Relationship", label: "In a Relationship" },
  ];

  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      <div className="py-3 border-b border-homeColor/15 md:hidden">
        <span className="font-bold text-buttonColor text-xs">
          Personal Information
        </span>
      </div>
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          fullName: Yup.string().required("Full name is required"),
          phoneNumber: Yup.string()
            .matches(/^\d{11}$/, "Phone number must be exactly 11 digits")
            .required("Phone number is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          passport: Yup.mixed()
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
          maritalStatus: Yup.string().required("Please select an option"),
          homeAddress: Yup.string().required("Home address is required"),
          lga: Yup.string().required("Local government is required"),
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
          bvn: Yup.string().required("BVN is required"),
          stateOrigin: Yup.string().required("State of Origin is required"),
          pob: Yup.string().required("Place of Birth is required"),
          occupation: Yup.string().required("State of Origin is required"),
          dataPage: Yup.mixed()
            .required("Passport Data Page is required")
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
          signature: Yup.mixed()
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
                  options={title}
                  selectedValue={values.title}
                  onChange={(event) => {
                    handleChange({
                      target: {
                        name: "title",
                        value: event.target.value,
                      },
                    });
                    onFormChange({ ...values, title: event.target.value });
                  }}
                  inputError={errors.title}
                />
                <InputWithLabel
                  labelName="Full Name"
                  inputType="text"
                  inputName="fullName"
                  placeholder="Enter full name"
                  inputValue={values.fullName}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ fullName: event.target.value });
                  }}
                  inputError={errors.fullName}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <InputWithLabel
                  labelName="Phone Number"
                  inputType="text"
                  inputName="phoneNumber"
                  placeholder="Enter your phone number"
                  inputValue={values.phoneNumber}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      phoneNumber: event.target.value,
                    });
                  }}
                  inputError={errors.phoneNumber}
                />
                <InputWithLabel
                  labelName="Email Address"
                  inputType="email"
                  inputName="email"
                  placeholder="Enter your email"
                  inputValue={values.email}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      email: event.target.value,
                    });
                  }}
                  inputError={errors.email}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <FileInput
                  labelName="Passport"
                  onChange={(event) => {
                    setFieldValue("passport", event.currentTarget.files[0]);
                    onFormChange({
                      ...values,
                      passport: event.currentTarget.files[0],
                    });
                  }}
                  inputError={touched.passport && errors.passport}
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
                    onFormChange({
                      ...values,
                      maritalStatus: event.target.value,
                    });
                  }}
                  inputError={errors.maritalStatus}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <InputWithLabel
                  labelName="Date of Birth"
                  inputType="date"
                  inputName="dob"
                  inputValue={values.dob}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      dob: event.target.value,
                    });
                  }}
                  inputError={errors.dob}
                />
                <InputWithLabel
                  labelName="BVN"
                  inputType="text"
                  inputName="bvn"
                  placeholder="Enter BVN"
                  inputValue={values.bvn}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ bvn: event.target.value });
                  }}
                  inputError={errors.bvn}
                />
              </div>
              <InputWithLabel
                labelName="Home Address"
                inputType="text"
                inputName="homeAddress"
                placeholder="Enter your home address"
                inputValue={values.homeAddress}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({
                    ...values,
                    homeAddress: event.target.value,
                  });
                }}
                inputError={errors.homeAddress}
              />
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <InputWithLabel
                  labelName="Local Government"
                  inputType="text"
                  inputName="lga"
                  placeholder="Enter your local government"
                  inputValue={values.lga}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      lga: event.target.value,
                    });
                  }}
                  inputError={errors.lga}
                />
                <InputWithLabel
                  labelName="State of Origin"
                  inputType="text"
                  inputName="stateOrigin"
                  placeholder="Enter your state of origin"
                  inputValue={values.stateOrigin}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      stateOrigin: event.target.value,
                    });
                  }}
                  inputError={errors.stateOrigin}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <InputWithLabel
                  labelName="Place of Birth"
                  inputType="text"
                  inputName="pob"
                  placeholder="Enter your place of birth"
                  inputValue={values.pob}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      pob: event.target.value,
                    });
                  }}
                  inputError={errors.pob}
                />
                <InputWithLabel
                  labelName="Occupation"
                  inputType="text"
                  inputName="occupation"
                  placeholder="Enter your occupation"
                  inputValue={values.occupation}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      occupation: event.target.value,
                    });
                  }}
                  inputError={errors.occupation}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <FileInput
                  labelName="Passport Data Page"
                  onChange={(event) => {
                    setFieldValue("dataPage", event.currentTarget.files[0]);
                    onFormChange({
                      ...values,
                      dataPage: event.currentTarget.files[0],
                    });
                  }}
                  inputError={touched.dataPage && errors.dataPage}
                />
                <FileInput
                  labelName="Signature"
                  onChange={(event) => {
                    setFieldValue("signature", event.currentTarget.files[0]);
                    onFormChange({
                      ...values,
                      signature: event.currentTarget.files[0],
                    });
                  }}
                  inputError={touched.signature && errors.signature}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Personalinfo;
