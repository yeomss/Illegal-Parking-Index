<template>
  <div id="app">
    <router-link to="/file">파일 업로드</router-link> |
    <router-link to="/result">결과 화면</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
html {
  display: flex;
  /* justify-content: center; */
}
#app {
}
</style>
