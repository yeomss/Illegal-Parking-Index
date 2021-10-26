const { smtpTransport } = require("../config/email");
const email = require("../config/email");

const sendAuthMail = async (email, authNum) => {
  let message = {
    from: `"부산진구청" <${email.email}>`,
    to: email,
    subject: "[부산진구청] 불법주정차 지수 인증 메일 입니다.",
    text: "다음의 인증 번호를 입력해주세요: " + authNum,
    // html: "<b>흠냐링</b>",
  };

  try {
    let result = await smtpTransport.sendMail(message);
    console.log("result:", result);
    smtpTransport.close();
  } catch (err) {
    console.log(err);
    smtpTransport.close();
  }
  smtpTransport.close();
};

module.exports = {
  sendAuthMail,
};
