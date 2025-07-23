import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ width: "100%", background: "#eee", borderRadius: "8px" }}>
      <div
        style={{
          width: `${progress}%`,
          height: "8px",
          background: "#4caf50",
          borderRadius: "8px",
          transition: "width 0.3s ease",
        }}
      />
    </div>
  );
};

export default ProgressBar;
