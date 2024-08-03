import React, { useState } from "react";
import TermsModal from "./TermsModal";

const AcceptTerms = ({ formData, label, checked, onChange }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCheckboxClick = (e) => {
    const newValue = e.target.checked;
    onChange(newValue); // Invoke the onChange callback
  };
  

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onClick={handleCheckboxClick}
          className="mr-3"
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
      <TermsModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default AcceptTerms;
