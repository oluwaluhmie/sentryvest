import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: "https://api.sentryvest.com/v1/api/list_contact_us",
          headers: {
            "x-api-key": "30072024",
          },
        };

        const response = await axios.request(config);

        if (response.data && response.data.result) {
          setContacts(response.data.result);
          setTotalPages(Math.ceil(response.data.result.length / 8)); // Assuming 10 items per page
        } else {
          console.error("API response does not contain result property");
        }
      } catch (error) {
        console.error("Error fetching individuals:", error);
      }
    };

    fetchContacts();
  }, [currentPage]);

  return (
    <div className="flex flex-col w-full border border-homeColor/15 rounded-xl">
      {/* Header */}
      <div className="flex items-center bg-white px-12 pt-3 border-b border-homeColor/15 shadow-title h-28">
        <p className="font-gotham text-2xl text-homeColor font-bold">
          Contact Leads
        </p>
      </div>
      {/* Content */}
      <div className="flex flex-col justify-center px-8 py-8">
        <div className="flex flex-col gap-6">
          {/* Table */}
          <div className="flex">
            <div className="flex flex-row w-full border border-homeColor/15 rounded-xl">
              <table className="w-full shadow-title">
                {/* Table Head */}
                <thead className="flex flex-row items-start bg-buttonColor/10 h-12">
                  <tr className="flex justify-between items-center font-gotham w-full text-sm h-full text-homeColor">
                    <th className="flex justify-center items-center w-14">
                      S/N
                    </th>
                    <th className="flex justify-start w-48 px-6">Name</th>
                    <th className="flex justify-start w-37.5 px-6">
                      Phone number
                    </th>
                    <th className="flex justify-start w-40 px-6">
                      Email address
                    </th>
                    <th className="flex justify-start w-56 px-6">Message</th>
                    <th className="flex justify-start w-32 px-6">Action</th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                  {contacts
                    .slice((currentPage - 1) * 8, currentPage * 8)
                    .map((contact, index) => (
                      <tr
                        key={contact.id}
                        className="flex flex-row justify-between bg-white h-16 w-full items-center text-sm text-homeColor"
                      >
                        <td className="flex justify-center items-center w-14">
                          {index + 1}
                        </td>
                        <td className="flex justify-start w-48 px-6">
                          {contact.name}
                        </td>
                        <td className="flex justify-start w-37.5 px-6">
                          {contact.phone_number}
                        </td>
                        <td className="flex justify-start w-40 px-6">
                          <p className="overflow-hidden">
                            {contact.email_address}
                          </p>
                        </td>
                        <td className="flex justify-start w-56 px-6">
                          <p className="h-5 overflow-hidden">
                            {contact.message}
                          </p>
                        </td>
                        <td className="flex justify-start text-buttonColor w-32 px-6">
                          <Link
                            to={`/adminaccess/contact/${contact.id}`}
                            state={{ contactId: contact.id }}
                          >
                            view more
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Pagination & Buttons */}
          <div className="flex flex-row justify-between">
            <div className="flex gap-1">
              <p className="text-menuHover text-lg">{currentPage}</p>
              <p className="text-textColor text-lg">/</p>
              <p className="text-textColor text-lg">{totalPages}</p>
            </div>
            <div className="flex gap-5">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex gap-1.5 items-center justify-center h-12 w-37.5 bg-white text-buttonColor border border-buttonColor rounded-xl px-5 py-2.5 shadow-button disabled:opacity-50"
              >
                <img src={left} alt="left" />
                Previous
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="flex gap-1.5 items-center justify-center h-12 w-37.5 bg-buttonColor text-white border border-homeColor/15 rounded-xl px-5 py-2.5 shadow-button disabled:opacity-50"
              >
                Next
                <img src={right} alt="right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;