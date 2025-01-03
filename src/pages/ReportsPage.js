import React, { useState } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import { CSVLink } from "react-csv";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { FaDownload } from "react-icons/fa";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
);

const ReportsPage = () => {
  const [activeSection, setActiveSection] = useState(1); // Tracks the active section
  const [filter, setFilter] = useState({
    company: "All",
    method: "All",
    fromDate: "",
    toDate: "",
  });

  // Sample Data
  const communicationData = {
    labels: ["Email", "Phone", "LinkedIn", "In-Person"],
    datasets: [
      {
        data: [45, 30, 15, 10],
        backgroundColor: ["#ffcd56", "#ff6384", "#36a2eb", "#4bc0c0"],
      },
    ],
  };

  const engagementData = {
    labels: ["Google", "Microsoft", "Amazon"],
    datasets: [
      {
        label: "Engagement Rate",
        data: [80, 60, 70],
        backgroundColor: ["#ffcd56", "#ff6384", "#36a2eb"],
      },
    ],
  };

  const overdueTrendsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Overdue Communications",
        data: [5, 10, 8, 15, 12],
        borderColor: "#ff6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  const realTimeActivities = [
    { id: 1, activity: "Email to Google", date: "2024-12-30", user: "User 1" },
    { id: 2, activity: "Phone Call to Microsoft", date: "2024-12-29", user: "User 2" },
    { id: 3, activity: "LinkedIn Message to Amazon", date: "2024-12-28", user: "User 1" },
  ];

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const toggleSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex flex-col space-y-6 p-6 bg-gray-100 min-h-screen">
      {/* Section Navigation */}
      <div className="flex space-x-4 mb-4">
        {["Communication Frequency", "Engagement Effectiveness", "Overdue Trends", "Real-Time Activity Log"].map(
          (sectionName, index) => (
            <button
              key={index}
              className={`p-3 rounded-md ${
                activeSection === index + 1 ? "bg-blue-700" : "bg-blue-600"
              } text-white`}
              onClick={() => toggleSection(index + 1)}
            >
              {sectionName}
            </button>
          )
        )}
      </div>

      {/* Conditional Rendering for Sections */}
      {activeSection === 1 && (
        <Section
          title="Communication Frequency"
          pieData={communicationData}
          barData={communicationData}
          filters
          exportData={realTimeActivities}
        />
      )}
      {activeSection === 2 && (
        <Section
          title="Engagement Effectiveness"
          barData={engagementData}
          exportData={realTimeActivities}
        />
      )}
      {activeSection === 3 && (
        <Section title="Overdue Trends" lineData={overdueTrendsData} />
      )}
      {activeSection === 4 && (
        <ActivityLog title="Real-Time Activity Log" data={realTimeActivities} />
      )}
    </div>
  );
};

// Section Component
const Section = ({ title, pieData, barData, lineData, filters, exportData }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <div className="grid md:grid-cols-2 gap-4">
      {pieData && <Pie data={pieData} />}
      {barData && <Bar data={barData} />}
      {lineData && <Line data={lineData} />}
    </div>
    {filters && (
      <div className="flex space-x-4 justify-end mt-4">
        <select name="company" className="p-2 bg-white rounded">
          <option value="All">All Companies</option>
          <option value="Google">Google</option>
          <option value="Microsoft">Microsoft</option>
          <option value="Amazon">Amazon</option>
        </select>
        <select name="method" className="p-2 bg-white rounded">
          <option value="All">All Methods</option>
          <option value="Email">Email</option>
          <option value="Phone">Phone</option>
        </select>
        <input type="date" name="fromDate" className="p-2 bg-white rounded" />
        <input type="date" name="toDate" className="p-2 bg-white rounded" />
      </div>
    )}
    {exportData && (
      <div className="flex space-x-4 justify-end mt-4">
        <CSVLink data={exportData} className="bg-green-500 text-white p-3 rounded-md flex items-center">
          <FaDownload className="mr-2" /> Export CSV
        </CSVLink>
        <PDFDownloadLink document={<PDFReport title={title} data={exportData} />} fileName={`${title}.pdf`}>
          {({ loading }) =>
            loading ? (
              <span>Loading...</span>
            ) : (
              <button className="bg-blue-600 text-white p-3 rounded-md flex items-center">
                <FaDownload className="mr-2" /> Export PDF
              </button>
            )
          }
        </PDFDownloadLink>
      </div>
    )}
  </div>
);

// Activity Log Component
const ActivityLog = ({ title, data }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <table className="min-w-full table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Activity</th>
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2">User</th>
        </tr>
      </thead>
      <tbody>
        {data.map((activity) => (
          <tr key={activity.id}>
            <td className="px-4 py-2">{activity.activity}</td>
            <td className="px-4 py-2">{activity.date}</td>
            <td className="px-4 py-2">{activity.user}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// PDF Report Component
const PDFReport = ({ title, data }) => (
  <Document>
    <Page style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>{title}</Text>
      {data.map((item, index) => (
        <Text key={index}>{`${item.activity} on ${item.date} by ${item.user}`}</Text>
      ))}
    </Page>
  </Document>
);

export default ReportsPage;
