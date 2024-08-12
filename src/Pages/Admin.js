import React from "react";
import axios from "axios";
import logo from "../assets/SentryVest.png";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../Components/InputWithLabel";

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
      url: "https://api.sentryvest.com/v1/api/admin_login",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "30072024",
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
    <div className="flex flex-col items-center bg-loginbg bg-cover">
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
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-8 w-300 pt-24 pb-48">
          <div className="flex flex-col gap-2 pb-6 border-b border-homeColor/15">
            <span className="font-gotham text-4xl text-homeColor">
              Admin Dashboard
            </span>
            <p className="text-homeColor text-base">
              Provide your email and password to gain access
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
                <Form className="flex flex-col gap-12 px-10 py-12 border border-homeColor/15 rounded-xl w-120">
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
                  <div className="flex flex-col">
                    <button
                      type="submit"
                      className="flex items-center justify-center bg-buttonColor text-white text-base border border-homeColor/15 rounded-xl px-6 py-3 w-full shadow-button"
                    >
                      Login
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
