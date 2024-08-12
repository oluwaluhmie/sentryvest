import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [data, setData] = useState({
    contactLeads: 0,
    investmentApplications: 0,
    loanApplications: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://api.sentryvest.com/v1/api/admin_summary",
        headers: {
          "x-api-key": "30072024",
        },
      };

      try {
        const response = await axios.request(config);
        const responseData = response.data.result; // Access 'result' object
        setData({
          contactLeads: responseData.noOfMessages || 0,
          investmentApplications: responseData.noOfInvestments || 0,
          loanApplications: responseData.noOfLoans || 0,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full border border-homeColor/15 rounded-xl shadow-name">
      {/* Header */}
      <div className="flex items-center bg-white px-12 pt-3 border-b border-homeColor/15 shadow-title h-28">
        <p className="font-gotham text-2xl text-homeColor font-bold">Home</p>
      </div>
      {/* Content */}
      <div className="flex flex-col p-8">
        <div className="flex flex-row gap-4">
          {/* Loan Applications */}
          <div className="flex flex-col justify-between h-53 w-89 px-6 py-7 border border-homeColor/15 bg-white rounded-2xl shadow-title">
            <div className="pb-4 border-b border-homeColor/15">
              <p className="text-buttonColor text-base font-bold">
                Loan Applications
              </p>
            </div>
            <span className="font-gotham text-5xl font-bold text-homeColor">
              {data.loanApplications}
            </span>
          </div>
          {/* Investment Applications */}
          <div className="flex flex-col justify-between h-53 w-89 px-6 py-7 border border-homeColor/15 bg-white rounded-2xl shadow-title">
            <div className="pb-4 border-b border-homeColor/15">
              <p className="text-buttonColor text-base font-bold">
                Investment Applications
              </p>
            </div>
            <span className="font-gotham text-5xl font-bold text-homeColor">
              {data.investmentApplications}
            </span>
          </div>
          {/* Contact Leads */}
          <div className="flex flex-col justify-between h-53 w-89 px-6 py-7 border border-homeColor/15 bg-white rounded-2xl shadow-title">
            <div className="pb-4 border-b border-homeColor/15">
              <p className="text-buttonColor text-base font-bold">
                Contact Leads
              </p>
            </div>
            <span className="font-gotham text-5xl font-bold text-homeColor">
              {data.contactLeads}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
