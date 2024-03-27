import React from "react";
import { Field, ErrorMessage } from "formik";

const AcceptTerms = () => {
  return (
    <div>
      <Field type="checkbox" name="acceptTerms" className="mr-2" />
      <label htmlFor="acceptTerms" className="font-bold">
        I accept the Terms and Conditions
      </label>
      <ErrorMessage name="acceptTerms" component="div" />
    </div>
  );
};

export default AcceptTerms;

