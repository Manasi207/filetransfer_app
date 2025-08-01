// File: client/src/pages/Dashboard.js
// import React from "react";
// import FileUpload from "../components/FileUpload";
// import FileReceive from "../components/FileReceive";

// const Dashboard = () => {
//   return (
//     <div>
//       <h1>QuickShare Dashboard</h1>
//       <FileUpload />
//       <FileReceive />
//     </div>
//   );
// };

// export default Dashboard;
import React from "react";
import FileUpload from "../components/FileUpload";
import FileReceive from "../components/FileReceive";

const Dashboard = () => {
  return (
    <div className="container">
      <h1>QuickShare Dashboard</h1>
      <div className="dashboard-options">
        
         {/* <Dashboard /> */}
        <FileUpload />
        <FileReceive />
      </div>
    </div>
  );
};

export default Dashboard;
