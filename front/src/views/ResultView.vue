<template>
  <div class="result">
    <router-link to="/">
      <img class="logo" src="../assets/image/symbol-brand03.png" />
    </router-link>

    <div class="container"></div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import * as d3 from "d3";
import jingu from "../assets/json/jingu_dong.json";

export default {
  created() {},
  data() {
    return {
      test: "",
    };
  },
  mounted() {
    this.drawMap();
    this.chagne();
  },
  methods: {
    chagne() {
      function clicked(d) {
        console.log("222");
        // var tmp = window.getComputedStyle(d.path[0], null).transition;
        d.path[0].setAttribute("fill", "blue");
        d.path[0].setAttribute("height", 1000);
        // console.log(d.path);
        // d.path[0].setAttribute("opacity", 0.5);
      }

      this.test.on("click", clicked);
    },
    drawMap() {
      // 맵의 중앙 위경도 찾기
      var center = d3.geoCentroid(jingu);
      var centered = null;

      // 현재의 브라우져 크기 계산
      var divWidth = document.querySelector(".container").clientWidth;
      var width = divWidth < 1000 ? divWidth * 0.9 : 1000;
      var divHeight = document.querySelector(".container").clientHeight;
      var height = divHeight < 1000 ? divHeight * 0.9 : 1000;

      // 지도를 그리기 위한 svg 생성
      // append('svg') -> .map에 일정크기의 svg를 붙인다.
      // attr() -> 이거는 클래스의 속성을 조정
      // attr("class", "map") -> 이렇게 하면 class="map"
      const svg = d3
        .select(".container")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "svg");

      // 지도의 배경 그리기
      // append('rect') -> svg에 <rect></rect> 가 붙음. 이는 svg의 직사각형 요소.
      // attr('fill', 'aqua') -> 배경의 색깔 조정
      // eslint-disable-next-line no-unused-vars
      const background = svg
        .append("rect")
        .attr("class", "background")
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "none");

      // 지도가 그려지는 그래픽 노드 생성
      // append('g') -> svg에 <g></g> 가 붙음.
      const map = svg.append("g");

      // 지도가 그려지는 그래픽 노드
      // map에 class='effect-layer'인 <g></g>가 붙음
      const mapLayer = map.append("g").classed("effect-layer", true);

      // 아이콘이 그려지는 그래픽 노드
      const iconsLayer = map.append("g").classed("icons-layer", true);

      // 지도의 출력 방법을 선택
      // d3.geoMercator() 만 하면 콘솔 안찎힘.
      // scale(1) 까지 더하기
      var projection = d3.geoMercator().scale(1).translate([0, 0]);

      // svg 그림의 크기에 따라 출력될 지도의 크기를 다시 계산
      const path = d3.geoPath().projection(projection);

      const bounds = path.bounds(jingu); // 그림 크기의 절반 (?)

      const widthScale = (bounds[1][1] - bounds[0][0]) / width;
      const heightScale = (bounds[1][1] - bounds[0][1]) / height;
      const scale = 0.95 / Math.max(widthScale, heightScale);

      const xoffset =
        width / 2 - (scale * (bounds[1][0] + bounds[0][0])) / 2 + 0;
      const yoffset =
        height / 2 - (scale * (bounds[1][1] + bounds[0][1])) / 2 + 0;
      const offset = [xoffset, yoffset];

      projection.scale(scale).translate(offset);

      // 얘는 뭐지?
      const color = d3
        .scaleLinear()
        .domain([1, 20])
        .clamp(true)
        .range(["#595959", "#595959"]);

      // 지도 그리기
      // 지도는 effect-layer 안에 들어가게 된다.
      // enter() 안에 json 파일이 들어가있다.
      // append('path') -> <path></path> 가 g.effect-layer에 넣어진다.
      // 여기서 path는 svg 에서 선을 나타낸다.
      // 그 속성인 d에 path 값을 넣는다. (이때 값이 들어가게 되는것임.)
      // console.log(jingu.features[0]);
      mapLayer
        .selectAll("path")
        .data(jingu.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("class", (d) => {
          return d.properties.temp.split(" ")[1];
        })
        .attr("vector-effect", "non-scaling-stroke")
        .style("stroke", "#f0eeee")
        .style("stroke-width", "2.5")
        .style("transition", "all 0.3s")
        .attr("fill", "#ccc");

      // var b = mapLayer.select("path", 1);
      var b = mapLayer.selectAll("path").filter(":nth-child(2)");
      console.log(b);
      // var bujeon2 = mapLayer.select("path", 0).classed("bujeon2", true);

      // var yeonji = mapLayer.select("path", 1);
      // console.log(bujeon2.properties);
      // .classed("yeonji", true)
      // .style("transition", "all 0.3s");

      // console.log(mapLayer.selectAll("path"));
      // var a = mapLayer
      //   .selectAll("path")
      //   .select("path", 1)
      //   .classed("a", true)
      //   .attr("fill", "aqua")
      //   .style("transition", "all 0.3s");

      // console.log(mapLayer.selectAll("path")._groups[0][1]);
      // var yeonji = mapLayer
      //   .select("path", 1)
      //   .classed("yeonji", true)
      //   .style("transition", "all 0.3s");

      this.test = b;

      function clicked(d) {
        console.log("하이루");
        var tmp = window.getComputedStyle(d.path[0], null).transition;
        // var tmp2 = window.getComputedStyle(d.path[0], null).backgroundColor;
        // console.log(tmp);
        // var dd = document.getElementsByClassName("seoul")[0];
        // dd.style.transition = "all 0.3s";
        // tmp = "all 0.3s";
        // tmp2 = "red";
        // console.log(tmp, tmp2);
        // console.log(dd);
        // d.path[0].setAttribute("fill", "blue");
        d.path[0].setAttribute("opacity", 0.5);
        // clicked2(d);
      }

      // b.on("mouseover", clicked);
      // b.on("mouseout", () => {
      //   console.log("하이루");
      // });
      // b.on("click", clicked);
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
  justify-content: center;
  align-items: center;
  overflow: auto;
  /* transition: all 0.5s; */
}

.logo {
  position: fixed;
  width: 200px;
  top: -40px;
  left: 10px;
}

.container {
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.container .text {
  background-color: aqua;
}
</style>
