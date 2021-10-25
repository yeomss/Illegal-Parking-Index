<template>
  <div id="app">
    <transition name="slide-fade">
      <MenuBar v-show="this.$store.state.isToggledMenu" />
    </transition>
    <img class="menubar" @click="onClickMenu" src="./assets/image/menu.png" />
    <router-view></router-view>
  </div>
</template>

<script>
import MenuBar from "../src/components/MenuBar.vue";

export default {
  name: "App",
  components: {
    MenuBar,
  },
  data() {
    return {
      isToggledMenu: this.$store.state.isToggledMenu,
    };
  },
  methods: {
    onClickMenu() {
      this.$store.dispatch("CLICK_MENU");
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Apple SD Gothic";
  src: url("./assets/font/AppleSDGothicNeoM.ttf") format("truetype");
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: "Apple SD Gothic", "Noto Sans KR", "맑은고딕", "Nanum Gothic",
    sans-serif;
  background-color: rgb(240, 238, 238);
}

#app {
  height: 100%;
  overflow: hidden;
}

.menubar {
  position: fixed;
  top: 20px;
  right: 30px;
  width: 35px;
  cursor: pointer;
  color: white;
  transition: all 0.5s;
  opacity: 0.8;
}

.menubar:hover {
  transform: translateX(-15%);
  opacity: 1;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
