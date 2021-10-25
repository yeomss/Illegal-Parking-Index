const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/router");
const cors = require("cors");

PORT = 8888;
app.listen(PORT, () => {
  console.log(PORT, ": server start!");
});

app.use(cors({ orgin: true, credentials: true }));

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

module.exports = app;
