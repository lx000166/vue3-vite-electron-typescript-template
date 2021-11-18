<!--
 * @Author: lx000
 * @Date: 2021-11-09 15:58:10
 * @LastEditTime: 2021-11-18 12:15:12
 * @Description: 描述
-->
<script setup lang="ts">
  import { startColor, endColor, realStart, realEnd, setWatch } from "@/hooks/useLineGradient";
  import Sidebar from "./sidebar/sidebar.vue";
  import Nav from "@/layout/nav/nav.vue";
  import Main from "@/layout/main/main.vue";
  import "@/assets/icon/iconfont.css"; // 字体图标
  setWatch();
</script>
<template>
  <div class="layout-wapper w-screen h-screen rounded-lg">
    <!-- nav -->
    <Nav />
    <!-- sidebar -->
    <Sidebar />
    <!-- main -->
    <Main />
  </div>
</template>
<style>
  .layout-wapper {
    --start-color-real: v-bind(realStart);
    --end-color-real: v-bind(realEnd);
    color: var(--end-color-real);
    background: linear-gradient(165deg, v-bind(startColor), v-bind(endColor));
  }
</style>
