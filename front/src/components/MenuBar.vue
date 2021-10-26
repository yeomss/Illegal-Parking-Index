<template>
  <!-- 메뉴바 -->
  <div class="menu">
    <!-- 취소 버튼 -->
    <img class="cancle" src="../assets/image/x.png" @click="onClickMenu" />
    <!-- 메뉴바 뒷 배경 -->
    <div class="shadow"></div>
    <!-- 메뉴바 글자 -->
    <div class="title">MENU</div>

    <!-- 로그인 상태 -->
    <div v-if="userToken" class="menu-sub">
      <div class="text">
        <router-link to="/main" @click.native="onClickOneMenu"
          >메인</router-link
        >
        <router-link to="/result" @click.native="onClickOneMenu"
          >불법주차지수</router-link
        >
        <!-- <router-link to="/mypage" @click.native="onClickOneMenu"
          >불법주차지수 관리</router-link
        > -->
        <a href="https://www.busanjin.go.kr/">부산진구청 홈페이지</a>
      </div>

      <div class="user">
        <a href="/mypage"><i class="fas fa-cog settings"></i></a>
        <div class="logout" @click="onClickLogout">로그아웃</div>
      </div>
    </div>

    <!-- 로그아웃 상태 -->
    <div v-else>
      <div class="text">
        <router-link to="/main" @click.native="onClickOneMenu"
          >메인</router-link
        >
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      userToken: false,
    };
  },
  created() {
    this.userToken = sessionStorage.getItem("userToken");
  },
  methods: {
    onClickMenu() {
      this.$store.dispatch("CLICK_MENU");
    },
    onClickOneMenu() {
      this.$store.dispatch("CLICK_MENU");
    },
    onClickLogout() {
      sessionStorage.removeItem("userToken");
      this.userToken = false;
      alert("로그아웃 하였습니다.");
      window.location.replace("/");
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
  opacity: 0.95;
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

.menu-sub {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}

.menu-sub .user {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 44px;
  margin-top: 100px;
}

.menu-sub .user .settings {
  color: black;
  padding: 0;
  margin: 0;
  font-size: 40px;
  cursor: pointer;
  /* padding-top: 2px; */
}

.settings:hover {
  opacity: 0.7;
}

.menu-sub .user .logout {
  background-color: black;
  color: white;
  border-radius: 10px;
  text-align: center;
  padding: 10px 20px;
  /* height: 50px; */
  /* padding-top: 10px; */
  /* padding: 5% 10%; */
  /* margin-top: 10px; */
  cursor: pointer;
  transition: all 0.3s;
}

.logout:hover {
  opacity: 0.7;
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
