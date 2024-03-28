import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InputWithLabel from "../Components/inputWithLabel";
import InputWithDropdown from "../Components/InputWithDropdown";
import { Link } from "react-router-dom";

const Apply = () => {
  const loanDuration = [
    { value: "option1", label: "1 Month" },
    { value: "option2", label: "2 Months" },
    { value: "option3", label: "3 Months" },
    { value: "option4", label: "4 Months" },
    { value: "option5", label: "5 Months" },
    { value: "option6", label: "6 Months" },
    { value: "option7", label: "7 Months" },
    { value: "option8", label: "8 Months" },
    { value: "option9", label: "9 Months" },
    { value: "option10", label: "10 Months" },
    { value: "option11", label: "11 Months" },
    { value: "option12", label: "12 Months" },
  ];

  const loanPurpose = [
    { value: "option1", label: "Rental" },
    { value: "option2", label: "Travel" },
    { value: "option3", label: "Car" },
    { value: "option4", label: "Business" },
    { value: "option5", label: "Investment" },
    { value: "option6", label: "Party" },
    { value: "option7", label: "Item Purchase" },
    { value: "option8", label: "Emergency" },
    { value: "option9", label: "Project(s)" },
    { value: "option10", label: "Other" },
  ];

  return (
    <div>
      <Navbar />
      <div className="px-4 py-6 pt-20 text-center md:px-10 md:py-10 md:pt-20">
        <h1 className="font-bold text-3xl md:text-4xl">
          Fill our application form with your correct details
        </h1>
      </div>
      <Formik
        initialValues={{
          loanAmount: "",
          loanDuration: "",
          purpose: "",
        }}
        validationSchema={Yup.object({
          loanAmount: Yup.number()
            .typeError("Loan amount must be a number")
            .required("Loan amount is required")
            .positive("Loan amount must be a positive number"),
          loanDuration: Yup.string().required("Please select an option"),
          purpose: Yup.string().required("Please select an option"),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values); // Handle form submission here
          resetForm(); // Clear form after submission if terms accepted
        }}
      >
        {(
          { values, errors, handleChange, setFieldValue, isSubmitting } // Receive handleChange from Formik context
        ) => (
          <Form className="flex flex-col justify-end gap-4 px-4 py-4 md:py-8 md:px-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <InputWithLabel
                labelName="Loan Amount"
                inputType="number"
                inputName="loanAmount"
                placeholder="Loan Amount"
                inputValue={values.loanAmount}
                inputOnChange={handleChange}
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
                }}
                inputError={errors.loanDuration}
              />
              <InputWithDropdown
                labelName="Purpose"
                options={loanPurpose}
                selectedValue={values.purpose}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "purpose",
                      value: event.target.value,
                    },
                  });
                }}
                inputError={errors.purpose}
              />
            </div>
            <div className="flex justify-center">
              <div className="border rounded-xl bg-buttonColor text-white hover:bg-homeColor hover:text-white">
                <Link to={"/apply1"}>
                  <button
                    type="submit"
                    className="py-3 px-8 font-DMsans text-base uppercase md:text-xl"
                  >
                    Next
                  </button>
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <Footer />
    </div>
  );
};

export default Apply;
