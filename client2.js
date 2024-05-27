import socketIoClient from "socket.io-client";

import * as readline from "node:readline/promises";

let socket = socketIoClient("http://127.0.0.1:8081");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

socket.on("incoming message", (message) => {
  console.log("\nnew message recieved : ", message);
  process.stdout.write("enter a message and press 'enter' to send : ");
});

async function startApp() {
  while (true) {
    let response = await rl.question(
      "enter a message and press 'enter' to send : "
    );
    socket.emit("new message", response);
  }
}

startApp();
