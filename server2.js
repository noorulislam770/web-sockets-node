import express from "express";
import { Server } from "socket.io";
import http from "http";

let app = express();
let server = http.createServer(app);
let io = new Server(server);

io.on("connection", (socket) => {
  socket.emit("greetings", "you are now connected");
  console.log("new client connected ");

  socket.on("new message", (message) => {
    socket.broadcast.emit("incoming message", message);
  });
});

server.listen(process.env.PORT || 8081, () => {
  console.log("Server is listening on port ", process.env.PORT || 8081);
});
