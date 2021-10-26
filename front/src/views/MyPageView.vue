<template>
  <div class="mypage">
    <div class="banner">
      <router-link to="/">
        <img class="logo" src="../assets/image/symbol-brand02.png" />
      </router-link>
      <div class="title">마이페이지</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mypage {
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
</style>
