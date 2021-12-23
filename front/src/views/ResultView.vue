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
      bj1: null, // 부전1동
      bj2: null, // 부전2동
      cho: null, // 초읍동
      ba1: null, // 부암1동
      ba3: null, // 부암3동
      dg1: null, // 당감1동
      dg2: null, // 당감2동
      dg4: null, // 당감4동
      gg1: null, // 개금1동
      gg2: null, // 개금2동
      gg3: null, // 개금3동
      gy1: null, // 가야1동
      gy2: null, // 가야2동
      bc1: null, // 범천1동
      bc2: null, // 범천2동
      yj: null, // 연지동
      yj1: null, // 양정1동
      yj2: null, // 양정2동
      jp1: null, // 전포1동
      jp2: null, // 전포2동
      index: [
        9.96,
        4.76,
        6.01,
        6.35,
        4012,
        4.22,
        7.03,
        4.02,
        2.58,
        2.52,
        4.81,
        4.63,
        2.46,
        5.2,
        4.62,
        3.65,
        6.61,
        5.92,
        5.7,
        4.82,
      ],
    };
  },
  mounted() {
    this.drawMap(); // 지도 그리기
    // this.onMouseOver(); // 행정동 마우스 오버시
    // this.onMouseOut(); // 행정동 마우스 아웃시
  },
  methods: {
    // 행정도 마우스 오버
    onMouseOver() {
      function onOverMap(d) {
        // var tmp = window.getComputedStyle(d.path[0], null).transform;
        // console.log(tmp);
        d.path[0].setAttribute("fill", "#3064af");
        d.path[0].setAttribute(
          "style",
          "stroke: rgb(240, 238, 238); stroke-width: 2.5; transition: all 0.4s;"
        );
        // d.path[0].setAttribute(
        //   "style",
        //   "transition: all 0.4s; font-size:20px; color:black; transform: translateY(-7px); z-index:100;"
        // );

        // console.log(d);

        // var p = document.createElement("p");
        // var txt = document.createTextNode("하이루");
        // p.appendChild(txt);
        // var aa = document.getElementById("app");
        // aa.innerHTML = "<p style='background-color:transparent'>하이</p>";
        // console.log(aa);
        // var div = document.createElement("svg");
        // var txt = document.createTextNode("하이루");
        // div.setAttribute(
        //   "style",
        //   "position: fixed; top: 0; right:0; color: black;"
        // );
        // div.appendChild(txt);

        // d.path[0].appendChild(div);

        // var t = document
        //   .getElementById("app")
        //   .getElementsByClassName("container");
        // t.append(div);
        // // document.getElementsByClassName(".result").appendChild(div);
        // // console.log(d.path[0]);
        // console.log(t);
      }

      this.bj2.on("mouseover", onOverMap);
      this.yj.on("mouseover", onOverMap);
      this.cho.on("mouseover", onOverMap);
      this.yj1.on("mouseover", onOverMap);
      this.yj2.on("mouseover", onOverMap);
      this.jp2.on("mouseover", onOverMap);
      this.ba1.on("mouseover", onOverMap);
      this.ba3.on("mouseover", onOverMap);
      this.dg2.on("mouseover", onOverMap);
      this.dg4.on("mouseover", onOverMap);

      this.gy2.on("mouseover", onOverMap);
      this.gg1.on("mouseover", onOverMap);
      this.gg2.on("mouseover", onOverMap);
      this.gg3.on("mouseover", onOverMap);
      this.dg1.on("mouseover", onOverMap);
      this.gy1.on("mouseover", onOverMap);
      this.bj1.on("mouseover", onOverMap);
      this.jp1.on("mouseover", onOverMap);
      this.bc1.on("mouseover", onOverMap);
      this.bc2.on("mouseover", onOverMap);
    },

    // 행정동 마우스 아웃
    onMouseOut() {
      function onOutMap(d) {
        d.path[0].setAttribute("fill", "#ccc");
        d.path[0].setAttribute(
          "style",
          "stroke: rgb(240, 238, 238); stroke-width: 2.5; transition: all 0.4s;"
        );
      }

      this.bj2.on("mouseout", onOutMap);
      this.yj.on("mouseout", onOutMap);
      this.cho.on("mouseout", onOutMap);
      this.yj1.on("mouseout", onOutMap);
      this.yj2.on("mouseout", onOutMap);
      this.jp2.on("mouseout", onOutMap);
      this.ba1.on("mouseout", onOutMap);
      this.ba3.on("mouseout", onOutMap);
      this.dg2.on("mouseout", onOutMap);
      this.dg4.on("mouseout", onOutMap);

      this.gy2.on("mouseout", onOutMap);
      this.gg1.on("mouseout", onOutMap);
      this.gg2.on("mouseout", onOutMap);
      this.gg3.on("mouseout", onOutMap);
      this.dg1.on("mouseout", onOutMap);
      this.gy1.on("mouseout", onOutMap);
      this.bj1.on("mouseout", onOutMap);
      this.jp1.on("mouseout", onOutMap);
      this.bc1.on("mouseout", onOutMap);
      this.bc2.on("mouseout", onOutMap);
    },

    // 지도 그리기
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

      this.bj2 = mapLayer
        .selectAll("path")
        .filter(":nth-child(1)")
        .attr("index", this.index[0]);

      this.yj = mapLayer
        .selectAll("path")
        .filter(":nth-child(2)")
        .attr("index", this.index[1]);

      this.cho = mapLayer
        .selectAll("path")
        .filter(":nth-child(3)")
        .attr("index", this.index[2]);

      this.yj1 = mapLayer
        .selectAll("path")
        .filter(":nth-child(4)")
        .attr("index", this.index[3]);

      this.yj2 = mapLayer
        .selectAll("path")
        .filter(":nth-child(5)")
        .attr("index", this.index[4]);

      this.jp2 = mapLayer
        .selectAll("path")
        .filter(":nth-child(6)")
        .attr("index", this.index[5]);

      this.ba1 = mapLayer
        .selectAll("path")
        .filter(":nth-child(7)")
        .attr("index", this.index[6]);

      this.ba3 = mapLayer
        .selectAll("path")
        .filter(":nth-child(8)")
        .attr("index", this.index[7]);

      this.dg2 = mapLayer
        .selectAll("path")
        .filter(":nth-child(9)")
        .attr("index", this.index[8]);

      this.dg4 = mapLayer
        .selectAll("path")
        .filter(":nth-child(10)")
        .attr("index", this.index[9]);

      this.gy2 = mapLayer
        .selectAll("path")
        .filter(":nth-child(11)")
        .attr("index", this.index[10]);

      this.gg1 = mapLayer
        .selectAll("path")
        .filter(":nth-child(12)")
        .attr("index", this.index[11]);

      this.gg2 = mapLayer
        .selectAll("path")
        .filter(":nth-child(13)")
        .attr("index", this.index[12]);

      this.gg3 = mapLayer
        .selectAll("path")
        .filter(":nth-child(14)")
        .attr("index", this.index[13]);

      this.dg1 = mapLayer
        .selectAll("path")
        .filter(":nth-child(15)")
        .attr("index", this.index[14]);

      this.gy1 = mapLayer
        .selectAll("path")
        .filter(":nth-child(16)")
        .attr("index", this.index[15]);

      this.bj1 = mapLayer
        .selectAll("path")
        .filter(":nth-child(17)")
        .attr("index", this.index[16]);

      this.jp1 = mapLayer
        .selectAll("path")
        .filter(":nth-child(18)")
        .attr("index", this.index[17]);

      this.bc1 = mapLayer
        .selectAll("path")
        .filter(":nth-child(19)")
        .attr("index", this.index[18]);

      this.bc2 = mapLayer
        .selectAll("path")
        .filter(":nth-child(20)")
        .attr("index", this.index[19]);

      // 행정동 마우스 오버
      function onOverMap(d) {
        d.path[0].setAttribute("fill", "#3064af");
        d.path[0].setAttribute(
          "style",
          "stroke: rgb(240, 238, 238); stroke-width: 2.5; transition: all 0.4s;transform: translateY(-5px);"
        );

        iconsLayer
          .append("text")
          .attr("class", "dong")
          .attr("x", d.offsetX + 9)
          .attr("y", d.offsetY)
          .attr("fill", "red")
          .attr("display", "block")
          .attr("font-size", "22px")
          .attr("font-weight", "bold")
          .attr("cursor", "default")
          .text(d.target.classList[0]);

        console.log(d.attributes);
        iconsLayer
          .append("text")
          .attr("class", "illegal-index")
          .attr("x", d.offsetX + 9)
          .attr("y", d.offsetY + 20)
          .attr("fill", "red")
          .attr("display", "block")
          .attr("font-size", "20px")
          .attr("cursor", "default")
          .text("dks");
      }

      this.bj2.on("mouseover", onOverMap);
      this.yj.on("mouseover", onOverMap);
      this.cho.on("mouseover", onOverMap);
      this.yj1.on("mouseover", onOverMap);
      this.yj2.on("mouseover", onOverMap);
      this.jp2.on("mouseover", onOverMap);
      this.ba1.on("mouseover", onOverMap);
      this.ba3.on("mouseover", onOverMap);
      this.dg2.on("mouseover", onOverMap);
      this.dg4.on("mouseover", onOverMap);

      this.gy2.on("mouseover", onOverMap);
      this.gg1.on("mouseover", onOverMap);
      this.gg2.on("mouseover", onOverMap);
      this.gg3.on("mouseover", onOverMap);
      this.dg1.on("mouseover", onOverMap);
      this.gy1.on("mouseover", onOverMap);
      this.bj1.on("mouseover", onOverMap);
      this.jp1.on("mouseover", onOverMap);
      this.bc1.on("mouseover", onOverMap);
      this.bc2.on("mouseover", onOverMap);

      // 행정동 마우스 아웃
      function onOutMap(d) {
        d.path[0].setAttribute("fill", "#ccc");
        d.path[0].setAttribute(
          "style",
          "stroke: rgb(240, 238, 238); stroke-width: 2.5; transition: all 0.4s;"
        );

        d3.select(".dong").remove();
        d3.select(".illegal-index").remove();
      }

      this.bj2.on("mouseout", onOutMap);
      this.yj.on("mouseout", onOutMap);
      this.cho.on("mouseout", onOutMap);
      this.yj1.on("mouseout", onOutMap);
      this.yj2.on("mouseout", onOutMap);
      this.jp2.on("mouseout", onOutMap);
      this.ba1.on("mouseout", onOutMap);
      this.ba3.on("mouseout", onOutMap);
      this.dg2.on("mouseout", onOutMap);
      this.dg4.on("mouseout", onOutMap);

      this.gy2.on("mouseout", onOutMap);
      this.gg1.on("mouseout", onOutMap);
      this.gg2.on("mouseout", onOutMap);
      this.gg3.on("mouseout", onOutMap);
      this.dg1.on("mouseout", onOutMap);
      this.gy1.on("mouseout", onOutMap);
      this.bj1.on("mouseout", onOutMap);
      this.jp1.on("mouseout", onOutMap);
      this.bc1.on("mouseout", onOutMap);
      this.bc2.on("mouseout", onOutMap);

      function clicked(d) {
        console.log("하이루");

        mapLayer
          .append("text")
          .text(d.target.classList[0])
          .attr("x", 100)
          .attr("y", 100);
        // var i = iconsLayer
        //   .append("text")
        //   .attr("x", d.offsetX)
        //   .attr("y", d.offsetY)
        //   .attr("fill", "red")
        //   .attr("font-size", "30px")
        //   .text("하이루");
        console.log(d.target.classList[0]);
        // var tmp = window.getComputedStyle(d.path[0], null).transition;
        // var tmp2 = window.getComputedStyle(d.path[0], null).backgroundColor;
        // console.log(tmp);
        // var dd = document.getElementsByClassName("seoul")[0];
        // dd.style.transition = "all 0.3s";
        // tmp = "all 0.3s";
        // tmp2 = "red";
        // console.log(tmp, tmp2);
        // console.log(dd);
        // d.path[0].setAttribute("fill", "blue");
        // d.path[0].setAttribute("opacity", 0.5);
        // clicked2(d);
      }
      // this.bc2.on("click", clicked);
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
  z-index: 0;
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
