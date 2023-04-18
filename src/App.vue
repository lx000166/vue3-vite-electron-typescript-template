<script setup lang="ts">
  import { useTransitionBackground } from "@/hooks/useTransitionBG";
  onMounted(() => {
    useTransitionBackground();
  });
</script>

<template>
  <div id="app">
    <Nav />
    <RouterView />
  </div>
</template>

<style lang="less" scoped>
  #app {
    --nav-height: 28px;
    height: 100vh;
    width: 100vw;
    padding-top: var(--nav-height);
    box-sizing: border-box;
    position: relative;
  }
</style>
