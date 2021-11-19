<!--
 * @Author: lx000
 * @Date: 2021-11-12 17:27:12
 * @LastEditTime: 2021-11-19 10:06:53
 * @Description: 描述
-->
<script setup lang="ts">
  const cyclicNav = [
    { par: "mini", icon: "icon-2zuixiaohua-2" },
    { par: "big", icon: "icon-zuidahua1" },
    { par: "close", icon: "icon-close-bold" }
  ];
  const navBarClick = (val: string) => {
    window.ipc.send("navBar", val);
  };
</script>
<template>
  <div class="iconBox">
    <span v-for="item in cyclicNav" :key="item.par" @click="navBarClick(item.par)" class="no-drag">
      <i style="font-size: 12px" :class="item.icon" class="iconfont"></i>
    </span>
  </div>
</template>
<style scoped>
  .iconBox > span {
    display: inline-block;
    text-align: center;
    height: var(--nav-height);
    width: var(--nav-height);
    line-height: var(--nav-height);
    transition: transform 0.3s, text-shadow 0.3s;
  }
  .iconBox > span:hover {
    transform: scale(1.1);
    text-shadow: 0 0 4px var(--end-transition-color);
  }
  .iconBox > i {
    padding: 0;
  }
</style>
