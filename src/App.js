// App.js
import React from "react";
import Navbar from "./components/Shared/Navbar";
import Sidebar from "./components/Shared/Sidebar";
import Footer from "./components/Shared/Footer";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import ReportsPage from "./pages/ReportsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Navbar */}
        <Navbar />

        <div className="flex flex-grow">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-grow p-6 w-full md:w-auto">
            <Routes>
            
              <Route path="/" element={<AdminPage />} />
              <Route path="/user" element={<UserPage />} />
              <Route  path="/reports" element={<ReportsPage />} />
              
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
