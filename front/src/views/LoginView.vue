<template>
  <div class="login">
    <!-- 배너 -->
    <div class="banner">
      <router-link to="/">
        <img class="logo" src="../assets/image/symbol-brand02.png" />
      </router-link>
      <div class="title">로그인</div>
    </div>

    <!-- 입력란 -->
    <div class="input">
      <div class="text">아이디와 비밀번호를 입력해주세요</div>
      <form action="" method="post">
        <input type="text" name="id" placeholder="아이디" v-model="id" />
        <input type="password" name="pw" placeholder="비밀번호" v-model="pw" />
        <input type="submit" class="btn" value="확인" @click="onClickLogin" />
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
      isOk: false,
      isId: "",
    };
  },

  methods: {
    // 로그인 버튼 클릭
    onClickLogin(e) {
      e.preventDefault();

      var data = {
        id: this.id,
        pw: this.pw,
      };
      var url = "http://localhost:8888/login";

      axios
        .post(url, data)
        .then((res) => {
          if (res.data.result) {
            alert(`${res.data.id}님 반값습니다.`);
            document.location.reload();
          } else {
            alert("다시 로그인 해주세요");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.login {
  height: 100%;
}

.banner {
  height: 30%;
  margin: 0;
  padding: 0;
  background-color: #275cac;
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
  height: 55%;
}

.input .text {
  color: black;
  /* text-shadow: 1px 1px 1px rgb(0, 0, 0); */
  font-size: 15px;
  /* letter-spacing: 5px; */
  /* font-weight: 600; */
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
  /* letter-spacing: 5px; */
}

.btn:hover {
  box-shadow: 0 -100px 0 0 rgba(0, 0, 0, 0.5) inset;
}
</style>
