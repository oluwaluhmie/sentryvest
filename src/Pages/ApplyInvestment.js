import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../Components/InputWithLabel";
import InputWithDropdown from "../Components/InputWithDropdown";

const ApplyInvestment = ({ formData, onFormChange }) => {
  const investmentRange = [
    { value: "N50K-N999K", label: "N50K-N999K" },
    { value: "N1M-N4.99M", label: "N1M-N4.99M" },
    { value: "N5M-N14.99M", label: "N5M-N14.99M" },
    { value: "N15M-N49.99M", label: "N15M-N49.99M" },
    { value: "N50M- Above", label: "N50M- Above" },
  ];

  const investmentDuration = [
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
          investmentRange: Yup.string().required("Please select an option"),
          amount: Yup.number()
            .required("Loan amount is required")
            .positive("Loan amount must be a positive number"),
          investmentDuration: Yup.string().required("Please select an option"),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values); // Handle form submission here
          resetForm(); // Clear form after submission
        }}
      >
        {({ values, errors, handleChange }) => (
          <Form className="flex flex-col justify-end px-4 py-4 md:px-10">
            <span className="text-base font-bold text-homeColor pb-2 md:hidden">
              Investment Details
            </span>
            <hr className="border-t-2 border-buttonColor pb-5 md:hidden" />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <InputWithDropdown
                labelName="Investment Range"
                options={investmentRange}
                selectedValue={values.investmentRange}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "investmentRange",
                      value: event.target.value,
                    },
                  });
                  onFormChange({ investmentRange: event.target.value });
                }}
                inputError={errors.investmentRange}
              />
              <InputWithLabel
                labelName="Amount"
                inputType="number"
                inputName="amount"
                placeholder="Investment Amount"
                inputValue={values.amount}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ amount: event.target.value });
                }}
                inputError={errors.amount}
              />
              <InputWithDropdown
                labelName="Investment Duration"
                options={investmentDuration}
                selectedValue={values.investmentDuration}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "investmentDuration",
                      value: event.target.value,
                    },
                  });
                  onFormChange({ investmentDuration: event.target.value });
                }}
                inputError={errors.investmentDuration}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ApplyInvestment;
