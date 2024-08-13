import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import arrowleft from "../../assets/arrowleft.svg";
import jsPDF from "jspdf";

const ContactPage = () => {
  const location = useLocation();
  const { contactId } = location.state || {};
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `https://api.sentryvest.com/v1/api/single_message/${contactId}`,
          headers: { "x-api-key": "30072024" },
        };

        const response = await axios.request(config);
        if (
          response.data &&
          response.data.result &&
          response.data.result.length > 0
        ) {
          setContact(response.data.result[0]);
        } else {
          setContact(null);
        }
      } catch (error) {
        setContact(null);
      }
    };

    if (contactId) {
      fetchContact();
    }
  }, [contactId]);

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Contact Us Form", 10, 10);
    if (contact) {
      doc.setFont("times", "normal");
      doc.setFontSize(12);
      doc.text(`Name: ${contact.name}`, 10, 20);
      doc.text(`Email Address: ${contact.email_address}`, 10, 30);
      doc.text(`Phone Number: ${contact.phone_number}`, 10, 40);
      doc.text(`Message: ${contact.message}`, 10, 50);
    } else {
      doc.text("Contact not found.", 10, 20);
    }

    doc.save(`Contact_Form_${contact.name}.pdf`);
  };

  if (!contact) {
    return <p className="text-homeColor text-lg p-5">Contact not found.</p>;
  }

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-col border border-homeColor/15 rounded-xl bg-white shadow-name">
        <div className="flex items-center px-12 pt-3 border-b border-homeColor/15 h-28 shadow-title">
          <p className="font-gotham text-2xl font-bold text-homeColor">
            Contact us Form
          </p>
        </div>
        <div className="flex justify-between w-full px-9 py-4.5">
          <div className="flex flex-row gap-2.5 items-center w-full">
            <Link
              to="/adminaccess/contact"
              className="flex items-center gap-1 hover:gap-2"
            >
              <img src={arrowleft} alt="arrowleft" />
              <p className="text-sm text-buttonColor">Back</p>
            </Link>
            <p className="text-homeColor/10">|</p>
            <div className="flex gap-1 items-center">
              <p className="text-homeColor text-sm">Contact Us Form</p>
              <p className="text-homeColor/10">/</p>
              <p className="text-buttonColor text-sm">{contact.name}</p>
            </div>
          </div>
          <button
            onClick={downloadPDF}
            className="flex items-center justify-center rounded-xl text-sm border border-homeColor/15 text-white bg-buttonColor w-48.75 h-12"
          >
            Download Details
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col border border-homeColor/15 rounded-xl bg-white shadow-name">
        <div className="flex flex-col gap-8 px-12 py-8 shadow-title">
          <div className="flex pb-4 border-b border-homeColor/15">
            <p className="text-base font-bold text-buttonColor">Form Details</p>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Name:</p>
              <p className="text-homeColor text-base">{contact.name}</p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Phone Number:</p>
              <p className="text-homeColor text-base">{contact.phone_number}</p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Email Address:</p>
              <p className="text-homeColor text-base">{contact.email_address}</p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-150">
              <p className="text-homeColor opacity-75 text-base">Message:</p>
              <p className="text-homeColor text-base">{contact.message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
