var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");
var { dbInfo } = require("../config/db");

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: dbInfo.host,
  user: dbInfo.user,
  port: dbInfo.port,
  password: dbInfo.password,
  database: dbInfo.database,
});

// 로그인 메인
router.get("/", (req, res) => {
  console.log("로그인 메인 화면 open");
});

// 로그인 시도
router.post("/", (req, res) => {
  console.log("로그인 시도 contact");

  var id = req.body.id;
  var pw = req.body.pw;

  console.log(id, pw);
  var responseData = {};

  var query = `select uid, password from user where uid='${id}' and password='${pw}'`;

  connection.query(query, (err, rows) => {
    if (err) throw err;
    if (rows[0]) {
      responseData.result = true;
      responseData.id = rows[0].uid;
    } else {
      responseData.result = false;
      responseData.id = "none";
    }
    console.log(responseData);
    res.send(responseData);
  });
});

module.exports = router;
