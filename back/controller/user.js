const { smtpTransport } = require("../config/email");

const sendAuthMail = async (email, authNum) => {
  let message = {
    from: "부산지구청",
    to: email,
    subject: "서브젝트입니다.",
    text: "다음의 번호를 입력해주세요: " + authNum,
    html: "<b>흠냐링</b>",
  };

  try {
    let result = await smtpTransport.sendMail(message);
    console.log("result:", result);
  } catch (err) {
    console.log(err);
    smtpTransport.close();
  }
  smtpTransport.close();
};

module.exports = {
  sendAuthMail,
};
