
// // File: client/src/components/FileUpload.js
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


// File: client/src/components/FileUpload.js
import React, { useState } from "react";
import socket from "../socket";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleSend = () => {
    const reader = new FileReader();
    reader.onload = () => {
      const buffer = reader.result;
      socket.emit("send_file", {
        recipientId: prompt("Enter Recipient Socket ID"),
        fileName: file.name,
        fileBuffer: buffer,
      });
    };
    if (file) reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleSend}>Send File</button>
    </div>
  );
};

export default FileUpload;