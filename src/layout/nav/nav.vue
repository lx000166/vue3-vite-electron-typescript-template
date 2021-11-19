<!--
 * @Author: lx000
 * @Date: 2021-11-09 19:25:56
 * @LastEditTime: 2021-11-19 09:23:55
 * @Description: 描述
-->
<script setup lang="ts">
  import navIcon from "./nav-icon.vue";
  import navMenu from "./nav-menu.vue";
</script>

<template>
  <nav id="nav" class="drag fixed">
    <navMenu />
    <navIcon />
  </nav>
</template>
<style scoped>
  #nav {
    top: 0;
    z-index: 20;
    width: 100vw;
    display: flex;
    height: var(--nav-height);
    justify-content: space-between;
  }
</style>
