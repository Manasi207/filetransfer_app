// Handles real-time file transfer via Socket.io.

const File = require("../models/File");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("send_file", async ({ fileName, fileBuffer }) => {
      console.log("Receiving file from sender");

      // Broadcasting file to all (or target if available)
      socket.broadcast.emit("receive_file", {
        fileName,
        fileBuffer,
      });

      // Optional: Log the transfer
      await File.create({
        fileName,
        sender: socket.id,
        recipient: "broadcast",
      });
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });
  });
};
