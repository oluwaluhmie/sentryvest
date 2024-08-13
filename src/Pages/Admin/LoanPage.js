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
    if (loan) {
      const doc = new jsPDF();
      const lineHeight = 5;

      // Function to add bold text
      const addBoldText = (text, x, y) => {
        doc.setFont("times", "bold");
        doc.setFontSize(12);
        doc.text(text, x, y);
        doc.setFont("times", "normal"); // Reset font to normal
      };

      doc.text(`Loan Application`, 10, lineHeight);
      // Loan Details
      addBoldText("Loan Details", 10, lineHeight + 10);
      doc.text(`Business Type: ${loan.business_type}`, 10, lineHeight + 20);
      doc.text(
        `Principal Loan Amount: ${loan.principal_loan_amount}`,
        10,
        lineHeight + 30
      );
      doc.text(`Obtain Date: ${loan.obtain_date}`, 10, lineHeight + 40);
      doc.text(`Returning Date: ${loan.returning_date}`, 10, lineHeight + 50);

      // Personal Information
      addBoldText("Personal Information", 10, lineHeight + 60);
      doc.text(`Full Name: ${loan.name}`, 10, lineHeight + 70);
      doc.text(`Phone Number: ${loan.phone_number}`, 10, lineHeight + 80);
      doc.text(`Email Address: ${loan.email_address}`, 10, lineHeight + 90);
      doc.text(`Passport: `, 10, lineHeight + 100);
      // Create a clickable link for the image
      doc.setTextColor(97, 179, 71);
      doc.textWithLink("Click here to view passport", 30, lineHeight + 100, {
        url: loan.passport,
      });
      doc.setTextColor(0, 0, 0); // Reset color to black

      doc.text(`Date of Birth: ${loan.date_of_birth}`, 10, lineHeight + 110);
      doc.text(`Gender: ${loan.gender}`, 10, lineHeight + 120);
      doc.text(`Religion: ${loan.religion}`, 10, lineHeight + 130);
      doc.text(`Marital Status: ${loan.marital_status}`, 10, lineHeight + 140);
      doc.text(`Home Address: ${loan.home_address}`, 10, lineHeight + 150);
      doc.text(
        `Local Government: ${loan.lga}`,
        10,
        lineHeight + 160
      );
      doc.text(`State of Origin: ${loan.state_of_origin}`, 10, lineHeight + 170);
      doc.text(`Shop Address: ${loan.shop_address}`, 10, lineHeight + 180);
      doc.text(`Signature: `, 10, lineHeight + 190);
      // Create a clickable link for the image
      doc.setTextColor(97, 179, 71);
      doc.textWithLink("Click here to view signature", 30, lineHeight + 190, {
        url: loan.signature,
      });
      doc.setTextColor(0, 0, 0); // Reset color to black

      // Guarantor Information
      addBoldText("Guarantor Information", 10, lineHeight + 200);
      doc.text(`Full Name: ${loan.guarantor_name}`, 10, lineHeight + 210);
      doc.text(
        `Phone Number: ${loan.guarantor_phone_number}`,
        10,
        lineHeight + 220
      );
      doc.text(
        `Email Address: ${loan.guarantor_email_address}`,
        10,
        lineHeight + 230
      );
      doc.text(`Passport: `, 10, lineHeight + 240);
      // Create a clickable link for the image
      doc.setTextColor(97, 179, 71);
      doc.textWithLink("Click here to view Guarantor passport", 30, lineHeight + 240, {
        url: loan.guarantor_passport,
      });
      doc.setTextColor(0, 0, 0); // Reset color to black
      doc.text(
        `Occupation: ${loan.guarantor_occupation}`,
        10,
        lineHeight + 250
      );
      doc.text(
        `Relationship: ${loan.relationship_to_applicant}`,
        10,
        lineHeight + 260
      );
      doc.text(
        `Home Address: ${loan.guarantor_home_address}`,
        10,
        lineHeight + 270
      );
      doc.text(
        `Shop Address: ${loan.guarantor_office_address}`,
        10,
        lineHeight + 280
      );
      doc.text(`Signature: `, 10, lineHeight + 290);
      // Create a clickable link for the image
      doc.setTextColor(97, 179, 71);
      doc.textWithLink("Click here to view Guarantor signature", 30, lineHeight + 290, {
        url: loan.guarantor_signature,
      });
      doc.setTextColor(0, 0, 0); // Reset color to black

      doc.save(
        `Loan_Application_${loan.name}.pdf`
      );
    }
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
      {/* Loan Details */}
      <div className="flex flex-col border border-homeColor/15 rounded-xl bg-white shadow-name">
        <div className="flex flex-col gap-8 px-12 py-8 shadow-title">
          <div className="flex pb-4 border-b border-homeColor/15">
            <p className="text-base font-bold text-buttonColor">Loan Details</p>
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
