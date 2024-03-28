import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InputWithLabel from "../Components/inputWithLabel";
import InputWithDropdown from "../Components/InputWithDropdown";
import AcceptTerms from "../Components/AcceptTerms";
import { Link } from "react-router-dom";

const ApplyWorkStatus = () => {
  const employmentStatus = [
    { value: "option1", label: "Employed" },
    { value: "option1", label: "Self Employed" },
    { value: "option1", label: "Unemployed" },
    { value: "option1", label: "Student" },
    { value: "option1", label: "Pensioner" },
    { value: "option1", label: "Retired" },
  ];

  const monthlyIncome = [
    { value: "option1", label: "N50,000 - N250,000" },
    { value: "option1", label: "N251,000 - N350,000" },
    { value: "option1", label: "N351,000 - N500,000" },
    { value: "option1", label: "N501,000 & above" },
  ];

  return (
    <div>
      <Navbar />
      <div className="px-4 py-6 pt-20 md:px-10 md:py-10 md:pt-20">
        <Link to="/apply2">
          <button className="bg-homeColor text-white border rounded-xl border-solid py-2 px-4 mt-2 hover:bg-buttonColor">
            Back
          </button>
        </Link>
      </div>
      <Formik
        initialValues={{
          employmentStatus: "",
          companyStatus: "",
          monthlyIncome: "",
        }}
        validationSchema={Yup.object({
          employmentStatus: Yup.string().required("Please select an option"),
          companyStatus: Yup.string().required("Company Status is required"),
          monthlyIncome: Yup.string().required("Please select an option"),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values); // Handle form submission here
          resetForm(); // Clear form after submission
        }}
      >
        {(
          { values, errors, handleChange }
        ) => (
          <Form className="flex flex-col justify-end gap-4 px-4 py-4 md:py-8 md:px-10">
            <span className="font-bold text-lg text-homeColor">
              Work Status
            </span>
            <hr />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
                }}
                inputError={errors.employmentStatus}
              />
              <InputWithLabel
                labelName="Company Status"
                inputType="text"
                inputName="companyStatus"
                placeholder="Company Status"
                inputValue={values.companyStatus}
                inputOnChange={handleChange}
                inputError={errors.companyStatus}
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
                }}
                inputError={errors.monthlyIncome}
              />
            </div>
            <div className="flex justify-center">
              <Link to={"/apply4"}>
                <button
                  type="submit"
                  disabled={
                    Object.keys(errors).length !== 0 ||
                    Object.values(values).some((value) => value === "")
                  }
                  className="border rounded-xl bg-buttonColor text-white hover:bg-homeColor hover:text-white py-2 px-6 font-DMsans text-base md:text-xl"
                >
                  Next
                </button>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
      <Footer />
    </div>
  );
};

export default ApplyWorkStatus;
