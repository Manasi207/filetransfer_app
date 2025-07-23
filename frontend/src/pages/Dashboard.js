// File: client/src/pages/Dashboard.js
import React from "react";
import FileUpload from "../components/FileUpload";
import FileReceive from "../components/FileReceive";

const Dashboard = () => {
  return (
    <div>
      <h1>QuickShare Dashboard</h1>
      <FileUpload />
      <FileReceive />
    </div>
  );
};

export default Dashboard;