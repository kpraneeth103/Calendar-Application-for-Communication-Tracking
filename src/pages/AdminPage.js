import React, { useState } from "react";
import CompanyTable from "../components/Admin/CompanyTable";
import CommunicationMethodsTable from "../components/Admin/CommunicationMethodsTable";

const AdminPage = () => {
  // State for Companies
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "ENTNT Pvt Ltd",
      location: "Hyderabad, India",
      linkedinProfile: "https://linkedin.com/company/entnt",
      emails: ["info@entnt.com", "hr@entnt.com"],
      phoneNumbers: ["+91-9876543210"],
      comments: "Potential long-term partner.",
      communicationPeriodicity: "2 weeks",
    },
    {
      id: 2,
      name: "Zeta Corporation",
      location: "Bangalore, India",
      linkedinProfile: "https://linkedin.com/company/zeta",
      emails: ["contact@zeta.com"],
      phoneNumbers: ["+91-7654321098"],
      comments: "Strong interest in our services.",
      communicationPeriodicity: "1 month",
    },
  ]);

  // State for Communication Methods
  const [communicationMethods, setCommunicationMethods] = useState([
    {
      id: 1,
      name: "LinkedIn Post",
      description: "Post about the company",
      sequence: 1,
      mandatory: true,
    },
    {
      id: 2,
      name: "Phone Call",
      description: "Call the company",
      sequence: 2,
      mandatory: false,
    },
  ]);

  // Handlers for Company Table
  const handleAddCompany = (newCompany) => {
    setCompanies((prevCompanies) => [
      ...prevCompanies,
      { ...newCompany, id: Date.now() },
    ]);
  };

  const handleUpdateCompany = (updatedCompany) => {
    setCompanies((prevCompanies) =>
      prevCompanies.map((company) =>
        company.id === updatedCompany.id ? updatedCompany : company,
      ),
    );
  };

  // Handle deleting a company
  const handleDeleteCompany = (companyId) => {
    setCompanies((prevCompanies) =>
      prevCompanies.filter((company) => company.id !== companyId),
    );
  };

  // Handlers for Communication Methods Table
  const handleAddMethod = (newMethod) => {
    setCommunicationMethods((prevMethods) => [
      ...prevMethods,
      { ...newMethod, id: Date.now() },
    ]);
  };

  const handleUpdateMethod = (updatedMethod) => {
    setCommunicationMethods((prevMethods) =>
      prevMethods.map((method) =>
        method.id === updatedMethod.id ? updatedMethod : method,
      ),
    );
  };

  // Handle deleting a communication method
  const handleDeleteMethod = (methodId) => {
    setCommunicationMethods((prevMethods) =>
      prevMethods.filter((method) => method.id !== methodId),
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Company Table */}
      <CompanyTable
        companies={companies}
        onAdd={handleAddCompany}
        onUpdate={handleUpdateCompany}
        onDelete={handleDeleteCompany}
        className="p-5" // Ensure the child component accepts className
      />

      {/* Communication Methods Table */}
      <CommunicationMethodsTable
        methods={communicationMethods}
        onAdd={handleAddMethod}
        onUpdate={handleUpdateMethod}
        onDelete={handleDeleteMethod}
        className="m-6" // Ensure the child component accepts className
      />
    </div>
  );
};

export default AdminPage;
