<!--
 * @Author: lx000
 * @Date: 2021-12-03 10:05:24
 * @LastEditTime: 2021-12-03 16:52:29
 * @Description: 描述
-->
<script setup lang="ts">
  const navBar = (val: string) => {
    window.ipc.send("navBar", val);
  };
</script>

<template>
  <div style="-webkit-app-region: no-drag">
    <a-button @click="navBar('mini')" type="dashed" danger>最小化</a-button>
    <a-button @click="navBar('big')" type="dashed" danger>最大化</a-button>
    <a-button @click="navBar('close')" type="dashed" danger>关闭</a-button>
  </div>
</template>

<style>
  body {
    background: linear-gradient(165deg, rgba(170, 74, 106, 1), rgba(7, 51, 58, 1));
    height: 100vh;
    width: 100vw;
    -webkit-app-region: drag;
  }
</style>
