<!--
 * @Author: lx000
 * @Date: 2021-11-10 11:38:58
 * @LastEditTime: 2021-11-19 00:39:12
 * @Description: 描述
-->
<script setup lang="ts">
  import { ref, Ref } from "vue";
  import { useEcharts } from "@/hooks/useEcharts";
  import { chartDefault_loop } from "@/utils/echarts";
  const chart: Ref<HTMLElement | null> = ref(null);
  const { setOptions, disposeChart } = useEcharts(chart);
  setOptions(chartDefault_loop);
  disposeChart();
</script>
<template>
  <Container>
    <div class="chart fixed z-0 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-3/4 w-3/4" ref="chart"></div>
  </Container>
</template>
