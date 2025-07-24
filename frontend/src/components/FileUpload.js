

// File: client/src/components/FileUpload.js
// import React, { useState } from "react";
// import socket from "../socket";

// const FileUpload = () => {
//   const [file, setFile] = useState(null);

//   const handleSend = () => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       const buffer = reader.result;
//       socket.emit("send_file", {
//         recipientId: prompt("Enter Recipient Socket ID"),
//         fileName: file.name,
//         fileBuffer: buffer,
//       });
//     };
//     if (file) reader.readAsArrayBuffer(file);
//   };

//   return (
//     <div>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <button onClick={handleSend}>Send File</button>
//     </div>
//   );
// };

// export default FileUpload;

import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import ProgressBar from "./ProgressBar";

const FileUpload = () => {
  const [progress, setProgress] = useState(0);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Simulate progress
    let percent = 0;
    const interval = setInterval(() => {
      percent += 10;
      setProgress(percent);
      if (percent >= 100) clearInterval(interval);
    }, 200);
  };

  return (
    <div className="option-card">
      <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
        <FaUpload size={40} />
        <p>Upload File</p>
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleUpload}
        style={{ display: "none" }}
      />
      <ProgressBar progress={progress} />
    </div>
  );
};

export default FileUpload;
