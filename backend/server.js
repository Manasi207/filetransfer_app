const http = require("http");
const app = require("./app");
const { Server } = require("socket.io");
const socketHandler = require("./socket");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

socketHandler(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Export the server for testing purposes   : Boots Express + Socket.io.