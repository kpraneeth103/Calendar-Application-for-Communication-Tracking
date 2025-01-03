import React, { useState } from "react";

const CompanyTable = ({ companies = [], onUpdate, onAdd, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentCompany, setCurrentCompany] = useState(null);

  // Handle the form submission (both add and update)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      onUpdate(currentCompany); // Update the existing company
    } else {
      onAdd({
        ...currentCompany,
        id: Date.now(), // Generate unique ID for new company
        emails: currentCompany.emails.split(",").map((email) => email.trim()), // Parse emails
        phoneNumbers: currentCompany.phoneNumbers
          .split(",")
          .map((phone) => phone.trim()), // Parse phone numbers
      });
    }
    setShowModal(false);
    setIsEdit(false);
    setCurrentCompany(null);
  };

  // Open the modal for editing an existing company
  const openEditModal = (company) => {
    setCurrentCompany({ ...company });
    setIsEdit(true);
    setShowModal(true);
  };

  return (
    <div>
      {/* Stylish Heading */}
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Company Management
      </h3>

      {/* Display Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">LinkedIn</th>
              <th className="px-4 py-2">Emails</th>
              <th className="px-4 py-2">Phone Numbers</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.id} className="border-t">
                <td className="px-4 py-2">{company.name}</td>
                <td className="px-4 py-2">{company.location}</td>
                <td className="px-4 py-2">
                  <a
                    href={company.linkedinProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    View Profile
                  </a>
                </td>
                <td className="px-4 py-2">{company.emails.join(", ")}</td>
                <td className="px-4 py-2">{company.phoneNumbers.join(", ")}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded"
                    onClick={() => openEditModal(company)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => onDelete(company.id)} // Calls onDelete function when clicked
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Company Button */}
      <button
        onClick={() => {
          setCurrentCompany({
            name: "",
            location: "",
            linkedinProfile: "",
            emails: "",
            phoneNumbers: "",
            comments: "",
            communicationPeriodicity: "",
          });
          setShowModal(true);
        }}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
      >
        Add New Company
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">
              {isEdit ? "Edit Company" : "Add New Company"}
            </h3>
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="block w-full p-2 border rounded"
                value={currentCompany.name}
                onChange={(e) =>
                  setCurrentCompany({ ...currentCompany, name: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Location"
                className="block w-full p-2 border rounded"
                value={currentCompany.location}
                onChange={(e) =>
                  setCurrentCompany({
                    ...currentCompany,
                    location: e.target.value,
                  })
                }
                required
              />
              <input
                type="url"
                placeholder="LinkedIn Profile"
                className="block w-full p-2 border rounded"
                value={currentCompany.linkedinProfile}
                onChange={(e) =>
                  setCurrentCompany({
                    ...currentCompany,
                    linkedinProfile: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Emails (comma-separated)"
                className="block w-full p-2 border rounded"
                value={currentCompany.emails}
                onChange={(e) =>
                  setCurrentCompany({
                    ...currentCompany,
                    emails: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Phone Numbers (comma-separated)"
                className="block w-full p-2 border rounded"
                value={currentCompany.phoneNumbers}
                onChange={(e) =>
                  setCurrentCompany({
                    ...currentCompany,
                    phoneNumbers: e.target.value,
                  })
                }
              />
              <textarea
                placeholder="Comments"
                className="block w-full p-2 border rounded"
                value={currentCompany.comments}
                onChange={(e) =>
                  setCurrentCompany({
                    ...currentCompany,
                    comments: e.target.value,
                  })
                }
              ></textarea>
              <input
                type="text"
                placeholder="Communication Periodicity"
                className="block w-full p-2 border rounded"
                value={currentCompany.communicationPeriodicity}
                onChange={(e) =>
                  setCurrentCompany({
                    ...currentCompany,
                    communicationPeriodicity: e.target.value,
                  })
                }
              />
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 px-4 rounded"
                >
                  {isEdit ? "Update" : "Add"}
                </button>
                <button
                  type="button"
                  className="bg-red-600 text-white py-2 px-4 rounded"
                  onClick={() => {
                    setShowModal(false);
                    setIsEdit(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyTable;
