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

  const handleCheckboxClick = (e) => {
    // Prevent event propagation to avoid triggering other input boxes
    e.stopPropagation();
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          {...field}
          {...props}
          onClick={handleCheckboxClick}
        />
        {label}
        {"I accept the "}
        <span
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={openModal}
        >
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
