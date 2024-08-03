import about from "../assets/about.png";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../Components/InputWithLabel";

const About = ({ onFormChange = () => {} }) => {
  return (
    <div id="aboutSection" className="flex flex-col items-center bg-servicesBg">
      <div className="flex flex-col items-center w-107.5 md:w-200 lg:w-341.5 overflow-hidden">
        <div className="pt-12 lg:pt-32 pb-16 lg:pb-32 w-97.5 md:w-176 lg:w-300">
          <div className="flex flex-col gap-8 lg:flex lg:flex-row lg:items-center lg:gap-x-24 lg:w-full">
            <div className="flex flex-col w-full lg:w-1/2 gap-6">
              <span className="text-2xl md:text-3xl lg:text-4xl font-gotham text-homeColor">
                About us
              </span>
              <img src={about} alt="about" className="w-48 h-48" />
              <p className="text-homeColor text-base lg:text-lg font-poppins md:w-128">
                At Sentryvest, we believe in the power of financial inclusion to
                transform communities and drive positive change. Our mission is
                to empower individuals and businesses in underserved areas to
                build and grow wealth through strategic investments and
                responsible lending practices.
              </p>
            </div>
            {/* Form */}
            <Formik
              initialValues={{
                name: "",
                phoneNumber: "",
                email: "",
                message: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Name is required"),
                phoneNumber: Yup.string()
                  .matches(/^\d{11}$/, "Phone number must be exactly 11 digits")
                  .required("Phone number is required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email is required"),
                message: Yup.string().required("Message is required"),
              })}
              onSubmit={(values, { resetForm }) => {
                // Handle form submission here
                console.log(values);
                // To send the form details to an email address, you need to use a backend service.
                // You can make a POST request to your backend endpoint here passing the form values.
                // For demonstration purposes, I'll just log the form values.
                resetForm(); // clear form after submission
              }}
            >
              {({ values, errors, handleChange }) => (
                <Form className="flex flex-col gap-6 md:gap-8 w-full lg:w-1/2 lg:px-8 py-5">
                  <div className="grid grid-cols-1 gap-5 md:gap-6">
                    <div className="grid gap-5 md:grid md:grid-cols-2 md:gap-x-6">
                      <InputWithLabel
                        labelName="Name"
                        inputType="text"
                        inputName="name"
                        placeholder="Enter your name"
                        inputValue={values.name}
                        inputOnChange={(event) => {
                          handleChange(event);
                          onFormChange({ name: event.target.value });
                        }}
                        InputError={errors.name}
                      />
                      <InputWithLabel
                        labelName="Phone number"
                        inputType="text"
                        inputName="phoneNumber"
                        placeholder="+234 (806) 000-0000"
                        inputValue={values.phoneNumber}
                        inputOnChange={(event) => {
                          handleChange(event);
                          onFormChange({ phoneNumber: event.target.value });
                        }}
                        InputError={errors.phoneNumber}
                      />
                    </div>
                    <InputWithLabel
                      labelName="Email Address"
                      inputType="email"
                      inputName="email"
                      placeholder="e.g. segun@gmail.com"
                      inputValue={values.email}
                      inputOnChange={(event) => {
                        handleChange(event);
                        onFormChange({ email: event.target.value });
                      }}
                      InputError={errors.email}
                    />
                    <InputWithLabel
                      labelName="Message"
                      inputType="textarea"
                      inputName="message"
                      placeholder="Enter your message here"
                      inputValue={values.message}
                      inputOnChange={(event) => {
                        handleChange(event);
                        onFormChange({ message: event.target.value });
                      }}
                      InputError={errors.message}
                    />
                    <button
                      type="submit"
                      className="flex justify-center items-center px-8 py-3 text-white text-lg border-2 bg-buttonColor hover:bg-homeColor  rounded-xl"
                    >
                      Send
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

export default About;
