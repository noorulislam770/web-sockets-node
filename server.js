import express from "express";
import { Server } from "socket.io";
import http from "http";
import readline from "readline";

let app = express();
let server = http.createServer(app);
let io = new Server(server);

io.on("connection", (socket) => {
  console.log("a new client has connected!");
  socket.emit("greeting", "hello client ");

  socket.on("new message", (message) => {
    console.log("the client says: ", message);
    socket.broadcast.emit("incoming message", message);
  });
});

server.listen(process.env.PORT || 8080, () => {
  console.log("Server is listening on port " + (process.env.PORT || 8080));
});
