const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const socketUpload = require("socketio-file-upload");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index2.html");
});

io.on("connection", (socket) => {
  let uploader = new socketUpload();

  uploader.dir = "./data";

  uploader.listen(socket);

  uploader.on("saved", function (event) {
    console.log(event.file);
  });

  uploader.on("error", function (event) {
    console.log("Error from uploader", event);
  });
});

server.listen(3002, () => {
  console.log("listening on *:3002");
});
