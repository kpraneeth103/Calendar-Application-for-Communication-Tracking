import React, { useState } from "react";

const CommunicationMethodsTable = ({ methods = [], onAdd, onUpdate, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentMethod, setCurrentMethod] = useState({
    name: "",
    description: "",
    sequence: "",
    mandatory: false,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!currentMethod.name || !currentMethod.description || currentMethod.sequence === "") {
      alert("Please fill out all fields.");
      return;
    }

    if (isEdit) {
      onUpdate(currentMethod);
    } else {
      onAdd({
        ...currentMethod,
        id: Date.now(),
      });
    }

    setShowModal(false);
    setIsEdit(false);
    setCurrentMethod({
      name: "",
      description: "",
      sequence: "",
      mandatory: false,
    });
  };

  const openEditModal = (method) => {
    setCurrentMethod({ ...method });
    setIsEdit(true);
    setShowModal(true);
  };

  const handleDelete = (methodId) => {
    // Call the onDelete function passed from the parent component
    onDelete(methodId);
  };

  return (
    <div>
      {/* Stylish Heading */}
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Communication Methods
      </h3>
      {/* Display Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Method Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Sequence</th>
              <th className="px-4 py-2">Mandatory</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {methods.map((method) => (
              <tr key={method.id} className="border-t">
                <td className="px-4 py-2">{method.name}</td>
                <td className="px-4 py-2">{method.description}</td>
                <td className="px-4 py-2">{method.sequence}</td>
                <td className="px-4 py-2">{method.mandatory ? "Yes" : "No"}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded"
                    onClick={() => openEditModal(method)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(method.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Method Button */}
      <button
        onClick={() => {
          setCurrentMethod({
            name: "",
            description: "",
            sequence: "",
            mandatory: false,
          });
          setShowModal(true);
        }}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
      >
        Add New Method
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">
              {isEdit ? "Edit Method" : "Add New Method"}
            </h3>
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Method Name"
                className="block w-full p-2 border rounded"
                value={currentMethod.name}
                onChange={(e) =>
                  setCurrentMethod((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
              <textarea
                placeholder="Description"
                className="block w-full p-2 border rounded"
                value={currentMethod.description}
                onChange={(e) =>
                  setCurrentMethod((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                required
              ></textarea>
              <input
                type="number"
                placeholder="Sequence"
                className="block w-full p-2 border rounded"
                value={currentMethod.sequence}
                onChange={(e) =>
                  setCurrentMethod((prev) => ({
                    ...prev,
                    sequence: parseInt(e.target.value, 10),
                  }))
                }
                required
              />
              <div className="flex items-center space-x-2">
                <label className="text-sm">Mandatory:</label>
                <input
                  type="checkbox"
                  checked={currentMethod.mandatory}
                  onChange={(e) =>
                    setCurrentMethod((prev) => ({
                      ...prev,
                      mandatory: e.target.checked,
                    }))
                  }
                />
              </div>
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

export default CommunicationMethodsTable;
