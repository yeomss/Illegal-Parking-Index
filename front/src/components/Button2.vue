<template>
  <div class="btn">
    <router-link class="str" :to="`${url}`">
      <p>{{ str1 }}</p>
      <p>{{ str2 }}</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: ["str1", "str2", "url"],
  };
</script>

<style scoped>
  .btn {
    width: 300px;
    font-size: 25px;
    /* border-radius: 30px 30px 30px 30px; */
    border-radius: 15px;
    padding: 35px;
    text-align: center;

    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* line-height: 40px; */
    display: block;
    background-color: #f14d4e;
    cursor: pointer;
    transition: all 0.45s;
  }

  .btn:hover {
    box-shadow: -400px 0 0 0 rgba(0, 0, 0, 0.5) inset;
    /* box-shadow: 0 200px 0 0 rgba(0, 0, 0, 0.25) inset,
    0 -200px 0 0 rgba(0, 0, 0, 0.25) inset; */
  }

  .str {
    color: white;
    text-decoration: none;
  }
  .str p {
    margin: 0;
    padding: 0;
  }
</style>
