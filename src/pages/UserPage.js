import React, { useState } from "react";
import Calendar from "../components/User/Calendar";
import Dashboard from "../components/User/Dashboard";
import Notifications from "../components/User/Notifications";

const UserPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Example data (in a real app, this would come from a state, props, or API)
  const overdue = [
    {
      id: 1,
      companyName: "ENTNT",
      nextCommunicationDate: "2024-12-30",
      notes: "Overdue task",
    },
    {
      id: 2,
      companyName: "GOOGLE",
      nextCommunicationDate: "2024-12-29",
      notes: "Overdue task",
    },
    {
      id: 3,
      companyName: "MICROSOFT",
      nextCommunicationDate: "2024-12-26",
      notes: "Overdue task",
    },
  ];

  const dueToday = [
    {
      id: 4,
      companyName: "AMAZON",
      nextCommunicationDate: "2025-01-05",
      notes: "Due today",
    },
  ];

  // Calculate the notification badge count
  const overdueCount = overdue.length;
  const dueTodayCount = dueToday.length;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Menu */}
      <button
        className="absolute top-4 left-4 z-50 md:hidden bg-blue-600 text-white py-2 px-4 rounded"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle Sidebar"
      >
        Menu
      </button>

      {/* Sidebar */}
      <aside
        className={`w-64 bg-white shadow-md fixed md:static transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0`}
      >
        <nav className="flex flex-col p-4 space-y-4">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`py-2 px-4 rounded ${
              activeTab === "dashboard"
                ? "bg-blue-600 text-white"
                : "text-gray-700"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("calendar")}
            className={`py-2 px-4 rounded ${
              activeTab === "calendar"
                ? "bg-blue-600 text-white"
                : "text-gray-700"
            }`}
          >
            Calendar
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={`relative py-2 px-4 rounded ${
              activeTab === "notifications"
                ? "bg-blue-600 text-white"
                : "text-gray-700"
            }`}
          >
            Notifications
            {/* Notification Badge */}
            {(overdueCount > 0 || dueTodayCount > 0) && (
              <span className="absolute top-0 right-0 transform -translate-y-2 translate-x-2 inline-flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-red-500 rounded-full">
                {overdueCount + dueTodayCount}
              </span>
            )}
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6">
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "calendar" && <Calendar />}
        {activeTab === "notifications" && (
          <Notifications overdue={overdue} dueToday={dueToday} />
        )}
      </main>
    </div>
  );
};

export default UserPage;
