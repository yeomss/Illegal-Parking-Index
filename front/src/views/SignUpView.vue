<template>
  <div class="signup">
    <div class="banner">
      <router-link to="/">
        <img class="logo" src="../assets/symbol-brand01.png" />
      </router-link>
      <div class="title">회원가입</div>
    </div>
    <div class="input">
      <!-- <div class="text">회원가입</div> -->
      <form action="" method="post">
        <input type="text" name="id" placeholder="아이디" />
        <input type="password" name="pw" placeholder="비밀번호" />
        <input type="text" name="email" placeholder="이메일" />
        <div>이메일 확인</div>
        <input type="text" name="email" placeholder="인증번호" />
        <div>인증번호 확인</div>
        <input type="submit" class="btn" value="확인" />
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        str1: "확인",
        url1: "/signup",
      };
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
    padding-top: 90px;
    /* height: 30%; */
    text-align: center;
    letter-spacing: 10px;
    text-shadow: 1px 1px 1px rgb(0, 0, 0);
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
  }

  .btn:hover {
    box-shadow: 0 -100px 0 0 rgba(0, 0, 0, 0.5) inset;
  }
</style>
