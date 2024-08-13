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
    if (investment) {
      const doc = new jsPDF();
      const lineHeight = 10;

      // Function to add bold text
      const addBoldText = (text, x, y) => {
        doc.setFont("times", "bold");
        doc.setFontSize(12);
        doc.text(text, x, y);
        doc.setFont("times", "normal"); // Reset font to normal
      };

      doc.text(`Investment Application`, 10, lineHeight);
      // Investment Details
      addBoldText("Investment Details", 10, lineHeight + 10);
      doc.text(`Amount Range: ${investment.amount_range}`, 10, lineHeight + 20);
      doc.text(`Amount: ${investment.amount}`, 10, lineHeight + 30);
      doc.text(
        `Investment Duration: ${investment.duration}`,
        10,
        lineHeight + 40
      );
      doc.text(
        `Relocation Country: ${investment.relocation_country}`,
        10,
        lineHeight + 50
      );
      doc.text(`Start Date: ${investment.start_date}`, 10, lineHeight + 60);
      doc.text(`End Date: ${investment.end_date}`, 10, lineHeight + 70);
      doc.text(
        `Reference Letter Receiver's Address: ${investment.reference_letter_address}`,
        10,
        lineHeight + 80
      );

      // Personal Information
      addBoldText("Personal Information", 10, lineHeight + 90);
      doc.text(`Title: ${investment.title}`, 10, lineHeight + 100);
      doc.text(`Full Name: ${investment.full_name}`, 10, lineHeight + 110);
      doc.text(`Phone Number: ${investment.phone_number}`, 10, lineHeight + 120);
      doc.text(
        `Email Address: ${investment.email_address}`,
        10,
        lineHeight + 130
      );
      doc.text(`Passport: `, 10, lineHeight + 140);
      // Create a clickable link for the passport image
      doc.setTextColor(97, 179, 71);
      doc.textWithLink("Click here to view passport", 30, lineHeight + 140, {
        url: investment.passport,
      });
      doc.setTextColor(0, 0, 0); // Reset color to black

      doc.text(
        `Marital Status: ${investment.marital_status}`,
        10,
        lineHeight + 150
      );
      doc.text(
        `Date of Birth: ${investment.date_of_birth}`,
        10,
        lineHeight + 160
      );
      doc.text(`BVN: ${investment.bvn}`, 10, lineHeight + 170);
      doc.text(
        `Home Address: ${investment.home_address}`,
        10,
        lineHeight + 180
      );
      doc.text(`Local Government: ${investment.lga}`, 10, lineHeight + 190);
      doc.text(
        `State of Origin: ${investment.state_of_origin}`,
        10,
        lineHeight + 200
      );
      doc.text(
        `Place of Birth: ${investment.place_of_birth}`,
        10,
        lineHeight + 210
      );
      doc.text(
        `Occupation: ${investment.occupation}`,
        10,
        lineHeight + 220
      );
      doc.text(`Passport Data Page: `, 10, lineHeight + 230);
      // Create a clickable link for the image
      doc.setTextColor(97, 179, 71);
      doc.textWithLink("Click here to view international passport", 50, lineHeight + 230, {
        url: investment.signature,
      });
      doc.setTextColor(0, 0, 0); // Reset color to black

      doc.text(`Signature: `, 10, lineHeight + 240);
      // Create a clickable link for the image
      doc.setTextColor(97, 179, 71);
      doc.textWithLink("Click here to view signature", 30, lineHeight + 240, {
        url: investment.signature,
      });
      doc.setTextColor(0, 0, 0); // Reset color to black

      doc.addPage();
      doc.text(`Investment Application - 1`, 10, lineHeight);

      // Next of Kin Information
      addBoldText("Guarantor Information", 10, lineHeight + 10);
      doc.text(`Title: ${investment.next_of_kin_title}`, 10, lineHeight + 20);
      doc.text(`Full Name: ${investment.next_of_kin_full_name}`, 10, lineHeight + 30);
      doc.text(
        `Phone Number: ${investment.next_of_kin_phone_number}`,
        10,
        lineHeight + 40
      );
      doc.text(
        `Email Address: ${investment.next_of_kin_email_address}`,
        10,
        lineHeight + 50
      );
      doc.text(
        `Occupation: ${investment.next_of_kin_occupation}`,
        10,
        lineHeight + 60
      );
      doc.text(
        `Relationship: ${investment.next_of_kin_relationship}`,
        10,
        lineHeight + 70
      );
      doc.text(`Signature: `, 10, lineHeight + 80);
      // Create a clickable link for the image
      doc.setTextColor(97, 179, 71);
      doc.textWithLink(
        "Click here to view Guarantor signature",
        30,
        lineHeight + 80,
        {
          url: investment.next_of_kin_signature,
        }
      );
      doc.setTextColor(0, 0, 0); // Reset color to black

      doc.save(`Investment_Application_${investment.full_name}.pdf`);
    }
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
                Relationship:
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
