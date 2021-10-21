<template>
  <!-- 메인 페이지 -->
  <div class="main">
    <!-- 배너 -->
    <div class="main-image">
      <!-- 배너 어둡게 -->
      <div class="shadow">
        <router-link to="/">
          <img class="logo" src="../assets/symbol-brand02.png" />
        </router-link>
        <div class="title">부산진구청</div>
        <div class="text">불법 주정차 지수</div>
      </div>
    </div>

    <!-- 버튼란 -->
    <div class="page">
      <!-- 불법주차지수 버튼 -->
      <button-2 class="btn1" :str1="str11" :str2="str12" :url="resultUrl">
      </button-2>
      <!-- 회원가입/로그인 버튼 -->
      <div class="btns">
        <button-1 :str="str2" :url="signupUrl"></button-1>
        <button-1 :str="str3" :url="loginUrl"></button-1>
      </div>
    </div>
  </div>
</template>

<script>
  import Button1 from "../components/Button1.vue";
  import Button2 from "../components/Button2.vue";

  export default {
    data() {
      return {
        str11: "불법주차지수",
        str12: "보러가기",
        str2: "관리자 회원가입",
        str3: "로그인",
        signupUrl: "/signup",
        loginUrl: "/login",
        resultUrl: "/result",
      };
    },
    components: { Button1, Button2 },
  };
</script>

<style scoped>
  .main {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main-image {
    width: 100%;
    height: 90%;
    background: url("../assets/gu2.jpg") no-repeat center;
    background-position: 0% 28%;
    background-size: cover;
  }

  .main-image .shadow {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.322);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .main-image .shadow .title {
    /* padding: 0; */
    /* margin: 0; */
    /* text-align: center; */
    color: white;
    font-size: 60px;
    text-align: center;
    letter-spacing: 10px;
    font-weight: 700;
    text-shadow: 2px 2px 2px black;
  }

  .main-image .shadow .text {
    font-size: 40px;
    letter-spacing: 15px;
    color: rgb(255, 255, 255);
    text-shadow: 1px 1px 1px black;
    font-weight: 700;
  }

  .main-image .shadow .logo {
    position: fixed;
    width: 200px;
    top: -40px;
    left: 10px;
  }

  .page {
    width: 70%;
    height: 100%;
    /* background-color: rgb(236, 236, 236); */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .page .btn1 {
  }

  .page .btns {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
