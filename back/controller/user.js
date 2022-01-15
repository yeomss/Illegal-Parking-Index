const { smtpTransport } = require("../config/email");
const { emailInfo } = require("../config/email");

const sendAuthMail = async (email, authNum) => {
  let message = {
    from: `"부산진구청" <${emailInfo.email}>`,
    to: email,
    subject: "[부산진구청] 불법주차지수 회원가입 인증 메일 입니다.",
    text: "다음의 인증 번호를 입력해주세요: " + authNum,
  };

  await smtpTransport.sendMail(message, (err, res) => {
    if (err) throw err;
    console.log("result:", res);
  });

  // smtpTransport.close();

  // try {
  // } catch (err) {
  //   console.log(err);
  // }
};

module.exports = {
  sendAuthMail,
};
