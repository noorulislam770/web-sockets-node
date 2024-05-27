import socketIoClient from "socket.io-client";
import * as readline from "node:readline/promises";
import { response } from "express";

let socket = socketIoClient("http://127.0.0.1:8080");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

socket.on("incoming message", (message) => {
  console.log("\nrecieved a new message: ", message);
  //   console.log(message);
  //   socket.emit("greeting", "hello from the client ");
});

async function startApp() {
  while (true) {
    let response = await rl.question(
      'Enter a message and hit "return " to send : '
    );
    socket.emit("new message", response);
  }
}

startApp();
