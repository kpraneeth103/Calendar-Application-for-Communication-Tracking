import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { CSVLink } from "react-csv";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { FaDownload } from "react-icons/fa";
import { Line } from "react-chartjs-2";
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

// Register the components needed
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement, // Make sure PointElement is registered if you're using it
);

const ReportsPage = () => {
  const [activeSection, setActiveSection] = useState(1); // To toggle between sections
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
    {
      id: 2,
      activity: "Phone Call to Microsoft",
      date: "2024-12-29",
      user: "User 2",
    },
    {
      id: 3,
      activity: "LinkedIn Message to Amazon",
      date: "2024-12-28",
      user: "User 1",
    },
  ];

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const toggleSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex flex-col space-y-6 p-6 bg-gray-100 min-h-screen">
      {/* Section Buttons */}
      <div className="flex space-x-4 mb-4">
        <button
          className="bg-blue-600 text-white p-3 rounded-md"
          onClick={() => toggleSection(1)}
        >
          Communication Frequency
        </button>
        <button
          className="bg-blue-600 text-white p-3 rounded-md"
          onClick={() => toggleSection(2)}
        >
          Engagement Effectiveness
        </button>
        <button
          className="bg-blue-600 text-white p-3 rounded-md"
          onClick={() => toggleSection(3)}
        >
          Overdue Trends
        </button>
        <button
          className="bg-blue-600 text-white p-3 rounded-md"
          onClick={() => toggleSection(4)}
        >
          Real-Time Activity Log
        </button>
      </div>

      {/* Conditional Rendering of Sections */}
      {activeSection === 1 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Communication Frequency</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Frequency by Method</h4>
              <Pie data={communicationData} />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Frequency by Method (Bar)</h4>
              <Bar data={communicationData} />
            </div>
          </div>
          {/* Filters and Export Buttons */}
          <div className="flex space-x-4 justify-end">
            <select
              name="company"
              onChange={handleFilterChange}
              className="p-2 bg-white rounded"
            >
              <option value="All">All Companies</option>
              <option value="Google">Google</option>
              <option value="Microsoft">Microsoft</option>
              <option value="Amazon">Amazon</option>
            </select>
            <select
              name="method"
              onChange={handleFilterChange}
              className="p-2 bg-white rounded"
            >
              <option value="All">All Methods</option>
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="In-Person">In-Person</option>
            </select>
            <input
              type="date"
              name="fromDate"
              onChange={handleFilterChange}
              className="p-2 bg-white rounded"
            />
            <input
              type="date"
              name="toDate"
              onChange={handleFilterChange}
              className="p-2 bg-white rounded"
            />
          </div>
          <div className="flex space-x-4 justify-end mt-4">
            <CSVLink
              data={realTimeActivities}
              className="bg-green-500 text-white p-3 rounded-md flex items-center"
            >
              <FaDownload className="mr-2" /> Export CSV
            </CSVLink>
            <PDFDownloadLink
              document={<PDFReport reportType="communicationFrequency" data={communicationData} />}
              fileName={`communication_frequency_report_${new Date().toISOString().split('T')[0]}.pdf`}
            >
              {({ loading }) => (
                <button className="bg-blue-600 text-white p-3 rounded-md flex items-center">
                  {loading ? (
                    "Loading..."
                  ) : (
                    <>
                      <FaDownload className="mr-2" /> Export PDF
                    </>
                  )}
                </button>
              )}
            </PDFDownloadLink>
          </div>
        </div>
      )}

      {activeSection === 2 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Engagement Effectiveness</h3>
          <Bar data={engagementData} />
          <div className="flex space-x-4 justify-end mt-4">
            <CSVLink
              data={realTimeActivities}
              className="bg-green-500 text-white p-3 rounded-md flex items-center"
            >
              <FaDownload className="mr-2" /> Export CSV
            </CSVLink>
            <PDFDownloadLink
              document={<PDFReport reportType="engagementEffectiveness" data={engagementData} />}
              fileName={`All_Companies_Engagement_Effectiveness_Report_${new Date().toISOString().split('T')[0]}.pdf`}
            >
              {({ loading }) => (
                <button className="bg-blue-600 text-white p-3 rounded-md flex items-center">
                  {loading ? (
                    "Loading..."
                  ) : (
                    <>
                      <FaDownload className="mr-2" /> Export PDF
                    </>
                  )}
                </button>
              )}
            </PDFDownloadLink>
          </div>
        </div>
      )}

      {activeSection === 3 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">
            Overdue Communication Trends
          </h3>
          <Line data={overdueTrendsData} />
        </div>
      )}

      {activeSection === 4 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Real-Time Activity Log</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Activity</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">User</th>
              </tr>
            </thead>
            <tbody>
              {realTimeActivities.map((activity) => (
                <tr key={activity.id}>
                  <td className="px-4 py-2">{activity.activity}</td>
                  <td className="px-4 py-2">{activity.date}</td>
                  <td className="px-4 py-2">{activity.user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    padding: 5,
  },
  tableCell: {
    flex: 1,
    padding: 5,
    textAlign: "center",
  },
});

const PDFReport = ({ reportType, data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {reportType === "communicationFrequency"
            ? "Communication Frequency Report"
            : "Engagement Effectiveness Report"}
        </Text>

        <View style={styles.section}>
          {reportType === "communicationFrequency" && (
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Method</Text>
                <Text style={styles.tableCell}>Frequency (%)</Text>
              </View>
              {data.labels.map((label, index) => (
                <View style={styles.tableRow} key={index}>
                  <Text style={styles.tableCell}>{label}</Text>
                  <Text style={styles.tableCell}>{data.datasets[0].data[index]}</Text>
                </View>
              ))}
            </View>
          )}

          {reportType === "engagementEffectiveness" && (
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Company</Text>
                <Text style={styles.tableCell}>Engagement Rate (%)</Text>
              </View>
              {data.labels.map((label, index) => (
                <View style={styles.tableRow} key={index}>
                  <Text style={styles.tableCell}>{label}</Text>
                  <Text style={styles.tableCell}>{data.datasets[0].data[index]}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default ReportsPage;
