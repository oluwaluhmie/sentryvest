import React from "react";
import Apply from "./Apply";
import ApplyPersonal from "./ApplyPersonal";
import ApplyContactDetails from "./ApplyContactDetails";
import ApplyWorkStatus from "./ApplyWorkStatus";
import ApplyNext from "./ApplyNext";

const FormComponent = ({ activeSection }) => {
  const components = [
    <Apply />, // Loan Details Form
    <ApplyPersonal />, // Personal Information Form
    <ApplyContactDetails />, // Contact Details Form
    <ApplyWorkStatus />, // Work Status Form
    <ApplyNext />, // Next of Kin Information Form
  ];

  return <div>{components[activeSection]}</div>;
};

export default FormComponent;
