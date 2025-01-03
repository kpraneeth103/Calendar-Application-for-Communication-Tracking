import React from "react";

const CommunicationModal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg w-96">
          <h3 className="text-xl font-semibold text-gray-800">
            New Communication
          </h3>
          <form>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full mt-4 p-2 border border-gray-300 rounded-md"
            />
            <input
              type="date"
              className="w-full mt-4 p-2 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Notes"
              className="w-full mt-4 p-2 border border-gray-300 rounded-md"
              rows="4"
            ></textarea>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={onClose}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default CommunicationModal;
