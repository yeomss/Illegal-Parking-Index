var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");
var db = require("../config/db");
const { sendAuthMail } = require("../controller/user");

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: db.host,
  user: db.user,
  port: db.port,
  password: db.password,
  database: db.database,
});

connection.connect();

// 회원가입 메인
router.get("/", (req, res) => {
  console.log("회원가입 메인 화면 open");
});

// 회원가입 시도
router.post("/", (req, res) => {
  console.log("회원가입 시도 contact");

  // 회원이 입력하는 개인정보
  var id = req.body.id;
  var pw = req.body.pw;
  var email = req.body.email;

  console.log(req.body);
  var responseData = {};

  // db 중복 확인
  var query = `select uid from user where uid='${id}'`;

  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
    }

    // db 저장
    if (result.length == 0) {
      var query = `insert into user (uid, password, email) values ('${id}', '${pw}', '${email}');`;

      connection.query(query, (err, result) => {
        if (err) {
          console.log(err);
        }
        responseData.code = 200;
        responseData.result = "success";
        responseData.message = "회원가입 성공!";
        res.send(responseData);
      });
    } else {
      responseData.code = 401;
      responseData.result = "fail";
      responseData.message = "이메일 중복";
      res.send(responseData);
    }
  });
});

// 인증 이메일 발송
router.post("/email", (req, res) => {
  var email = req.body.email;
  var authNum = req.body.authNum;
  console.log(req.body);

  sendAuthMail(email, authNum);
});

// 인증 번호 확인
router.post("/authNum", (req, res) => {
  var authNum = req.body.authNum;
  var uAuthNum = req.body.uAuthNum;
  console.log(authNum, uAuthNum);

  var responseData = {};
  if (authNum !== uAuthNum) {
    console.log("인증번호 틀림");
    responseData.message = "인증번호 틀림";
    responseData.result = false;
  } else {
    console.log("인증번호 맞음");
    responseData.message = "인증번호 맞음";
    responseData.result = true;
  }
  res.send(responseData);
});

module.exports = router;
