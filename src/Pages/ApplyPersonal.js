import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../Components/inputWithLabel";
import InputWithDropdown from "../Components/InputWithDropdown";

const ApplyPersonal = ({ formData, onFormChange }) => {
  const gender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const maritalStatus = [
    { value: "single", label: "Single" },
    { value: "married", label: "Married" },
    { value: "divorced", label: "Divorced" },
    { value: "in a relationship", label: "In a Relationship" },
  ];

  return (
    <div id="personal-section">
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
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
        onSubmit={(values, { resetForm }) => {
          console.log(values); // Handle form submission here
          resetForm(); // Clear form after submission
        }}
      >
        {({ values, errors, handleChange }) => (
          <Form className="flex flex-col justify-end px-4 py-4 md:px-10">
            <span className="text-base font-bold text-homeColor pb-2 md:hidden">
              Personal Information
            </span>
            <hr className="pb-2 md:hidden" />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:mt-10">
              <InputWithLabel
                labelName="First Name"
                inputType="text"
                inputName="firstName"
                placeholder="First Name"
                inputValue={values.firstName}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ firstName: event.target.value });
                }}
                inputError={errors.firstName}
              />
              <InputWithLabel
                labelName="Middle Name"
                inputType="text"
                inputName="middleName"
                placeholder="Middle Name"
                inputValue={values.middleName}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ middleName: event.target.value });
                }}
                inputError={errors.middleName}
              />
              <InputWithLabel
                labelName="Last Name"
                inputType="text"
                inputName="lastName"
                placeholder="Last Name"
                inputValue={values.lastName}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ lastName: event.target.value });
                }}
                inputError={errors.lastName}
              />
              <InputWithDropdown
                labelName="Gender"
                options={gender}
                selectedValue={values.gender}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "gender",
                      value: event.target.value,
                    },
                  });
                  onFormChange({ gender: event.target.value });
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
                  onFormChange({ maritalStatus: event.target.value });
                }}
                inputError={errors.maritalStatus}
              />
              <InputWithLabel
                labelName="Date of Birth"
                inputType="date"
                inputName="dob"
                inputValue={values.dob}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ dob: event.target.value });
                }}
                inputError={errors.dob}
              />
              <InputWithLabel
                labelName="State of Origin"
                inputType="text"
                inputName="soo"
                placeholder="State of Origin"
                inputValue={values.soo}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ soo: event.target.value });
                }}
                inputError={errors.soo}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ApplyPersonal;
