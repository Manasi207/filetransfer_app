
// // File: client/src/components/FileReceive.js
// import React, { useEffect } from "react";
// import socket from "../socket";

// const FileReceive = () => {
//   useEffect(() => {
//     socket.on("receive_file", ({ fileName, fileBuffer }) => {
//       const blob = new Blob([fileBuffer]);
//       const link = document.createElement("a");
//       link.href = URL.createObjectURL(blob);
//       link.download = fileName;
//       link.click();
//     });
//   }, []);

//   return <p>Waiting for incoming files...</p>;
// };

// export default FileReceive;


import React, { useEffect } from "react";
import socket from "../socket";

const FileReceive = () => {
  useEffect(() => {
    socket.on("receive_file", ({ fileName, fileBuffer }) => {
      const blob = new Blob([fileBuffer]);
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

    return () => {
      socket.off("receive_file");
    };
  }, []);

  return <p>Waiting for incoming files...</p>;
};

export default FileReceive;