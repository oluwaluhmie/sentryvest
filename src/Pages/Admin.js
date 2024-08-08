import React from "react";
import axios from "axios";
import logo from "../assets/SentryVest.png";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../Components/InputWithLabel";
import right from "../assets/right.svg";

const Admin = ({ onFormChange = () => {} }) => {
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    const data = JSON.stringify({
      emailAddress: values.email,
      password: values.password,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.canaryfinance.canarypointfcl.com/v1/api/admin_login",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "22062024",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Login Response: ", JSON.stringify(response.data));
        const userDetails = response.data.user_detail;
        console.log("User Details: ", userDetails);
        // Navigate to /adminaccess after successful login with user details
        navigate("/adminaccess", { state: { userDetails } });
      })
      .catch((error) => {
        console.log("Login Error: ", error);
        // Handle login error, show an error message to the user
      });

    resetForm(); // Clear form after submission
  };

  return (
    <div className="flex flex-col items-center bg-servicesBg h-screen">
      {/* Header */}
      <div className="flex items-center bg-white px-5 md:px-12 lg:px-32 pt-3 w-full h-25 shadow-bar">
        {/* Sentryvest Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-44"
          />
        </Link>
      </div>
      {/* Content */}
      <div className="flex flex-col items-center w-full py-20">
        <div className="flex flex-col bg-white shadow-bar border border-homeColor/15 gap-12 px-12 py-12">
          <div className="flex flex-col gap-3">
            <span className="font-gotham text-3xl text-homeColor">
              Admin Access
            </span>
            <p className="text-mobileMenuColor text-base">
              To gain administrative access, please provide your email and
              password
            </p>
          </div>
          <div className="flex flex-col">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email Address is required"),
                password: Yup.string()
                  .min(4, "Password must be at least 4 characters")
                  .required("Password is required"),
              })}
              onSubmit={handleSubmit}
            >
              {({ values, errors, handleChange }) => (
                <Form className="flex flex-col">
                  <div className="grid grid-cols-1 gap-6">
                    <InputWithLabel
                      labelName="Email"
                      inputType="email"
                      inputName="email"
                      placeholder="Enter your email"
                      inputValue={values.email}
                      inputOnChange={(event) => {
                        handleChange(event);
                        onFormChange({ email: event.target.value });
                      }}
                      InputError={errors.email}
                    />
                    <InputWithLabel
                      labelName="Password"
                      inputType="password"
                      inputName="password"
                      placeholder="Enter your password"
                      inputValue={values.password}
                      inputOnChange={(event) => {
                        handleChange(event);
                        onFormChange({ password: event.target.value });
                      }}
                      InputError={errors.password}
                    />
                  </div>
                  <div className="flex flex-col items-end mt-4">
                    <button
                      type="submit"
                      className="flex items-center justify-center text-base border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-35.25 gap-2 h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end"
                    >
                      Next
                      <img src={right} alt="right" />
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
