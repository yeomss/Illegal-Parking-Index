const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("connected");

  socket.on("upload", (data) => {
    var fs = require("fs");
    var files = {};
    console.log(data);

    var name = data.name;
    var size = data.size;

    files[name] = {
      size: size,
      data: "",
      downloaded: 0,
    };

    console.log(files[name]);
    console.log(files);

    var place = 0;
    var stat = fs.statSync("data/" + name);

    console.log("stat: ", stat);
    if (stat.isFile()) {
      files[name].downloaded = stat.size;
      place = stat.size / 524288;
    }

    fs.open("data/" + name, "a+", (err, fd) => {
      if (err) {
        console.log(err);
      } else {
        files[name].handler = fd;

        socket.emit("more", {
          place: place,
          percent: 0,
        });
      }
    });
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
