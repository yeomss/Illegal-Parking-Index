<template>
  <div class="signup">
    <!-- 배너 -->
    <div class="banner">
      <router-link to="/">
        <img class="logo" src="../assets/image/symbol-brand01.png" />
      </router-link>
      <div class="title">회원가입</div>
    </div>

    <!-- 입력란 -->
    <div class="input">
      <!-- <div class="text">회원가입</div> -->
      <form action="/signup">
        <input type="text" name="id" placeholder="아이디" v-model="id" />
        <input type="password" name="pw" placeholder="비밀번호" v-model="pw" />

        <!-- 이메일 -->
        <span class="email">
          <input
            type="text"
            name="email"
            placeholder="busanjingu@daum.net"
            v-model="email"
          />
          <button class="email-btn btn" @click="sendMail">전송</button>
        </span>

        <!-- 이메일 인증번호 확인 -->
        <span class="authNum">
          <input
            type="text"
            name="authNum"
            placeholder="인증번호"
            v-model="uAuthNum"
          />
          <button class="authNum-btn btn" @click="checkAuthNumber">
            확인
          </button>
        </span>

        <input type="submit" class="btn" value="확인" @click="onClickSignUp" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: "",
      pw: "",
      email: "",
      authNum: "",
      uAuthNum: "",
      isAuthOk: false,
      isOk: false,
    };
  },

  methods: {
    // 이메일에 인증번호 전송
    sendMail(e) {
      e.preventDefault();
      console.log("이메일 전송 버튼 클릭");

      // 랜덤 인증 번호 생성
      const randomNumber = (min, max) => {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        return num;
      };

      this.authNum = randomNumber(111111, 999999);

      var data = { email: this.email, authNum: this.authNum };
      console.log(data);
      var mail = data.email.split("@")[1]; // 뒤에 이메일

      if (mail !== "daum.net") {
        alert("올바른 이메일을 입력하시오.\nex) korea.com");
      } else {
        // post
        var url = "http://localhost:8888/signup/email";
        alert("인증번호가 전송되었습니다.");
        axios
          .post(url, data)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    // 인증번호 확인
    checkAuthNumber(e) {
      e.preventDefault();
      var data = { authNum: this.authNum, uAuthNum: Number(this.uAuthNum) };
      var url = "http://localhost:8888/signup/authNum";
      console.log(data);

      axios
        .post(url, data)
        .then((res) => {
          console.log(res);
          this.isAuthOk = res.data.result;
          if (res.data.result) {
            alert("올바른 인증 번호");
          } else {
            alert("인증번호 다름");
          }
        })
        .catch((err) => {
          console.log(err);
          this.isAuthOk = false;
        });
    },

    // 회원가입 버튼 클릭
    onClickSignUp(e) {
      e.preventDefault();
      var data = {
        id: this.id,
        pw: this.pw,
        email: this.email,
      };
      console.log(data);

      if (this.id == "") {
        alert("아이디 입력 바람");
      } else if (this.pw == "") {
        alert("비밀번호 입력 바람");
      } else if (this.email == "") {
        alert("이메일 입력 바람");
      } else {
        // 인증 번호가 맞다고 나오면 회원가입 post
        if (this.isAuthOk) {
          var url = "http://localhost:8888/signup";
          axios
            .post(url, data)
            .then((res) => {
              console.log(res);
              if (res.data.result) {
                this.isAuthOk = false;
                alert("회원가입 완료!");
                window.location.replace("/login");
              } else {
                this.isAuthOk = false;
                alert("중복된 아이디가 존재");
              }
            })
            .catch((err) => console.log(err));
        } else {
          alert("회원가입 노노");
        }
      }
    },
  },
};
</script>

<style scoped>
.signup {
  height: 100%;
  /* box-sizing: content-box; */
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
}

.banner {
  height: 30%;
  margin: 0;
  padding: 0;
  background-color: #f14d4e;
  /* background: linear-gradient(to right top, #f14d4e); */
}

.banner .logo {
  position: fixed;
  width: 200px;
  top: -40px;
  left: 10px;
}

.banner .title {
  color: white;
  font-size: 40px;
  font-weight: 600;
  padding-top: 150px;
  /* height: 30%; */
  text-align: center;
  letter-spacing: 10px;
  text-shadow: 1px 1px 1px rgb(0, 0, 0);
  cursor: default;
}

.input {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65%;
}

.input .text {
  color: black;
  /* text-shadow: 1px 1px 1px rgb(0, 0, 0); */
  font-size: 30px;
  letter-spacing: 5px;
  font-weight: 600;
  margin: 10px;
}

.input form {
  width: 500px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  /* padding: 100px; */
}

.input form input {
  padding: 20px;
  margin: 10px;
}

.btn {
  /* align-items: center; */
  /* justify-content: center; */
  /* width: 100px; */
  /* padding: -10px; */
  /* height: 50px; */
  text-align: center;
  background-color: #275cac;
  border: none;
  color: white;
  font-size: 20px;
  padding: 0;
  transition: all 0.55s;
  font-family: "Apple SD Gothic", "Noto Sans KR", "맑은고딕", "Nanum Gothic",
    sans-serif;
  cursor: pointer;
  /* letter-spacing: 10px; */
}

.btn:hover {
  box-shadow: 0 -100px 0 0 rgba(0, 0, 0, 0.5) inset;
}

.email,
.authNum {
  display: grid;
  grid-template-columns: 80% 20%;
}

.email .email-btn,
.authNum .authNum-btn {
  letter-spacing: 0;
  width: 80%;
  /* height: 49%; */
  border-radius: 2px;
  margin: 10px;
  /* padding-top: 18px; */
  /* margin-top: 10px; */
  /* padding: 10px;x */
  font-size: 17px;
}
</style>
