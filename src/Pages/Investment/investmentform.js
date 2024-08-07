import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../Components/InputWithLabel";
import InputWithDropdown from "../../Components/InputWithDropdown";

const Investmentform = ({ formData, onFormChange }) => {
  const amountRange = [
    { value: "N50K-N999K", label: "N50K-N999K" },
    { value: "N1M-N4.99M", label: "N1M-N4.99M" },
    { value: "N5M-N14.99M", label: "N5M-N14.99M" },
    { value: "N15M-N49.99M", label: "N15M-N49.99M" },
    { value: "N50M- Above", label: "N50M- Above" },
  ];

  const duration = [
    { value: "6 months", label: "6 Months" },
    { value: "12 months", label: "12 Months" },
  ];

  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      <div className="py-3 border-b border-homeColor/15 md:hidden">
        <span className="font-bold text-buttonColor text-xs">
          Investment Details
        </span>
      </div>
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          amountRange: Yup.string().required("Please select an option"),
          amount: Yup.number()
            .required("Investment amount is required")
            .positive("Investment amount must be a positive number"),
          duration: Yup.string().required("Please select an option"),
          relocationCountry: Yup.string().required(
            "Relocation Country is required"
          ),
          startDate: Yup.date()
            .required("Start Date is required")
            .max(new Date(), "Start Date cannot be in the future"),
          endDate: Yup.date()
            .required("End Date is required")
            .min(Yup.ref("startDate"), "End Date cannot be before Obtain Date")
            .test(
              "isAfterToday",
              "End Date cannot be in the past",
              function (value) {
                const today = new Date();
                return value >= today;
              }
            ),
          receiverAddress: Yup.string().required(
            "Receiver's Address is required"
          ),
        })}
        onSubmit={(values) => {
          console.log(values); // Handle form submission here
          onFormChange(values); // Send updated form data to parent component
        }}
      >
        {({ values, errors, handleChange, handleBlur }) => (
          <Form className="flex flex-col">
            <div className="grid grid-cols-1 gap-8">
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <InputWithDropdown
                  labelName="Amount Range"
                  options={amountRange}
                  selectedValue={values.amountRange}
                  onChange={(event) => {
                    handleChange({
                      target: {
                        name: "amountRange",
                        value: event.target.value,
                      },
                    });
                    onFormChange({
                      ...values,
                      amountRange: event.target.value,
                    });
                  }}
                  inputError={errors.amountRange}
                />
                <InputWithLabel
                  labelName="Amount"
                  inputType="number"
                  inputName="amount"
                  placeholder="Enter amount"
                  inputValue={values.amount}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ ...values, amount: event.target.value });
                  }}
                  inputError={errors.amount}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <InputWithDropdown
                  labelName="Investment Duration"
                  options={duration}
                  selectedValue={values.duration}
                  onChange={(event) => {
                    handleChange({
                      target: {
                        name: "duration",
                        value: event.target.value,
                      },
                    });
                    onFormChange({
                      ...values,
                      duration: event.target.value,
                    });
                  }}
                  inputError={errors.duration}
                />
                <InputWithLabel
                  labelName="Relocation Country"
                  inputType="text"
                  inputName="relocationCountry"
                  placeholder="Enter relocation country"
                  inputValue={values.relocationCountry}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      relocationCountry: event.target.value,
                    });
                  }}
                  inputError={errors.relocationCountry}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
                <InputWithLabel
                  labelName="Start Date"
                  inputType="date"
                  inputName="startDate"
                  inputValue={values.startDate}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      startDate: event.target.value,
                    });
                  }}
                  inputError={errors.startDate}
                />
                <InputWithLabel
                  labelName="End Date"
                  inputType="date"
                  inputName="endDate"
                  inputValue={values.endDate}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      endDate: event.target.value,
                    });
                  }}
                  inputError={errors.endDate}
                />
              </div>
              <InputWithLabel
                labelName="Reference Letter Receiver's Address"
                inputType="textarea"
                inputName="receiverAddress"
                placeholder="Enter reference letter receiver's address"
                inputValue={values.receiverAddress}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({
                    ...values,
                    receiverAddress: event.target.value,
                  });
                }}
                inputError={errors.receiverAddress}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Investmentform;
