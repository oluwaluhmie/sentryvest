import React, { useState } from "react";
import { useField } from "formik";
import TermsModal from "./TermsModal";

const AcceptTerms = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}{"I accept the "}
        <span style={{ textDecoration: "underline", cursor: "pointer" }} onClick={openModal}>
          Terms and Conditions
        </span>
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}

      <TermsModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default AcceptTerms;
