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
      };
    },
    mounted() {
      this.drawMap(); // 지도 그리기
      this.onMouseOver(); // 행정동 마우스 오버시
    },
    methods: {
      // 행정도 마우스 오버
      onMouseOver() {
        function clicked(d) {
          d.path[0].setAttribute("fill", "blue");
          // d.path[0].setAttribute("height", 1000);
        }

        this.yj.on("click", clicked);
        this.cho.on("click", clicked);
        this.yj1.on("click", clicked);
        this.yj2.on("click", clicked);
        this.jp2.on("click", clicked);
        this.ba1.on("click", clicked);
        this.ba3.on("click", clicked);
        this.dg2.on("click", clicked);
        this.dg4.on("click", clicked);
        this.gy2.on("click", clicked);
        this.gg1.on("click", clicked);
        this.gg2.on("click", clicked);
      },

      // 행정동 마우스 아웃
      onMouseOut() {},

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
        var projection = d3
          .geoMercator()
          .scale(1)
          .translate([0, 0]);

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

        this.yj = mapLayer.selectAll("path").filter(":nth-child(2)");
        this.cho = mapLayer.selectAll("path").filter(":nth-child(3)");
        this.yj1 = mapLayer.selectAll("path").filter(":nth-child(4)");
        this.yj2 = mapLayer.selectAll("path").filter(":nth-child(5)");
        this.jp2 = mapLayer.selectAll("path").filter(":nth-child(6)");
        this.ba1 = mapLayer.selectAll("path").filter(":nth-child(7)");
        this.ba3 = mapLayer.selectAll("path").filter(":nth-child(8)");
        this.dg2 = mapLayer.selectAll("path").filter(":nth-child(9)");
        this.dg4 = mapLayer.selectAll("path").filter(":nth-child(10)");
        this.gy2 = mapLayer.selectAll("path").filter(":nth-child(11)");
        this.gg1 = mapLayer.selectAll("path").filter(":nth-child(12)");
        this.gg2 = mapLayer.selectAll("path").filter(":nth-child(13)");

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
