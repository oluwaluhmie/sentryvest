import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../Components/InputWithLabel";
import InputWithDropdown from "../../Components/InputWithDropdown";

const LoanForm = ({ formData, onFormChange }) => {
  const businessType = [
    { value: "Sole Proprietorship", label: "Sole Proprietorship" },
    { value: "Partnership", label: "Partnership" },
    { value: "Other", label: "Other" },
  ];

  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      <div className="py-3 border-b border-homeColor/15 md:hidden">
        <span className="font-DMsans font-bold text-buttonColor text-xs">
          Loan Details
        </span>
      </div>
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          businessType: Yup.string().required("Please select an option"),
          loanAmount: Yup.number()
            .required("Loan amount is required")
            .positive("Loan amount must be a positive number"),
          obtainDate: Yup.date()
            .required("Obtain Date is required")
            .max(new Date(), "Obtain Date cannot be in the future"),
          returningDate: Yup.date()
            .required("Returning Date is required")
            .min(
              Yup.ref("issueDate"),
              "Returning Date cannot be before Obtain Date"
            )
            .test(
              "isAfterToday",
              "Returning Date cannot be in the past",
              function (value) {
                const today = new Date();
                return value >= today;
              }
            ),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values); // Handle form submission here
          resetForm(); // Clear form after submission
        }}
      >
        {({ values, errors, handleChange }) => (
          <Form className="flex flex-col">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <InputWithDropdown
                labelName="Business Type"
                options={businessType}
                selectedValue={values.businessType}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "businessType",
                      value: event.target.value,
                    },
                  });
                  onFormChange({
                    ...values,
                    businessType: event.target.value,
                  });
                }}
                inputError={errors.businessType}
              />
              <InputWithLabel
                labelName="Principal Loan Amount"
                inputType="number"
                inputName="loanAmount"
                placeholder="Principal Loan Amount"
                inputValue={values.loanAmount}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ loanAmount: event.target.value });
                }}
                inputError={errors.loanAmount}
              />
              <InputWithLabel
                labelName="Obtain Date"
                inputType="date"
                inputName="obtainDate"
                inputValue={values.obtainDate}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ ...values, obtainDate: event.target.value });
                }}
                inputError={errors.obtainDate}
              />
              <InputWithLabel
                labelName="Returning Date"
                inputType="date"
                inputName="returningDate"
                inputValue={values.returningDate}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({
                    ...values,
                    returningDate: event.target.value,
                  });
                }}
                inputError={errors.returningDate}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoanForm;
