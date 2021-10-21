<template>
  <div class="signup">
    <div class="banner">
      <a href="https://www.busanjin.go.kr/">
        <img class="logo" src="../assets/symbol-brand01.png" />
      </a>
      <!-- <div class="title">회원가입</div> -->
    </div>
    <div class="input">
      <h1>회원가입</h1>
      <form action="" method="post">
        <input type="text" name="id" placeholder="아이디" />
        <input type="password" name="pw" placeholder="비밀번호" />
        <button-1 class="btn" :str="str1" :url="url1"></button-1>
        <!-- <input type="submit" /> -->
      </form>
    </div>
  </div>
</template>

<script>
import Button1 from "../components/Button1.vue";
export default {
  data() {
    return {
      str1: "확인",
      url1: "/signup",
    };
  },
  components: { Button1 },
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

.input {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
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
  padding: 30px;
  margin: 10px;
}

.btn {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  width: 100px;
  /* padding: -10px; */
  background-color: #275cac;
}

.btn1 a {
  padding: 0;
  margin: 0;
  width: 200px;
  /* background-color: aqua; */
  /* color: red; */
}
</style>
