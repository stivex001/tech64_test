"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const UserTables = ({ data }) => {
  const itemsPerPage = 5; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate range of items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data array to get the items for the current page
  const userData = data.slice(startIndex, endIndex);

  return (
    <div className="mt-5 relative w-full flex flex-col mb-6">
      <div className="block bg-transparent w-full overflow-x-auto ">
        <table className="w-full">
          <thead>
            <tr className="border border-solid border-l-0 bg-[#f4f8fa]">
              <th className="text-md text-[#555884] px-6 py-3">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="cursor-pointer"
                  />
                  <span className="">Name</span>
                  <AiOutlineArrowDown />
                </div>
              </th>
              <th className="text-md text-[#555884] px-6 py-3">Status</th>
              <th className="text-md text-[#555884] px-6 py-3">Email</th>
              <th className="text-md text-[#555884] px-6 py-3">Role</th>
              <th className="text-md text-[#555884] px-6 py-3">Rating</th>
              <th className="text-md text-[#555884] px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr className="border border-solid border-l-0 " key={user.id}>
                <td className="text-sm px-6 py-3 flex gap-3 items-center">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="cursor-pointer"
                  />
                  <Image
                    src=""
                    alt=""
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm text-[rgb(23, 25, 35)] truncate font-medium">
                      {user.name}
                    </p>
                    <span className="text-sm text-gray-700  truncate font-medium">
                      @{user.username}
                    </span>
                  </div>
                </td>
                <td className="text-md px-6 py-3">
                  <span className=" py-[2px] px-2 bg-[#6cfcd5] text-sm font-bold rounded-sm text-[#22543d]">
                    Active
                  </span>
                </td>
                <td className="text-sm px-6 py-3 truncate text-[#4a5568]">
                  {user.email}
                </td>
                <td className="text-sm px-6 py-3 truncate text-[#4a5568]">
                  {user.company.name}
                </td>
                <td className="text-sm px-6 py-3 truncate">*****</td>
                <td className="text-sm px-6 py-3 truncate">
                  <div className="flex items-center gap-4 ">
                    <RiDeleteBin5Line
                      size={20}
                      className="bg-white cursor-pointer"
                    />
                    <FiEdit2 size={20} className="bg-white cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination controls and information */}
        <div className="flex justify-between items-center my-4 ">
          <p className="text-sm text-gray-600">
            Showing {startIndex + 1} to {Math.min(endIndex, data.length)} of{" "}
            {data.length} results
          </p>
          <div>
            <button
              className="px-4 py-2 mx-1 bg-gray-300 rounded-md"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 mx-1 bg-gray-300 rounded-md"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={endIndex >= data.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTables;
