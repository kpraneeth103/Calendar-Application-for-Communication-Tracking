import React from "react";

const Table = ({ data }) => {
  return (
    <table className="table-auto w-full border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-200 px-4 py-2">Select</th>
          <th className="border border-gray-200 px-4 py-2">Company</th>
          <th className="border border-gray-200 px-4 py-2">
            Last 5 Communications
          </th>
          <th className="border border-gray-200 px-4 py-2">Next Due</th>
        </tr>
      </thead>
      <tbody>
        {data.map((company) => (
          <tr key={company.id}>
            <td className="border border-gray-200 px-4 py-2 text-center">
              <input type="checkbox" />
            </td>
            <td className="border border-gray-200 px-4 py-2">{company.name}</td>
            <td className="border border-gray-200 px-4 py-2">
              {/* Check if lastCommunications is an array before mapping */}
              {Array.isArray(company.lastCommunications) && company.lastCommunications.length > 0 ? (
                company.lastCommunications.map((comm, index) => (
                  <p key={index}>
                    {comm.method} - {comm.date}
                  </p>
                ))
              ) : (
                <p>No communications</p> // Fallback if no communications
              )}
            </td>
            <td className="border border-gray-200 px-4 py-2">
              {company.nextDue ? (
                `${company.nextDue.method} - ${company.nextDue.date}`
              ) : (
                "No due date"
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
