<template>
  <div class="result">
    <h1>불법 주정차 지수</h1>
    <button @click="onClick">버튼</button>
    <!-- <div class="container"> -->
    <!-- <svg width="500" height="500"></svg> -->
    <canvas width="960" height="600"></canvas>
    <!-- </div> -->
    <!-- <div class="page"> -->
    <!-- 결과페이지 -->
    <!-- <div class="map">지도</div> -->
    <!-- </div> -->
  </div>
</template>

<script>
// import * as d3 from "d3";
// import * as topojson from "topojson-client";

export default {
  methods: {
    onClick() {
      // const data = [5, 10, 15, 20];
      // const svg = d3.select("svg");
      // data.forEach((d, i) => {
      //   svg
      //     .append("rect")
      //     .attr("height", data[i])
      //     .attr("width", 40)
      //     .attr("x", 50 * i)
      //     .attr("y", 100 - data[i]);
      // });
      // console.log(data);
    },
  },
};
</script>

<style scoped>
.result {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}

.result h1 {
  margin: 30px;
  margin-top: 90px;
  margin-bottom: 70px;
}

.result .page {
  width: 90%;
  height: 100%;
  background-color: white;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page .map {
  width: 700px;
  height: 1500px;
  background-color: aqua;
}
</style>
