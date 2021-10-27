<template>
  <div id="content">
    <h1>하이루</h1>
    <svg width="800px" height="400px">
      <g class="map"></g>
    </svg>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
// import jingu from "../assets/json/korea_test.geojson";
import * as d3 from "d3";

export default {
  created() {},
  mounted() {
    this.map();
  },
  methods: {
    map() {
      let geojson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              NM: "Africa",
            },
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-6, 36],
                  [33, 30],
                  [43, 11],
                  [51, 12],
                  [29, -33],
                  [18, -35],
                  [7, 5],
                  [-17, 14],
                  [-6, 36],
                ],
              ],
            },
          },
          {
            type: "Feature",
            properties: {
              NM: "Australia",
            },
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [143, -11],
                  [153, -28],
                  [144, -38],
                  [131, -31],
                  [116, -35],
                  [114, -22],
                  [136, -12],
                  [140, -17],
                  [143, -11],
                ],
              ],
            },
          },
          {
            type: "Feature",
            properties: {
              NM: "Timbuktu",
            },
            geometry: {
              type: "Point",
              coordinates: [-3.0026, 16.7666],
            },
          },
        ],
      };

      let projection = d3.geoEquirectangular().scale(200).translate([200, 150]);

      let geoGenerator = d3.geoPath().projection(projection);

      function update(geojson) {
        let u = d3
          .select("#content g.map")
          .selectAll("path")
          .data(geojson.features);

        u.enter().append("path").attr("d", geoGenerator);
      }

      update(geojson);
    },
  },
};
</script>

<style scoped></style>
