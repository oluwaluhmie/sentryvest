import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import arrowleft from "../../assets/arrowleft.svg";
import jsPDF from "jspdf";

const InvestmentPage = () => {
  const location = useLocation();
  const { investmentId } = location.state || {};
  const [investment, setInvestment] = useState(null);

  useEffect(() => {
    const fetchInvestment = async () => {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `https://api.sentryvest.com/v1/api/single_investment/${investmentId}`,
          headers: { "x-api-key": "30072024" },
        };

        const response = await axios.request(config);
        if (
          response.data &&
          response.data.result &&
          response.data.result.length > 0
        ) {
          setInvestment(response.data.result[0]);
        } else {
          setInvestment(null);
        }
      } catch (error) {
        setInvestment(null);
      }
    };

    if (investmentId) {
      fetchInvestment();
    }
  }, [investmentId]);

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Investment Application", 10, 10);
    if (investment) {
      doc.setFont("times", "normal");
      doc.setFontSize(12);
      doc.text(`Name: ${investment.name}`, 10, 20);
      doc.text(`Email Address: ${investment.email_address}`, 10, 30);
      doc.text(`Phone Number: ${investment.phone_number}`, 10, 40);
      doc.text(`Message: ${investment.message}`, 10, 50);
    } else {
      doc.text("Contact not found.", 10, 20);
    }

    doc.save(`Contact_Form_${investment.name}.pdf`);
  };

  if (!investment) {
    return (
      <p className="text-homeColor text-lg p-5">
        Investment Application not found.
      </p>
    );
  }

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-col border border-homeColor/15 rounded-xl bg-white shadow-name">
        <div className="flex items-center px-12 pt-3 border-b border-homeColor/15 h-28 shadow-title">
          <p className="font-gotham text-2xl font-bold text-homeColor">
            Investment Application
          </p>
        </div>
        <div className="flex justify-between w-full px-9 py-4.5">
          <div className="flex flex-row gap-2.5 items-center w-full">
            <Link
              to="/adminaccess/investment"
              className="flex items-center gap-1 hover:gap-2"
            >
              <img src={arrowleft} alt="arrowleft" />
              <p className="text-sm text-buttonColor">Back</p>
            </Link>
            <p className="text-homeColor/10">|</p>
            <div className="flex gap-1 items-center">
              <p className="text-homeColor text-sm">Investment Application</p>
              <p className="text-homeColor/10">/</p>
              <p className="text-buttonColor text-sm">{investment.full_name}</p>
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
      {/* Investment Details */}
      <div className="flex flex-col border border-homeColor/15 rounded-xl bg-white shadow-name">
        <div className="flex flex-col gap-8 px-12 py-8 shadow-title">
          <div className="flex pb-4 border-b border-homeColor/15">
            <p className="text-base font-bold text-buttonColor">
              Investment Details
            </p>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Amount Range:
              </p>
              <p className="text-homeColor text-base">
                {investment.amount_range}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Amount:</p>
              <p className="text-homeColor text-base">{investment.amount}</p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Investment Duration:
              </p>
              <p className="text-homeColor text-base">{investment.duration}</p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Relocation Country:
              </p>
              <p className="text-homeColor text-base">
                {investment.relocation_country}
              </p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Start Date:</p>
              <p className="text-homeColor text-base">
                {investment.start_date}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">End Date:</p>
              <p className="text-homeColor text-base">{investment.end_date}</p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Reference Letter Receiver's Address:
              </p>
              <p className="text-homeColor text-base">
                {investment.reference_letter_address}
              </p>
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
              <p className="text-homeColor opacity-75 text-base">Title:</p>
              <p className="text-homeColor text-base">{investment.title}</p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Full Name:</p>
              <p className="text-homeColor text-base">{investment.full_name}</p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Phone Number:
              </p>
              <p className="text-homeColor text-base">
                {investment.phone_number}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Email:</p>
              <p className="text-homeColor text-base">
                {investment.email_address}
              </p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Passport:</p>
              <p className="text-mobileMenuColor text-sm">
                <img
                  src={investment.passport}
                  alt="investment-passport"
                  className="w-24 h-24"
                />
              </p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Marital Status:
              </p>
              <p className="text-homeColor text-base">
                {investment.marital_status}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Date of Birth:
              </p>
              <p className="text-homeColor text-base">
                {investment.date_of_birth}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">BVN:</p>
              <p className="text-homeColor text-base">{investment.bvn}</p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2">
              <p className="text-homeColor opacity-75 text-base">
                Home Address:
              </p>
              <p className="text-homeColor text-base">
                {investment.home_address}
              </p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Local Government Area:
              </p>
              <p className="text-homeColor text-base">{investment.lga}</p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                State of Origin:
              </p>
              <p className="text-homeColor text-base">
                {investment.state_of_origin}
              </p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Place of Birth:
              </p>
              <p className="text-homeColor text-base">
                {investment.place_of_birth}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Occupation:</p>
              <p className="text-homeColor text-base">
                {investment.occupation}
              </p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Passport Data Page:
              </p>
              <p className="text-homeColor text-base">
                <img
                  src={investment.international_passport_page}
                  alt="passport data page"
                  className="w-24 h-24"
                />
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-homeColor opacity-75 text-base">Signature:</p>
              <p className="text-mobileMenuColor text-sm">
                <img
                  src={investment.signature}
                  alt="signature"
                  className="w-24 h-24"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Next of Kin Information */}
      <div className="flex flex-col border border-homeColor/15 rounded-xl bg-white shadow-name">
        <div className="flex flex-col gap-8 px-12 py-8 shadow-title">
          <div className="flex pb-4 border-b border-homeColor/15">
            <p className="text-base font-bold text-buttonColor">
              Next of Kin Information
            </p>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Title:</p>
              <p className="text-homeColor text-base">
                {investment.next_of_kin_title}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Full Name:</p>
              <p className="text-homeColor text-base">
                {investment.next_of_kin_full_name}
              </p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Phone Number:
              </p>
              <p className="text-homeColor text-base">
                {investment.next_of_kin_phone_number}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Email:</p>
              <p className="text-homeColor text-base">
                {investment.next_of_kin_email_address}
              </p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">Occupation:</p>
              <p className="text-homeColor text-base">
                {investment.next_of_kin_occupation}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-80">
              <p className="text-homeColor opacity-75 text-base">
                Relationship to Applicant:
              </p>
              <p className="text-homeColor text-base">
                {investment.next_of_kin_relationship}
              </p>
            </div>
          </div>
          <div className="flex gap-6 pb-6 border-b border-homeColor/5">
            <div className="flex flex-col gap-2">
              <p className="text-homeColor opacity-75 text-base">Signature:</p>
              <p className="text-mobileMenuColor text-sm">
                <img
                  src={investment.next_of_kin_signature}
                  alt="investment-next_of_kin_signature"
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

export default InvestmentPage;
