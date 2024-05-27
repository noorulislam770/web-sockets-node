import socketIoClient from "socket.io-client";

let socket = socketIoClient("http://127.0.0.1:8080");

socket.on("greeting", (data) => {
  console.log(data);
  socket.emit("greeting", "hello from the client ");
});
