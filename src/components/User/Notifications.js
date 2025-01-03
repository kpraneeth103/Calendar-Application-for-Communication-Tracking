import React, { useState } from "react";

const Notifications = ({ overdue = [], dueToday = [], notifications = [] }) => {
  const [hoveredComm, setHoveredComm] = useState(null); // Track hovered communication

  const handleHover = (comm) => {
    setHoveredComm(comm); // Set hovered communication
  };

  const handleLeave = () => {
    setHoveredComm(null); // Reset hovered communication
  };

  // Function to render the communication grid
  const renderGrid = (communications, type) => {
    return communications.map((comm) => (
      <div
        key={comm.id}
        className={`relative flex justify-between items-center p-4 border-b ${
          type === "overdue" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
        }`}
        onMouseEnter={() => handleHover(comm)} // Add hover effect
        onMouseLeave={handleLeave}
      >
        <div className="flex flex-col">
          <span className="font-semibold">{comm.companyName}</span>
          <span className="text-sm">{`Next communication: ${comm.nextCommunicationDate}`}</span>
        </div>
        <span className="font-bold">
          {type === "overdue" ? "Overdue" : "Due Today"}
        </span>

        {/* Show tooltip if the communication is hovered */}
        {hoveredComm === comm && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-white text-sm p-2 rounded shadow-lg mt-2 z-50">
            {comm.notes || "No notes available"}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="space-y-4">
      {/* Overdue Communications Grid */}
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2 text-lg">Overdue Communications</h3>
        {overdue.length > 0 ? (
          renderGrid(overdue, "overdue") // Render overdue grid
        ) : (
          <p className="text-gray-500">No overdue communications.</p>
        )}
      </div>

      {/* Today's Communications Grid */}
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2 text-lg">Today's Communications Due</h3>
        {dueToday.length > 0 ? (
          renderGrid(dueToday, "dueToday") // Render due today grid
        ) : (
          <p className="text-gray-500">No communications due today.</p>
        )}
      </div>

      {/* Notifications */}
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2 text-lg">Notifications</h3>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div key={notification.id} className="p-2 border-b">
              <span>{notification.message}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No notifications.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
