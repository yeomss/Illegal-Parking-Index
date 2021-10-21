<template>
  <div>
    <router-link class="btn" v-bind:to="`${url}`">{{ str }}</router-link>
  </div>
</template>

<script>
export default {
  props: ["str", "url"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.btn {
  width: 300px;
  padding: 30px 20px 30px 20px;
  border-radius: 2px;
  text-align: center;
  font-size: 20px;
  margin: 15px;

  display: block;
  background-color: #275cac;
  color: white;
  cursor: pointer;
  transition: all 0.55s;
  text-decoration: none;
  /* box-shadow: 1px 1px 1px rgb(116, 116, 116); */
}

.btn:hover {
  color: #fff;
  box-shadow: -350px 0 0 0 rgba(0, 0, 0, 0.5) inset;
  /* box-shadow: -350px 0 0 0 rgba(0, 0, 0, 0.5) inset; */
}
</style>
