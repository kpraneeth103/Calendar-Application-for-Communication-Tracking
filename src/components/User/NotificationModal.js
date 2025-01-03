import React from "react";

const NotificationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <ul>
          <li className="border-b py-2">Notification 1: Upcoming Event</li>
          <li className="border-b py-2">Notification 2: New Message</li>
          <li className="border-b py-2">Notification 3: System Update</li>
        </ul>
        <button
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NotificationModal;
