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
          gfullName: Yup.string().required("Full name is required"),
          gphoneNumber: Yup.string()
            .matches(/^\d{11}$/, "Phone number must be exactly 11 digits")
            .required("Phone number is required"),
          gemail: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          gpassport: Yup.mixed()
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
          ghomeAddress: Yup.string().required("Home address is required"),
          gOccupation: Yup.string().required("Occupation is required"),
          gofficeAddress: Yup.string().required("Office address is required"),
          gRelationship: Yup.string().required("Relationship is required"),
          gSignature: Yup.mixed()
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
                <InputWithLabel
                  labelName="Full Name"
                  inputType="text"
                  inputName="gfullName"
                  placeholder="Enter full name"
                  inputValue={values.gfullName}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ gfullName: event.target.value });
                  }}
                  inputError={errors.gfullName}
                />
                <InputWithLabel
                  labelName="Phone Number"
                  inputType="text"
                  inputName="gphoneNumber"
                  placeholder="Enter your phone number"
                  inputValue={values.gphoneNumber}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      gphoneNumber: event.target.value,
                    });
                  }}
                  inputError={errors.gphoneNumber}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <InputWithLabel
                  labelName="Email Address"
                  inputType="email"
                  inputName="gemail"
                  placeholder="Enter your email"
                  inputValue={values.gemail}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      gemail: event.target.value,
                    });
                  }}
                  inputError={errors.gemail}
                />
                <FileInput
                  labelName="Passport"
                  onChange={(event) => {
                    setFieldValue("gpassport", event.currentTarget.files[0]);
                    onFormChange({
                      ...values,
                      gpassport: event.currentTarget.files[0],
                    });
                  }}
                  inputError={touched.gpassport && errors.gpassport}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <InputWithLabel
                  labelName="Occupation"
                  inputType="text"
                  inputName="gOccupation"
                  placeholder="Enter your occupation"
                  inputValue={values.gOccupation}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      gOccupation: event.target.value,
                    });
                  }}
                  inputError={errors.gOccupation}
                />
                <InputWithLabel
                  labelName="Relationship"
                  inputType="text"
                  inputName="gRelationship"
                  placeholder="State your relationship"
                  inputValue={values.gRelationship}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      gRelationship: event.target.value,
                    });
                  }}
                  inputError={errors.gRelationship}
                />
              </div>
              <InputWithLabel
                labelName="Home Address"
                inputType="text"
                inputName="ghomeAddress"
                placeholder="Enter your home address"
                inputValue={values.ghomeAddress}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({
                    ...values,
                    ghomeAddress: event.target.value,
                  });
                }}
                inputError={errors.ghomeAddress}
              />
              <InputWithLabel
                labelName="Office Address"
                inputType="text"
                inputName="gofficeAddress"
                placeholder="Enter your office address"
                inputValue={values.gofficeAddress}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({
                    ...values,
                    gofficeAddress: event.target.value,
                  });
                }}
                inputError={errors.gofficeAddress}
              />
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <FileInput
                  labelName="Signature"
                  onChange={(event) => {
                    setFieldValue("gSignature", event.currentTarget.files[0]);
                    onFormChange({
                      ...values,
                      gSignature: event.currentTarget.files[0],
                    });
                  }}
                  inputError={touched.gSignature && errors.gSignature}
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
