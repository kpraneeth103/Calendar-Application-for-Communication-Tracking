import React from "react";
import Table from "./Table";
import { companiesData } from "../../utils/mockData";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Company Communications</h1>
      <Table data={companiesData} />
    </div>
  );
};

export default Dashboard;
