import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../Components/InputWithLabel";
import InputWithDropdown from "../Components/InputWithDropdown";

const ApplyWorkStatus = ({ formData, onFormChange }) => {
  const employmentStatus = [
    { value: "Employed", label: "Employed" },
    { value: "Self Employed", label: "Self Employed" },
    { value: "Unemployed", label: "Unemployed" },
    { value: "Student", label: "Student" },
    { value: "Pensioner", label: "Pensioner" },
    { value: "Retired", label: "Retired" },
  ];

  const monthlyIncome = [
    { value: "N50,000-N250,000", label: "N50,000-N250,000" },
    { value: "N251,000-N350,000", label: "N251,000-N350,000" },
    { value: "N351,000-N500,000", label: "N351,000-N500,000" },
    { value: "N501,000 & above", label: "N501,000 & above" },
  ];

  return (
    <div>
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          employmentStatus: Yup.string().required("Please select an option"),
          companyName: Yup.string().required("Company Name is required"),
          monthlyIncome: Yup.string().required("Please select an option"),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values); // Handle form submission here
          resetForm(); // Clear form after submission
        }}
      >
        {({ values, errors, handleChange }) => (
          <Form className="flex flex-col justify-end px-4 py-4 mt-11 md:px-10">
            <span className="text-base font-bold text-homeColor pb-2 md:hidden">
              Work Status
            </span>
            <hr className="border-t-2 border-buttonColor pb-5 md:hidden" />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <InputWithDropdown
                labelName="Employment Status"
                options={employmentStatus}
                selectedValue={values.employmentStatus}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "employmentStatus",
                      value: event.target.value,
                    },
                  });
                  onFormChange({ employmentStatus: event.target.value });
                }}
                inputError={errors.employmentStatus}
              />
              <InputWithLabel
                labelName="Company Name"
                inputType="text"
                inputName="companyName"
                placeholder="Company Name"
                inputValue={values.companyName}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ companyName: event.target.value });
                }}
                inputError={errors.companyName}
              />
              <InputWithDropdown
                labelName="Monthly Income"
                options={monthlyIncome}
                selectedValue={values.monthlyIncome}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "monthlyIncome",
                      value: event.target.value,
                    },
                  });
                  onFormChange({ monthlyIncome: event.target.value });
                }}
                inputError={errors.monthlyIncome}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ApplyWorkStatus;
