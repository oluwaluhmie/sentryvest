import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import arrowleft from "../../assets/arrowleft.svg";
import jsPDF from "jspdf";

const LoanPage = () => {
  const location = useLocation();
  const { loanId } = location.state || {};
  const [loan, setLoan] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `https://api.sentryvest.com/v1/api/single_list_loan/${loanId}`,
          headers: { "x-api-key": "30072024" },
        };

        const response = await axios.request(config);
        if (
          response.data &&
          response.data.result &&
          response.data.result.length > 0
        ) {
          setLoan(response.data.result[0]);
        } else {
          setLoan(null);
        }
      } catch (error) {
        setLoan(null);
      }
    };

    if (loanId) {
      fetchContact();
    }
  }, [loanId]);

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Loan Application", 10, 10);
    if (loan) {
      doc.setFont("times", "normal");
      doc.setFontSize(12);
      doc.text(`Name: ${loan.name}`, 10, 20);
      doc.text(`Email Address: ${loan.email_address}`, 10, 30);
      doc.text(`Phone Number: ${loan.phone_number}`, 10, 40);
      doc.text(`Message: ${loan.message}`, 10, 50);
    } else {
      doc.text("Contact not found.", 10, 20);
    }

    doc.save(`Contact_Form_${loan.name}.pdf`);
  };

  if (!loan) {
    return (
      <p className="text-homeColor text-lg p-5">Loan Application not found.</p>
    );
  }

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-col border border-homeColor/15 rounded-xl bg-white shadow-name">
        <div className="flex items-center px-12 pt-3 border-b border-homeColor/15 h-28 shadow-title">
          <p className="font-gotham text-2xl font-bold text-homeColor">
            Loan Application
          </p>
        </div>
        <div className="flex justify-between w-full px-9 py-4.5">
          <div className="flex flex-row gap-2.5 items-center w-full">
            <Link
              to="/adminaccess/loan"
              className="flex items-center gap-1 hover:gap-2"
            >
              <img src={arrowleft} alt="arrowleft" />
              <p className="text-sm text-buttonColor">Back</p>
            </Link>
            <p className="text-homeColor/10">|</p>
            <div className="flex gap-1 items-center">
              <p className="text-homeColor text-sm">Loan Application</p>
              <p className="text-homeColor/10">/</p>
              <p className="text-buttonColor text-sm">{loan.name}</p>
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
      {/* Loan Information */}
      <div className="flex flex-col border border-homeColor/15 rounded-xl bg-white shadow-name">
        <div className="flex flex-col gap-8 px-12 py-8 shadow-title">
          <div className="flex pb-4 border-b border-homeColor/15">
            <p className="text-base font-bold text-buttonColor">
              Loan Information
            </p>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Business Type:
              </p>
              <p className="text-homeColor text-base">{loan.business_type}</p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Principal Loan Amount:
              </p>
              <p className="text-homeColor text-base">
                {loan.principal_loan_amount}
              </p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Obtain Date:
              </p>
              <p className="text-homeColor text-base">{loan.obtain_date}</p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Returning Date:
              </p>
              <p className="text-homeColor text-base">{loan.returning_date}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Personal Information */}
      <div className="flex flex-col border border-homeColor/15 rounded-xl bg-white shadow-name">
        <div className="flex flex-col gap-8 px-12 py-8 shadow-title">
          <div className="flex pb-4 border-b border-homeColor/15">
            <p className="text-base font-bold text-buttonColor">
              Personal Information
            </p>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Full Name:</p>
              <p className="text-homeColor text-base">{loan.name}</p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Phone Number:
              </p>
              <p className="text-homeColor text-base">{loan.phone_number}</p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Email:</p>
              <p className="text-homeColor text-base">{loan.email_address}</p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Passport:</p>
              <p className="text-mobileMenuColor text-sm">
                <img
                  src={loan.passport}
                  alt="loan-passport"
                  className="w-24 h-24"
                />
              </p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Date of Birth:
              </p>
              <p className="text-homeColor text-base">{loan.date_of_birth}</p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Gender:</p>
              <p className="text-homeColor text-base">{loan.gender}</p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Religion:</p>
              <p className="text-homeColor text-base">{loan.religion}</p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Marital Status:
              </p>
              <p className="text-homeColor text-base">{loan.marital_status}</p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2">
              <p className="text-homeColor opacity-75 text-base">
                Home Address:
              </p>
              <p className="text-homeColor text-base">{loan.home_address}</p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Local Government Area:
              </p>
              <p className="text-homeColor text-base">{loan.lga}</p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                State of Origin:
              </p>
              <p className="text-homeColor text-base">{loan.state_of_origin}</p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2">
              <p className="text-homeColor opacity-75 text-base">
                Shop Address:
              </p>
              <p className="text-homeColor text-base">{loan.shop_address}</p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2">
              <p className="text-homeColor opacity-75 text-base">Signature:</p>
              <p className="text-mobileMenuColor text-sm">
                <img
                  src={loan.signature}
                  alt="signature"
                  className="w-24 h-24"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Guarantor Information */}
      <div className="flex flex-col border border-homeColor/15 rounded-xl bg-white shadow-name">
        <div className="flex flex-col gap-8 px-12 py-8 shadow-title">
          <div className="flex pb-4 border-b border-homeColor/15">
            <p className="text-base font-bold text-buttonColor">
              Guarantor Information
            </p>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Full Name:</p>
              <p className="text-homeColor text-base">{loan.guarantor_name}</p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Phone Number:
              </p>
              <p className="text-homeColor text-base">
                {loan.guarantor_phone_number}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Email:</p>
              <p className="text-homeColor text-base">
                {loan.guarantor_email_address}
              </p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Passport:</p>
              <p className="text-mobileMenuColor text-sm">
                <img
                  src={loan.guarantor_passport}
                  alt="loan-guarantor_passport"
                  className="w-24 h-24"
                />
              </p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Occupation:</p>
              <p className="text-homeColor text-base">
                {loan.guarantor_occupation}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Relationship to Applicant:
              </p>
              <p className="text-homeColor text-base">
                {loan.relationship_to_applicant}
              </p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2">
              <p className="text-homeColor opacity-75 text-base">
                Home Address:
              </p>
              <p className="text-homeColor text-base">
                {loan.guarantor_home_address}
              </p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2">
              <p className="text-homeColor opacity-75 text-base">
                Office Address:
              </p>
              <p className="text-homeColor text-base">
                {loan.guarantor_office_address}
              </p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2">
              <p className="text-homeColor opacity-75 text-base">Signature:</p>
              <p className="text-mobileMenuColor text-sm">
                <img
                  src={loan.guarantor_signature}
                  alt="loan-guarantor_signature"
                  className="w-24 h-24"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanPage;
