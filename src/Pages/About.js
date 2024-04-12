import about from "../assets/about.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const About = () => {
  return (
    <div
      id="aboutSection"
      className="flex flex-col md:flex-row justify-between items-center px-4 py-8 mt-20 bg-servicesBg gap-8 md:px-24 md:py-10 md:gap-48"
    >
      <div className="flex flex-col w-full pt-10 md:w-1/2 gap-3">
        <span className="text-homeColor text-2xl font-bold md:text-left md:text-4xl">
          About us
        </span>
        <img src={about} alt="" className="w-full md:w-fit" />
        <p className="text-homeColor font-DMsans text-base text-justify md:text-lg">
          At Sentryvest, we believe in the power of financial inclusion to
          transform communities and drive positive change. Our mission is to
          empower individuals and businesses in underserved areas to build and
          grow wealth through strategic investments and responsible lending
          practices.
        </p>
      </div>
      <Formik
        initialValues={{
          name: "",
          number: "",
          email: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          number: Yup.string()
            .matches(/^\d{11}$/, "Phone number must be exactly 11 digits")
            .required("Phone number is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
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
        {({ errors, touched }) => (
          <Form className="flex flex-col justify-end items-center w-full md:w-1/2 gap-4 px-4 py-4 md:py-8 md:px-10">
            <div className="flex flex-col items-start gap-2 self-stretch w-full">
              <label className="text-homeColor text-base font-bold">Name</label>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className="h-12 rounded-xl border border-buttonColor self-stretch px-3"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600"
              />
            </div>
            <div className="flex flex-col items-start gap-2 self-stretch w-full">
              <label className="text-homeColor text-base font-bold">
                Phone number
              </label>
              <Field
                type="text"
                name="number"
                placeholder="Phone number"
                className="h-12 rounded-xl border border-buttonColor self-stretch px-3"
              />
              <ErrorMessage
                name="number"
                component="div"
                className="text-red-600"
              />
            </div>
            <div className="flex flex-col items-start gap-2 self-stretch w-full">
              <label className="text-homeColor text-base font-bold">
                Email address
              </label>
              <Field
                type="email"
                name="email"
                placeholder="you@example.com"
                className="h-12 rounded-xl border border-buttonColor self-stretch px-3"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600"
              />
            </div>
            <button
              type="submit"
              className="flex justify-center items-center gap-3 px-8 py-3 rounded-xl text-white font-DMsans text-base uppercase border bg-buttonColor hover:bg-homeColor md:px-9 md:text-xl"
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default About;
