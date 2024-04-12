import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../Components/inputWithLabel";
import InputWithDropdown from "../Components/InputWithDropdown";

const ApplyLoan = ({ formData, onFormChange }) => {
  const loanDuration = [
    { value: "1 month", label: "1 Month" },
    { value: "2 months", label: "2 Months" },
    { value: "3 months", label: "3 Months" },
    { value: "4 months", label: "4 Months" },
    { value: "5 months", label: "5 Months" },
    { value: "6 months", label: "6 Months" },
    { value: "7 months", label: "7 Months" },
    { value: "8 months", label: "8 Months" },
    { value: "9 months", label: "9 Months" },
    { value: "10 months", label: "10 Months" },
    { value: "11 months", label: "11 Months" },
    { value: "12 months", label: "12 Months" },
  ];

  const loanPurpose = [
    { value: "rental", label: "Rental" },
    { value: "travel", label: "Travel" },
    { value: "car", label: "Car" },
    { value: "business", label: "Business" },
    { value: "investment", label: "Investment" },
    { value: "party", label: "Party" },
    { value: "item purchase", label: "Item Purchase" },
    { value: "emergency", label: "Emergency" },
    { value: "project(s)", label: "Project(s)" },
    { value: "other", label: "Other" },
  ];

  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-2xl md:text-3xl text-homeColor mb-4">
          Fill our application form with your correct details
        </h1>
      </div>
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          loanAmount: Yup.number()
            .required("Loan amount is required")
            .positive("Loan amount must be a positive number"),
          loanDuration: Yup.string().required("Please select an option"),
          loanPurpose: Yup.string().required("Please select an option"),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values); // Handle form submission here
          resetForm(); // Clear form after submission
        }}
      >
        {({ values, errors, handleChange }) => (
          <Form className="flex flex-col justify-end px-4 py-4 md:px-10">
            <span className="text-base font-bold text-homeColor pb-2 md:hidden">Loan Details</span>
            <hr className="pb-2 md:hidden"/>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <InputWithLabel
                labelName="Loan Amount"
                inputType="number"
                inputName="loanAmount"
                placeholder="Loan Amount"
                inputValue={values.loanAmount}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ loanAmount: event.target.value });
                }}
                inputError={errors.loanAmount}
              />
              <InputWithDropdown
                labelName="Loan Duration"
                options={loanDuration}
                selectedValue={values.loanDuration}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "loanDuration",
                      value: event.target.value,
                    },
                  });
                  onFormChange({ loanDuration: event.target.value });
                }}
                inputError={errors.loanDuration}
              />
              <InputWithDropdown
                labelName="Loan Purpose"
                options={loanPurpose}
                selectedValue={values.loanPurpose}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "loanPurpose",
                      value: event.target.value,
                    },
                  });
                  onFormChange({ loanPurpose: event.target.value });
                }}
                inputError={errors.loanPurpose}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ApplyLoan;
