<template>
  <!-- 메뉴바 -->
  <div class="menu">
    <!-- 취소 버튼 -->
    <img class="cancle" src="../assets/image/x.png" @click="onClickMenu" />
    <!-- 메뉴바 뒷 배경 -->
    <div class="shadow"></div>
    <!-- 메뉴바 글자 -->
    <div class="title">MENU</div>
    <div class="text">
      <router-link to="/main" @click.native="onClickOneMenu">메인</router-link>
      <router-link to="/signup" @click.native="onClickOneMenu"
        >회원가입</router-link
      >
      <router-link to="/login" @click.native="onClickOneMenu"
        >로그인</router-link
      >
      <router-link to="/result" @click.native="onClickOneMenu"
        >불법주차지수</router-link
      >
      <a href="https://www.busanjin.go.kr/">부산진구청 홈페이지</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickMenu() {
      this.$store.dispatch("CLICK_MENU");
    },
    onClickOneMenu() {
      this.$store.dispatch("CLICK_MENU");
    },
  },
};
</script>

<style scoped>
.menu {
  /* display: none; */
  width: 22%;
  height: 100%;
  right: 0;
  position: fixed;
  z-index: 100;
  background-color: #143f80;
  opacity: 0.9;
  /* transition: all 0.5s; */
  /* transform: translateX(-90%); */
  /* transform: translate(0, 0); */
  /* transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1); */
}

/* .menu .shadow {
    padding: 0;
    width: 22%;
    height: 100%;
    right: 0;
    position: fixed;
    z-index: -100;
    opacity: 0.9;
  } */

.menu .title {
  color: white;
  font-weight: 600;
  /* font-size: 20px; */
  text-align: left;
  padding-top: 20px;
  padding-left: 55px;
  cursor: default;
}

.menu .text {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-left: 30px; */
  padding-top: 100px;
}

.menu .text a {
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  opacity: 1;
  cursor: pointer;
}

.menu .text a:after {
  display: block;
  width: 100%;
  content: "";
  border-bottom: solid 2px #fff;
  transform: scaleX(0); /*크기를 0으로 줌으로써 평상시엔 밑줄 없음*/
  transition: transform 0.2s ease-in-out; /*변형 방식*/
}

.menu .text a:hover:after {
  transform: scaleX(1); /*a 속성에 hover시 기존 크기로*/
}

.menu .cancle {
  position: fixed;
  top: 10px;
  /* right: 22%; */
  /* right: 310px; */
  /* padding-right: 500px; */
  margin-left: 13px;
  width: 35px;
  opacity: 0.3;
  cursor: pointer;
  transition: all 0.2s;
}

.menu .cancle:hover {
  opacity: 1;
}
</style>
