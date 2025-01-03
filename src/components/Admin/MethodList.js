import React from "react";

const MethodList = ({ methods }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Methods</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b py-2 px-4">Name</th>
            <th className="border-b py-2 px-4">Description</th>
            <th className="border-b py-2 px-4">Sequence</th>
            <th className="border-b py-2 px-4">Mandatory</th>
            <th className="border-b py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {methods.length === 0 ? (
            <tr>
              <td colSpan="5" className="py-4 px-6 text-center text-gray-500">
                No methods added yet.
              </td>
            </tr>
          ) : (
            methods.map((method, index) => (
              <tr key={index}>
                <td className="border-b py-2 px-4">{method.name}</td>
                <td className="border-b py-2 px-4">{method.description}</td>
                <td className="border-b py-2 px-4">{method.sequence}</td>
                <td className="border-b py-2 px-4">
                  {method.mandatory ? "Yes" : "No"}
                </td>
                <td className="border-b py-2 px-4">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>{" "}
                  |{" "}
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MethodList;
