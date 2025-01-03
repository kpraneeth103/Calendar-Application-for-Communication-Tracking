import React, { useState } from "react";

const MethodForm = ({ onAddMethod }) => {
  const [methodName, setMethodName] = useState("");
  const [description, setDescription] = useState("");
  const [sequence, setSequence] = useState("");
  const [isMandatory, setIsMandatory] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!methodName || !description || !sequence) {
      setErrorMessage("Please fill all fields!");
      return;
    }

    const newMethod = {
      name: methodName,
      description,
      sequence: parseInt(sequence, 10),
      mandatory: isMandatory,
    };

    // Pass the new method to the parent component
    onAddMethod(newMethod);

    // Reset form and error message
    setMethodName("");
    setDescription("");
    setSequence("");
    setIsMandatory(false);
    setErrorMessage(""); // Clear any previous error messages
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg mb-8">
      <h2 className="text-2xl font-semibold mb-4">Add Method</h2>

      {/* Display error message if validation fails */}
      {errorMessage && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="methodName" className="block text-sm font-medium text-gray-700">
            Method Name
          </label>
          <input
            id="methodName"
            type="text"
            value={methodName}
            onChange={(e) => setMethodName(e.target.value)}
            placeholder="Enter method name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            rows="3"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        <div>
          <label htmlFor="sequence" className="block text-sm font-medium text-gray-700">
            Sequence
          </label>
          <input
            id="sequence"
            type="number"
            value={sequence}
            onChange={(e) => setSequence(e.target.value)}
            placeholder="Enter sequence"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex items-center">
          <input
            id="isMandatory"
            type="checkbox"
            checked={isMandatory}
            onChange={(e) => setIsMandatory(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="isMandatory" className="ml-2 text-sm text-gray-700">Mandatory</label>
        </div>

        <div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Method
          </button>
        </div>
      </form>
    </div>
  );
};

export default MethodForm;
