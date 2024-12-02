<template>
  <div class="map">
    <div ref="chinaMap" id="chinaMap" class="map"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import chinaJSON from "@/assets/json/china.json";

export default {
  name: "ChinaMap",
  mounted() {
    this.loadChinaMap();
  },
  methods: {
    loadChinaMap() {
      const chart = echarts.init(document.getElementById("chinaMap"));
      echarts.registerMap("china", chinaJSON);

      const option = {
        series: [
          {
            type: "map",
            map: "china",
            label: {
              show: true,
              color: "#333",
              fontSize: 12,
            },
            itemStyle: {
              normal: {
                areaColor: "#c9e6ff",
                borderColor: "#fff",
              },
              emphasis: {
                areaColor: "#ff6600",
              },
            },
          },
        ],
      };

      chart.setOption(option);
    },
  },
};
</script>

<style scoped>
.map-container {
  width: 100%; /* 地图占30% */
  margin-right: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.map {
  width: 100%;
  height: 500px;
  background-color: #ffffff;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
