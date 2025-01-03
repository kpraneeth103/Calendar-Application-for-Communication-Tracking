import React, { useState } from "react";

const CompanyForm = ({ onAddCompany }) => {
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [period, setPeriod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCompany = { companyName, location, period };
    onAddCompany(newCompany);
    setCompanyName("");
    setLocation("");
    setPeriod("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
          Company Name
        </label>
        <input
          id="companyName"
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label htmlFor="period" className="block text-sm font-medium text-gray-700">
          Communication Period
        </label>
        <input
          id="period"
          type="text"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
      >
        Add Company
      </button>
    </form>
  );
};

export default CompanyForm;
