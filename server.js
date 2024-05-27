import express from "express";
import { Server } from "socket.io";
import http from "http";

let app = express();
let server = http.createServer(app);
let io = new Server(server);

io.on("connection", (socket) => {
  socket.emit("greeting", "hello client ");
  console.log("a new client has connected!");

  socket.on("greeting", (data) => {
    console.log(data);
  });
});

server.listen(process.env.PORT || 8080, () => {
  console.log("Server is listening on port " + (process.env.PORT || 8080));
});
